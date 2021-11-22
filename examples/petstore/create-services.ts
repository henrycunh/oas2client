import OAS2Client from '../../src/index'

(async function createServices(){
    await OAS2Client.createClient(
        {
            petstore: 'https://petstore.swagger.io/v2/swagger.json'
        },
        'services'
    )
})()
