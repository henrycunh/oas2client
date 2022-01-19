import type {
 OpenAPIClient,
 Parameters,
 Document,
 UnknownParamsObject,
 OperationResponse,
 AxiosRequestConfig,
} from 'openapi-client-axios'
declare namespace Definitions {
 export interface ApiResponse {
 code?: number; // int32
 type?: string;
 message?: string;
 }
 export interface Category {
 id?: number; // int64
 name?: string;
 }
 export interface Order {
 id?: number; // int64
 petId?: number; // int64
 quantity?: number; // int32
 shipDate?: string; // date-time
 /**
 * Order Status
 */
 status?: "placed" | "approved" | "delivered";
 complete?: boolean;
 }
 export interface Pet {
 id?: number; // int64
 category?: Category;
 /**
 * example:
 * doggie
 */
 name: string;
 photoUrls: string[];
 tags?: Tag[];
 /**
 * pet status in the store
 */
 status?: "available" | "pending" | "sold";
 }
 export interface Tag {
 id?: number; // int64
 name?: string;
 }
 export interface User {
 id?: number; // int64
 username?: string;
 firstName?: string;
 lastName?: string;
 email?: string;
 password?: string;
 phone?: string;
 /**
 * User Status
 */
 userStatus?: number; // int32
 }
}
declare namespace Paths {
 namespace AddPet {
 export interface BodyParameters {
 body: Parameters.Body;
 }
 namespace Parameters {
 export type Body = Definitions.Pet;
 }
 }
 namespace CreateUser {
 export interface BodyParameters {
 body: Parameters.Body;
 }
 namespace Parameters {
 export type Body = Definitions.User;
 }
 }
 namespace CreateUsersWithArrayInput {
 export interface BodyParameters {
 body: Parameters.Body;
 }
 namespace Parameters {
 export type Body = Definitions.User[];
 }
 }
 namespace CreateUsersWithListInput {
 export interface BodyParameters {
 body: Parameters.Body;
 }
 namespace Parameters {
 export type Body = Definitions.User[];
 }
 }
 namespace DeleteOrder {
 namespace Parameters {
 /**
 * ID of the order that needs to be deleted
 */
 export type OrderId = number; // int64
 }
 export interface PathParameters {
 orderId: /* ID of the order that needs to be deleted */ Parameters.OrderId /* int64 */;
 }
 }
 namespace DeletePet {
 export interface HeaderParameters {
 api_key?: Parameters.ApiKey;
 }
 namespace Parameters {
 export type ApiKey = string;
 /**
 * Pet id to delete
 */
 export type PetId = number; // int64
 }
 export interface PathParameters {
 petId: /* Pet id to delete */ Parameters.PetId /* int64 */;
 }
 }
 namespace DeleteUser {
 namespace Parameters {
 /**
 * The name that needs to be deleted
 */
 export type Username = string;
 }
 export interface PathParameters {
 username: /* The name that needs to be deleted */ Parameters.Username;
 }
 }
 namespace FindPetsByStatus {
 namespace Parameters {
 /**
 * Status values that need to be considered for filter
 */
 export type Status = ("available" | "pending" | "sold")[];
 }
 export interface QueryParameters {
 status: /* Status values that need to be considered for filter */ Parameters.Status;
 }
 namespace Responses {
 export type $200 = Definitions.Pet[];
 }
 }
 namespace FindPetsByTags {
 namespace Parameters {
 /**
 * Tags to filter by
 */
 export type Tags = string[];
 }
 export interface QueryParameters {
 tags: /* Tags to filter by */ Parameters.Tags;
 }
 namespace Responses {
 export type $200 = Definitions.Pet[];
 }
 }
 namespace GetInventory {
 namespace Responses {
 export interface $200 {
 [name: string]: number; // int32
 }
 }
 }
 namespace GetOrderById {
 namespace Parameters {
 /**
 * ID of pet that needs to be fetched
 */
 export type OrderId = number; // int64
 }
 export interface PathParameters {
 orderId: /* ID of pet that needs to be fetched */ Parameters.OrderId /* int64 */;
 }
 namespace Responses {
 export type $200 = Definitions.Order;
 }
 }
 namespace GetPetById {
 namespace Parameters {
 /**
 * ID of pet to return
 */
 export type PetId = number; // int64
 }
 export interface PathParameters {
 petId: /* ID of pet to return */ Parameters.PetId /* int64 */;
 }
 namespace Responses {
 export type $200 = Definitions.Pet;
 }
 }
 namespace GetUserByName {
 namespace Parameters {
 /**
 * The name that needs to be fetched. Use user1 for testing.
 */
 export type Username = string;
 }
 export interface PathParameters {
 username: /* The name that needs to be fetched. Use user1 for testing. */ Parameters.Username;
 }
 namespace Responses {
 export type $200 = Definitions.User;
 }
 }
 namespace LoginUser {
 namespace Parameters {
 /**
 * The password for login in clear text
 */
 export type Password = string;
 /**
 * The user name for login
 */
 export type Username = string;
 }
 export interface QueryParameters {
 username: /* The user name for login */ Parameters.Username;
 password: /* The password for login in clear text */ Parameters.Password;
 }
 namespace Responses {
 export type $200 = string;
 }
 }
 namespace PlaceOrder {
 export interface BodyParameters {
 body: Parameters.Body;
 }
 namespace Parameters {
 export type Body = Definitions.Order;
 }
 namespace Responses {
 export type $200 = Definitions.Order;
 }
 }
 namespace UpdatePet {
 export interface BodyParameters {
 body: Parameters.Body;
 }
 namespace Parameters {
 export type Body = Definitions.Pet;
 }
 }
 namespace UpdatePetWithForm {
 export interface FormDataParameters {
 name?: /* Updated name of the pet */ Parameters.Name;
 status?: /* Updated status of the pet */ Parameters.Status;
 }
 namespace Parameters {
 /**
 * Updated name of the pet
 */
 export type Name = string;
 /**
 * ID of pet that needs to be updated
 */
 export type PetId = number; // int64
 /**
 * Updated status of the pet
 */
 export type Status = string;
 }
 export interface PathParameters {
 petId: /* ID of pet that needs to be updated */ Parameters.PetId /* int64 */;
 }
 }
 namespace UpdateUser {
 export interface BodyParameters {
 body: Parameters.Body;
 }
 namespace Parameters {
 export type Body = Definitions.User;
 /**
 * name that need to be updated
 */
 export type Username = string;
 }
 export interface PathParameters {
 username: /* name that need to be updated */ Parameters.Username;
 }
 }
 namespace UploadFile {
 export interface FormDataParameters {
 additionalMetadata?: /* Additional data to pass to server */ Parameters.AdditionalMetadata;
 file?: /* file to upload */ Parameters.File;
 }
 namespace Parameters {
 /**
 * Additional data to pass to server
 */
 export type AdditionalMetadata = string;
 /**
 * file to upload
 */
 export type File = unknown;
 /**
 * ID of pet to update
 */
 export type PetId = number; // int64
 }
 export interface PathParameters {
 petId: /* ID of pet to update */ Parameters.PetId /* int64 */;
 }
 namespace Responses {
 export type $200 = Definitions.ApiResponse;
 }
 }
}

