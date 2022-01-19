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
import { createClientFromOpenAPI } from 'oas2client'

await createClientFromOpenAPI(
    'api/my-api.yml',   // Path to OAS file
    'services',         // Path to services directory
    {
        // Optional function to transform operations' name
        transformOperationName: operationName => toCamelCase(operationName) 
    }
)
```
The name of the file will be used as the name of the service, in this case, `my-api`.

1. You can then execute this script to create the services in the specified directory
```bash
npx esno create-services.ts
```
4. With the services created, you can just import then in your code
```typescript
// index.ts
import MyAPI from './services/my-api'

const client = await MyAPI({ /* axios configuration */})
```

## Options

### `transformOperationName`

A function to transform the operation name.

**Example**
```typescript
// if the operation name was '__list_users' providing the following options
const options = {
    transformOperationName: operation => operation
        .match(/^__(.*)$/)[1]
        .replace(/_[a-z]/g, match => match[1].toUpperCase())
}
// the resulting function name will be listUsers()
```

## Examples
- [Petstore API](./examples/petstore)