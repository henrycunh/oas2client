<div align="center">

# OAS2Client
> Convert OpenAPI Specification to a typed client implementing Axios 

</div>

## Usage
1. Add the package to your project
```bash
yarn add oas2client
```
2. Choose a directory for persisting the services, and point the OAS file (either remote or local)
```typescript
// create-services.ts
import OAS2Client from 'oas2client'

await OAS2Client.createClient(
    'api/my-api.yml',   // Path to OAS file
    'services'          // Path to services directory
)
```
The name of the file will be used as the name of the service, in this case, `my-api`.

3. You can then execute this script to create the services in the specified directory
```bash
# If you don't have ts-node installed, you can install by running:
# yarn add -D ts-node
ts-node create-services.ts
```
4. With the services created, you can just import then in your code
```typescript
// index.ts
import MyAPI from './services/my-api'

const client = await MyAPI({ /* axios configuration */})
```

## Examples
- [Petstore API](./examples/petstore)