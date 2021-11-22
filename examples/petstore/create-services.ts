import OAS2Client from '../../src/index'

(async function createServices(){
    await OAS2Client.createClient(
        {
            petstore: './definitions/test.yml'
        },
        'services'
    )
})()
