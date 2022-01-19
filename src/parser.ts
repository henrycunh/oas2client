import path from 'path'
import fs from 'fs'
import $RefParser from '@apidevtools/json-schema-ref-parser'
import yaml from 'yaml'

export const flattenReferences = async(specificationSource: string, specificationDestination?: string): Promise<void | $RefParser.JSONSchema> => {
    const sourceFullPath = path.join(process.cwd(), specificationSource)
    const specificationContentRaw = fs.readFileSync(sourceFullPath, 'utf8')
    const specificationContent = yaml.parse(specificationContentRaw)

    // We need to map the references to the current path of the file
    const mappedReferenceSpecificationContent = JSON.stringify(specificationContent)
        .replace(
            /"\$ref":\s*"([^#]+)#/g,
            (_match, ref) => `"$ref":"${path.join(path.dirname(sourceFullPath), ref)}#`,
        )
    const flattenedSpecificationContent = await $RefParser.dereference(JSON.parse(mappedReferenceSpecificationContent))

    // If the destination is not specified, we return the flattened specification
    if (specificationDestination) {
        const destinationFullPath = path.join(__dirname, specificationDestination)
        fs.writeFileSync(destinationFullPath, yaml.stringify(flattenedSpecificationContent, {
            indent: 4,
        }))
    }

    return flattenedSpecificationContent
}