export interface OperationMethods {
 /**
 * UPLOADFILE - uploads an image
 */
 'UPLOADFILE'(
 parameters?: Parameters<Paths.UploadFile.PathParameters> | null,
 data?: any,
 config?: AxiosRequestConfig 
 ): OperationResponse<Paths.UploadFile.Responses.$200>
 /**
 * UPDATEPET - Update an existing pet
 */
 'UPDATEPET'(
 parameters?: Parameters<UnknownParamsObject> | null,
 data?: any,
 config?: AxiosRequestConfig 
 ): OperationResponse<any>
 /**
 * ADDPET - Add a new pet to the store
 */
 'ADDPET'(
 parameters?: Parameters<UnknownParamsObject> | null,
 data?: any,
 config?: AxiosRequestConfig 
 ): OperationResponse<any>
 /**
 * FINDPETSBYSTATUS - Finds Pets by status
 * 
 * Multiple status values can be provided with comma separated strings
 */
 'FINDPETSBYSTATUS'(
 parameters?: Parameters<Paths.FindPetsByStatus.QueryParameters> | null,
 data?: any,
 config?: AxiosRequestConfig 
 ): OperationResponse<Paths.FindPetsByStatus.Responses.$200>
 /**
 * FINDPETSBYTAGS - Finds Pets by tags
 * 
 * Multiple tags can be provided with comma separated strings. Use tag1, tag2, tag3 for testing.
 */
 'FINDPETSBYTAGS'(
 parameters?: Parameters<Paths.FindPetsByTags.QueryParameters> | null,
 data?: any,
 config?: AxiosRequestConfig 
 ): OperationResponse<Paths.FindPetsByTags.Responses.$200>
 /**
 * GETPETBYID - Find pet by ID
 * 
 * Returns a single pet
 */
 'GETPETBYID'(
 parameters?: Parameters<Paths.GetPetById.PathParameters> | null,
 data?: any,
 config?: AxiosRequestConfig 
 ): OperationResponse<Paths.GetPetById.Responses.$200>
 /**
 * UPDATEPETWITHFORM - Updates a pet in the store with form data
 */
 'UPDATEPETWITHFORM'(
 parameters?: Parameters<Paths.UpdatePetWithForm.PathParameters> | null,
 data?: any,
 config?: AxiosRequestConfig 
 ): OperationResponse<any>
 /**
 * DELETEPET - Deletes a pet
 */
 'DELETEPET'(
 parameters?: Parameters<Paths.DeletePet.PathParameters & Paths.DeletePet.HeaderParameters> | null,
 data?: any,
 config?: AxiosRequestConfig 
 ): OperationResponse<any>
 /**
 * PLACEORDER - Place an order for a pet
 */
 'PLACEORDER'(
 parameters?: Parameters<UnknownParamsObject> | null,
 data?: any,
 config?: AxiosRequestConfig 
 ): OperationResponse<Paths.PlaceOrder.Responses.$200>
 /**
 * GETORDERBYID - Find purchase order by ID
 * 
 * For valid response try integer IDs with value >= 1 and <= 10. Other values will generated exceptions
 */
 'GETORDERBYID'(
 parameters?: Parameters<Paths.GetOrderById.PathParameters> | null,
 data?: any,
 config?: AxiosRequestConfig 
 ): OperationResponse<Paths.GetOrderById.Responses.$200>
 /**
 * DELETEORDER - Delete purchase order by ID
 * 
 * For valid response try integer IDs with positive integer value. Negative or non-integer values will generate API errors
 */
 'DELETEORDER'(
 parameters?: Parameters<Paths.DeleteOrder.PathParameters> | null,
 data?: any,
 config?: AxiosRequestConfig 
 ): OperationResponse<any>
 /**
 * GETINVENTORY - Returns pet inventories by status
 * 
 * Returns a map of status codes to quantities
 */
 'GETINVENTORY'(
 parameters?: Parameters<UnknownParamsObject> | null,
 data?: any,
 config?: AxiosRequestConfig 
 ): OperationResponse<Paths.GetInventory.Responses.$200>
 /**
 * CREATEUSERSWITHARRAYINPUT - Creates list of users with given input array
 */
 'CREATEUSERSWITHARRAYINPUT'(
 parameters?: Parameters<UnknownParamsObject> | null,
 data?: any,
 config?: AxiosRequestConfig 
 ): OperationResponse<any>
 /**
 * CREATEUSERSWITHLISTINPUT - Creates list of users with given input array
 */
 'CREATEUSERSWITHLISTINPUT'(
 parameters?: Parameters<UnknownParamsObject> | null,
 data?: any,
 config?: AxiosRequestConfig 
 ): OperationResponse<any>
 /**
 * GETUSERBYNAME - Get user by user name
 */
 'GETUSERBYNAME'(
 parameters?: Parameters<Paths.GetUserByName.PathParameters> | null,
 data?: any,
 config?: AxiosRequestConfig 
 ): OperationResponse<Paths.GetUserByName.Responses.$200>
 /**
 * UPDATEUSER - Updated user
 * 
 * This can only be done by the logged in user.
 */
 'UPDATEUSER'(
 parameters?: Parameters<Paths.UpdateUser.PathParameters> | null,
 data?: any,
 config?: AxiosRequestConfig 
 ): OperationResponse<any>
 /**
 * DELETEUSER - Delete user
 * 
 * This can only be done by the logged in user.
 */
 'DELETEUSER'(
 parameters?: Parameters<Paths.DeleteUser.PathParameters> | null,
 data?: any,
 config?: AxiosRequestConfig 
 ): OperationResponse<any>
 /**
 * LOGINUSER - Logs user into the system
 */
 'LOGINUSER'(
 parameters?: Parameters<Paths.LoginUser.QueryParameters> | null,
 data?: any,
 config?: AxiosRequestConfig 
 ): OperationResponse<Paths.LoginUser.Responses.$200>
 /**
 * LOGOUTUSER - Logs out current logged in user session
 */
 'LOGOUTUSER'(
 parameters?: Parameters<UnknownParamsObject> | null,
 data?: any,
 config?: AxiosRequestConfig 
 ): OperationResponse<any>
 /**
 * CREATEUSER - Create user
 * 
 * This can only be done by the logged in user.
 */
 'CREATEUSER'(
 parameters?: Parameters<UnknownParamsObject> | null,
 data?: any,
 config?: AxiosRequestConfig 
 ): OperationResponse<any>
}

