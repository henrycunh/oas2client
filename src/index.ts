import { Document } from "openapi-client-axios"
import path from "path"
import fs from 'fs'
import OASParser from "./parser"
import OASTypeGenerator from "./typegen"
import yaml from 'yaml'


const OAS = {
    async createClient(definition: string | Array<string> | {[serviceName: string]: string}, serviceDirectoryPath: string) {
        // this is ugly, i'm sorry
        const definitionList = 
            Array.isArray(definition) ? 
                definition : 
                typeof definition === 'string' ?
                    [definition] :
                    Object.values(definition)
        const fullServiceDirectoryPath = path.join(process.cwd(), serviceDirectoryPath)
        const serviceTemplateContent = fs.readFileSync(path.join(__dirname, "./template/client.template"), "utf8")

        if (!fs.existsSync(fullServiceDirectoryPath)) {
            fs.mkdirSync(fullServiceDirectoryPath)
        }

        for (const currentDefinition of definitionList) {
            const serviceNameFromMap = typeof definition === 'object' && !Array.isArray(definition) ? 
                Object.keys(definition).find(key => definition[key] === currentDefinition) : 
                null
            const serviceName = serviceNameFromMap || path.basename(currentDefinition, path.extname(currentDefinition)) 
            const isDefinitionUrl = /^https?:\/\//.test(currentDefinition)
            const definitionWithFlattenedReferences = !isDefinitionUrl ? (await OASParser.flattenReferences(currentDefinition)) as Document : currentDefinition
            const definitionTypes = (await OASTypeGenerator.generate(
                isDefinitionUrl ? 
                    currentDefinition : 
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

            const definitionContentReplacement = 
                isDefinitionUrl ?
                    `'${currentDefinition}'` : 
                    `\n\tJSON.parse(\n\t\t\`${JSON.stringify(
                        definitionWithFlattenedReferences
                    )}\n\t\t\`) as Document`

            // Consolidate the definition and the types into a single file
            const serviceDefinitionContent = serviceTemplateContent
                .replace(
                    /\{definition\}/g, 
                    definitionContentReplacement
                )
                
            const serviceContentWithTypes = [
                definitionTypes,
                serviceDefinitionContent
            ]
            .join('\n')
            .replace(
                / +/g, ' '
            )

            // Write the service definition
            fs.writeFileSync(path.join(serviceDirectory, 'index.ts'), serviceContentWithTypes)
        }
    }
}

export default OAS