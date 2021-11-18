import { Document } from "openapi-client-axios"
import path from "path"
import fs from 'fs'
import OASParser from "./parser"
import OASTypeGenerator from "./typegen"
import yaml from 'yaml'


const OAS = {

    async createClient(definition: string | Array<string>, serviceDirectoryPath: string) {
        const definitionList = Array.isArray(definition) ? definition : [definition]
        const fullServiceDirectoryPath = path.join(process.cwd(), serviceDirectoryPath)
        const serviceTemplateContent = fs.readFileSync(path.join(__dirname, "./template/client.template"), "utf8")

        if (!fs.existsSync(fullServiceDirectoryPath)) {
            fs.mkdirSync(fullServiceDirectoryPath)
        }

        for (const definition of definitionList) {
            const serviceName = path.basename(definition, path.extname(definition))
            const isDefinitionUrl = /^https?:\/\//.test(definition)
            const definitionWithFlattenedReferences = !isDefinitionUrl ? (await OASParser.flattenReferences(definition)) as Document : definition
            const definitionTypes = (await OASTypeGenerator.generate(
                isDefinitionUrl ? 
                    definition : 
                    definitionWithFlattenedReferences,
                { transformOperationName: (operation: string) => operation }
            )).join('\n')

            // Create a directory for the service
            const serviceDirectory = path.join(fullServiceDirectoryPath, serviceName)
            if (!fs.existsSync(serviceDirectory)) {
                fs.mkdirSync(serviceDirectory)
            }
            const definitionWithFlattenedReferencesPath = path.join(serviceDirectory, `${serviceName}-definition.yml`)

            // If the definition is not a url we must write to the service directory
            if (!isDefinitionUrl) {
                fs.writeFileSync(definitionWithFlattenedReferencesPath, yaml.stringify(definitionWithFlattenedReferences))
            }

            // Consolidate the definition and the types into a single file
            const serviceDefinitionContent = serviceTemplateContent.replace(
                /\{definition\}/g, 
                isDefinitionUrl ?
                    definition :
                    definitionWithFlattenedReferencesPath
            )
            const serviceContentWithTypes = [
                definitionTypes,
                serviceDefinitionContent
            ].join('\n')

            // Write the service definition
            fs.writeFileSync(path.join(serviceDirectory, 'index.ts'), serviceContentWithTypes)
        }
    }

}

export default OAS