export interface PathsDictionary {
 ['/pet/{petId}/uploadImage']: {
 /**
 * post - uploads an image
 */
 'post'(
 parameters?: Parameters<Paths.UploadFile.PathParameters> | null,
 data?: any,
 config?: AxiosRequestConfig 
 ): OperationResponse<Paths.UploadFile.Responses.$200>
 }
 ['/pet']: {
 /**
 * post - Add a new pet to the store
 */
 'post'(
 parameters?: Parameters<UnknownParamsObject> | null,
 data?: any,
 config?: AxiosRequestConfig 
 ): OperationResponse<any>
 /**
 * put - Update an existing pet
 */
 'put'(
 parameters?: Parameters<UnknownParamsObject> | null,
 data?: any,
 config?: AxiosRequestConfig 
 ): OperationResponse<any>
 }
 ['/pet/findByStatus']: {
 /**
 * get - Finds Pets by status
 * 
 * Multiple status values can be provided with comma separated strings
 */
 'get'(
 parameters?: Parameters<Paths.FindPetsByStatus.QueryParameters> | null,
 data?: any,
 config?: AxiosRequestConfig 
 ): OperationResponse<Paths.FindPetsByStatus.Responses.$200>
 }
 ['/pet/findByTags']: {
 /**
 * get - Finds Pets by tags
 * 
 * Multiple tags can be provided with comma separated strings. Use tag1, tag2, tag3 for testing.
 */
 'get'(
 parameters?: Parameters<Paths.FindPetsByTags.QueryParameters> | null,
 data?: any,
 config?: AxiosRequestConfig 
 ): OperationResponse<Paths.FindPetsByTags.Responses.$200>
 }
 ['/pet/{petId}']: {
 /**
 * get - Find pet by ID
 * 
 * Returns a single pet
 */
 'get'(
 parameters?: Parameters<Paths.GetPetById.PathParameters> | null,
 data?: any,
 config?: AxiosRequestConfig 
 ): OperationResponse<Paths.GetPetById.Responses.$200>
 /**
 * post - Updates a pet in the store with form data
 */
 'post'(
 parameters?: Parameters<Paths.UpdatePetWithForm.PathParameters> | null,
 data?: any,
 config?: AxiosRequestConfig 
 ): OperationResponse<any>
 /**
 * delete - Deletes a pet
 */
 'delete'(
 parameters?: Parameters<Paths.DeletePet.PathParameters & Paths.DeletePet.HeaderParameters> | null,
 data?: any,
 config?: AxiosRequestConfig 
 ): OperationResponse<any>
 }
 ['/store/order']: {
 /**
 * post - Place an order for a pet
 */
 'post'(
 parameters?: Parameters<UnknownParamsObject> | null,
 data?: any,
 config?: AxiosRequestConfig 
 ): OperationResponse<Paths.PlaceOrder.Responses.$200>
 }
 ['/store/order/{orderId}']: {
 /**
 * get - Find purchase order by ID
 * 
 * For valid response try integer IDs with value >= 1 and <= 10. Other values will generated exceptions
 */
 'get'(
 parameters?: Parameters<Paths.GetOrderById.PathParameters> | null,
 data?: any,
 config?: AxiosRequestConfig 
 ): OperationResponse<Paths.GetOrderById.Responses.$200>
 /**
 * delete - Delete purchase order by ID
 * 
 * For valid response try integer IDs with positive integer value. Negative or non-integer values will generate API errors
 */
 'delete'(
 parameters?: Parameters<Paths.DeleteOrder.PathParameters> | null,
 data?: any,
 config?: AxiosRequestConfig 
 ): OperationResponse<any>
 }
 ['/store/inventory']: {
 /**
 * get - Returns pet inventories by status
 * 
 * Returns a map of status codes to quantities
 */
 'get'(
 parameters?: Parameters<UnknownParamsObject> | null,
 data?: any,
 config?: AxiosRequestConfig 
 ): OperationResponse<Paths.GetInventory.Responses.$200>
 }
 ['/user/createWithArray']: {
 /**
 * post - Creates list of users with given input array
 */
 'post'(
 parameters?: Parameters<UnknownParamsObject> | null,
 data?: any,
 config?: AxiosRequestConfig 
 ): OperationResponse<any>
 }
 ['/user/createWithList']: {
 /**
 * post - Creates list of users with given input array
 */
 'post'(
 parameters?: Parameters<UnknownParamsObject> | null,
 data?: any,
 config?: AxiosRequestConfig 
 ): OperationResponse<any>
 }
 ['/user/{username}']: {
 /**
 * get - Get user by user name
 */
 'get'(
 parameters?: Parameters<Paths.GetUserByName.PathParameters> | null,
 data?: any,
 config?: AxiosRequestConfig 
 ): OperationResponse<Paths.GetUserByName.Responses.$200>
 /**
 * put - Updated user
 * 
 * This can only be done by the logged in user.
 */
 'put'(
 parameters?: Parameters<Paths.UpdateUser.PathParameters> | null,
 data?: any,
 config?: AxiosRequestConfig 
 ): OperationResponse<any>
 /**
 * delete - Delete user
 * 
 * This can only be done by the logged in user.
 */
 'delete'(
 parameters?: Parameters<Paths.DeleteUser.PathParameters> | null,
 data?: any,
 config?: AxiosRequestConfig 
 ): OperationResponse<any>
 }
 ['/user/login']: {
 /**
 * get - Logs user into the system
 */
 'get'(
 parameters?: Parameters<Paths.LoginUser.QueryParameters> | null,
 data?: any,
 config?: AxiosRequestConfig 
 ): OperationResponse<Paths.LoginUser.Responses.$200>
 }
 ['/user/logout']: {
 /**
 * get - Logs out current logged in user session
 */
 'get'(
 parameters?: Parameters<UnknownParamsObject> | null,
 data?: any,
 config?: AxiosRequestConfig 
 ): OperationResponse<any>
 }
 ['/user']: {
 /**
 * post - Create user
 * 
 * This can only be done by the logged in user.
 */
 'post'(
 parameters?: Parameters<UnknownParamsObject> | null,
 data?: any,
 config?: AxiosRequestConfig 
 ): OperationResponse<any>
 }
}

export type Client = OpenAPIClient<OperationMethods, PathsDictionary>
import OAClient from 'openapi-client-axios'

export default async function client (config?: AxiosRequestConfig) {
 const api = new OAClient({ definition: 'https://petstore.swagger.io/v2/swagger.json', axiosConfigDefaults: config, transformOperationName: (operation) => {
 return operation.toUpperCase();
 } })
 return await api.init<Client>()
}