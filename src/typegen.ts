// heavily inspired by https://github.com/anttiviljami/openapi-client-axios/blob/master/src/typegen/typegen.ts
// thanks @anttiviljami!

import _ from 'lodash'
import OpenAPIClientAxios, { Document, HttpMethod, Operation } from "openapi-client-axios"
import DtsGenerator, {
    ExportedType,
} from "@anttiviljami/dtsgenerator/dist/core/dtsGenerator"
import RefParser from "@apidevtools/json-schema-ref-parser"
import { parseSchema } from "@anttiviljami/dtsgenerator/dist/core/type"
import indent from './utils/indent'

interface TypegenOptions {
    transformOperationName?: (operation: string) => string
}

export default class OASTypeGenerator {
    static async generate(
        definition: Document | string,
        opts: TypegenOptions
    ) {
        const rootSchema = await RefParser.bundle(definition)
        const schema = parseSchema(rootSchema as any)
        const generator = new DtsGenerator([schema])
        const schemaTypes = await generator.generate()
        const exportedTypes = generator.getExports()
        const api = new OpenAPIClientAxios({ definition })
        await api.init()
        const operationTypings = OASTypeGenerator.generateOperationMethodTypings(
            api,
            exportedTypes,
            opts
        )
    
        const imports = [
            "import type {",
            "    OpenAPIClient,",
            "    Parameters,",
            "    Document,",
            "    UnknownParamsObject,",
            "    OperationResponse,",
            "    AxiosRequestConfig,",
            `} from 'openapi-client-axios'`,
        ].join("\n")
    
        return [imports, schemaTypes, operationTypings]
    }

    private static generateMethodForOperation(
        methodName: string,
        operation: Operation,
        exportTypes: ExportedType[]
    ) {
        const { operationId, summary, description } = operation
    
        // parameters arg
        const normalizedOperationId = operationId
        const parameterTypePaths = _.chain([
            _.find(exportTypes, {
                schemaRef: `#/paths/${normalizedOperationId}/pathParameters`,
            }),
            _.find(exportTypes, {
                schemaRef: `#/paths/${normalizedOperationId}/queryParameters`,
            }),
            _.find(exportTypes, {
                schemaRef: `#/paths/${normalizedOperationId}/headerParameters`,
            }),
            _.find(exportTypes, {
                schemaRef: `#/paths/${normalizedOperationId}/cookieParameters`,
            }),
        ])
            .filter()
            .map("path")
            .value()
    
        const parametersType = !_.isEmpty(parameterTypePaths)
            ? parameterTypePaths.join(" & ")
            : "UnknownParamsObject"
        const parametersArg = `parameters?: Parameters<${parametersType}> | null`
    
        const requestBodyType = _.find(exportTypes, {
            schemaRef: `#/paths/${normalizedOperationId}/requestBody`,
        })
        const dataArg = `data?: ${requestBodyType ? requestBodyType.path : "any"}`
    
        const responseTypePaths = _.chain(exportTypes)
            .filter(({ schemaRef }: any) =>
                schemaRef.startsWith(`#/paths/${normalizedOperationId}/responses/2`)
            )
            .map(({ path }) =>
                path
                    .split(".")
                    // Operation.Responses.200 => Operation.Responses.$200
                    .map((key, i) =>
                        i === path.split(".").length - 1 ? `$${key.replace('$', '')}` : key
                    )
                    .join(".")
            )
            .value()
        const responseType = !_.isEmpty(responseTypePaths)
            ? responseTypePaths.join(" | ")
            : "any"
        const returnType = `OperationResponse<${responseType}>`
    
        const operationArgs = [
            parametersArg,
            dataArg,
            "config?: AxiosRequestConfig",
        ]
        const operationMethod = `'${methodName}'(\n${operationArgs
            .map((arg) => indent(arg, 4))
            .join(",\n")}  \n): ${returnType}`
    
        const content = _.filter([summary, description]).join("\n\n")
        const comment =
            "/**\n" +
            indent(
                content === "" ? methodName : `${methodName} - ${content}`,
                1,
                {
                    indent: " * ",
                    includeEmptyLines: true,
                }
            ) +
            "\n */"
    
        return [comment, operationMethod].join("\n")
    }

    private static generateOperationMethodTypings(
        api: OpenAPIClientAxios,
        exportTypes: ExportedType[],
        opts: TypegenOptions,
    ) {
        const operations = api.getOperations()
        const operationTypings = operations.map((op) => {
            const defaultTransform = (operation: string) => operation
            const methodName = (opts.transformOperationName || defaultTransform)(op.operationId || 'fvck')
            return OASTypeGenerator.generateMethodForOperation(
                methodName, op, exportTypes
            )
        })
    
        const pathOperationTypes = _.entries(api.definition.paths).map(
            ([path, pathItem]) => {
                const methodTypings: string[] = []
                for (const m in pathItem) {
                    if (
                        pathItem[m as HttpMethod] &&
                        _.includes(Object.values(HttpMethod), m)
                    ) {
                        const method = m as HttpMethod
                        const operation = _.find(operations, { path, method })
                        if (operation) {
                            methodTypings.push(
                                OASTypeGenerator.generateMethodForOperation(
                                    method,
                                    operation,
                                    exportTypes
                                )
                            )
                        }
                    }
                }
                return [
                    `['${path}']: {`,
                    ...methodTypings.map((m) => indent(m, 4)),
                    "}",
                ].join("\n")
            }
        )
    
        return [
            "export interface OperationMethods {",
            ...operationTypings.map((op) => indent(op, 4)),
            "}",
            "",
            "export interface PathsDictionary {",
            ...pathOperationTypes.map((p) => indent(p, 4)),
            "}",
            "",
            "export type Client = OpenAPIClient<OperationMethods, PathsDictionary>",
        ].join("\n")
    }
    
    
    
}