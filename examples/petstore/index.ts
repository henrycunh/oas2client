import PetAPI from './services/petstore'

async function myApp() {
    const client = await PetAPI()
    await client.addPet(null, { name: 'Fluffy', photoUrls: ['http://foo.bar/baz'] })
}