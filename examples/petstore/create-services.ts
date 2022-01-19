import { createClientFromOpenAPI } from '../../src/index'

(async function createServices() {
    await createClientFromOpenAPI(
        {
            petstore: 'https://petstore.swagger.io/v2/swagger.json',
        },
        'services',
        {
            transformOperationName: (operation) => { return operation.toUpperCase() },
        },
    )
})()
