import type {
 OpenAPIClient,
 Parameters,
 Document,
 UnknownParamsObject,
 OperationResponse,
 AxiosRequestConfig,
} from 'openapi-client-axios'
declare namespace Components {
 namespace Schemas {
 /**
 * Instance Disk Mapping
 */
 export interface DiskMapping {
 /**
 * ID
 * example:
 * 61FE67B3-B4F6-4FB5-AD09-3A89700FBF0D
 */
 id?: string; // uuid
 /**
 * device name
 * example:
 * sda
 */
 device_name?: string;
 /**
 * Terminatie volume when the instance is deleted
 * example:
 * false
 */
 delete_on_termination?: boolean;
 volume?: {
 /**
 * Volume ID
 * example:
 * 61FE67B3-B4F6-4FB5-AD09-3A89700FBF0D
 */
 id?: string; // uuid
 /**
 * volume name
 * example:
 * redis-a
 */
 name?: string;
 /**
 * Volume size un gibabytes
 * example:
 * 20
 */
 size_gb?: number; // int32
 /**
 * volume type
 * example:
 * ssd
 */
 type?: string;
 /**
 * Availability zones
 * example:
 * sa-east-1-a
 */
 zone?: string;
 /**
 * Volumes tags
 * example:
 * [
 * {
 * "type": "CostCenter",
 * "value": "1"
 * },
 * {
 * "type": "ClusterName",
 * "value": "redis-a"
 * }
 * ]
 */
 tags?: {
 key?: string;
 value?: string;
 }[];
 /**
 * Volume status
 * example:
 * IN_USE
 */
 status?: string;
 /**
 * example:
 * 2020-12-22T16:08:51.000Z
 */
 created_at?: string; // date-time
 /**
 * example:
 * 2020-12-22T16:08:51.000Z
 */
 updated_at?: string; // date-time
 } | {
 /**
 * Volume ID
 * example:
 * 61FE67B3-B4F6-4FB5-AD09-3A89700FBF0D
 */
 id?: string; // uuid
 };
 }
 /**
 * Represents an Instance resource.
 */
 export interface Instance {
 /**
 * ID
 * example:
 * 61FE67B3-B4F6-4FB5-AD09-3A89700FBF0D
 */
 id?: string; // uuid
 /**
 * instance name
 * example:
 * apiserver-a
 */
 name?: string;
 /**
 * instance description
 */
 description?: string;
 /**
 * instance type
 * example:
 * mg1-large
 */
 type?: string;
 /**
 * Availability zones
 * example:
 * sa-east-1-a
 */
 zone?: string;
 /**
 * tags
 * example:
 * [
 * {
 * "type": "CostCenter",
 * "value": "1"
 * },
 * {
 * "type": "ClusterName",
 * "value": "apiserver-a"
 * }
 * ]
 */
 tags?: {
 key?: string;
 value?: string;
 }[];
 /**
 * Instance status
 * example:
 * OK
 */
 status?: string;
 /**
 * example:
 * 2020-12-22T16:08:51.000Z
 */
 created_at?: string; // date-time
 /**
 * example:
 * 2020-12-22T16:08:51.000Z
 */
 updated_at?: string; // date-time
 /**
 * Specifies the hostname of the instance. The specified hostname must be RFC1035 compliant.
 * example:
 * apiserver-01
 */
 hostname?: string;
 /**
 * Key pair name.
 * example:
 * ssh-key-01
 */
 key_name?: string;
 image?: {
 /**
 * ID
 * example:
 * 61FE67B3-B4F6-4FB5-AD09-3A89700FBF0D
 */
 id?: string; // uuid
 /**
 * example:
 * image-test
 */
 name?: string;
 };
 disk_mappings?: {
 /**
 * ID
 * example:
 * 61FE67B3-B4F6-4FB5-AD09-3A89700FBF0D
 */
 id?: string; // uuid
 /**
 * device name
 * example:
 * sda
 */
 device_name?: string;
 /**
 * Terminatie volume when the instance is deleted
 * example:
 * false
 */
 delete_on_termination?: boolean;
 volume?: {
 /**
 * Volume ID
 * example:
 * 61FE67B3-B4F6-4FB5-AD09-3A89700FBF0D
 */
 id?: string; // uuid
 /**
 * volume name
 * example:
 * redis-a
 */
 name?: string;
 /**
 * Volume size un gibabytes
 * example:
 * 20
 */
 size_gb?: number; // int32
 /**
 * volume type
 * example:
 * ssd
 */
 type?: string;
 /**
 * Availability zones
 * example:
 * sa-east-1-a
 */
 zone?: string;
 /**
 * Volumes tags
 * example:
 * [
 * {
 * "type": "CostCenter",
 * "value": "1"
 * },
 * {
 * "type": "ClusterName",
 * "value": "redis-a"
 * }
 * ]
 */
 tags?: {
 key?: string;
 value?: string;
 }[];
 /**
 * Volume status
 * example:
 * IN_USE
 */
 status?: string;
 /**
 * example:
 * 2020-12-22T16:08:51.000Z
 */
 created_at?: string; // date-time
 /**
 * example:
 * 2020-12-22T16:08:51.000Z
 */
 updated_at?: string; // date-time
 } | {
 /**
 * Volume ID
 * example:
 * 61FE67B3-B4F6-4FB5-AD09-3A89700FBF0D
 */
 id?: string; // uuid
 };
 }[];
 network_interfaces?: {
 /**
 * ID
 * example:
 * 61FE67B3-B4F6-4FB5-AD09-3A89700FBF0D
 */
 id?: string; // uuid
 mac_address?: string;
 /**
 * example:
 * 10.0.0.1
 */
 ip_address?: string;
 public_ip_address?: {
 /**
 * ID
 * example:
 * 61FE67B3-B4F6-4FB5-AD09-3A89700FBF0D
 */
 id?: string; // uuid
 /**
 * Public IP Adress Type
 * example:
 * standard
 */
 type?: string;
 /**
 * example:
 * 179.190.33.254
 */
 ip_address?: string; // ip
 };
 network?: {
 /**
 * ID
 * example:
 * 61FE67B3-B4F6-4FB5-AD09-3A89700FBF0D
 */
 id?: string; // uuid
 /**
 * network name
 * example:
 * my network
 */
 name?: string;
 };
 sub_network?: {
 /**
 * ID
 * example:
 * 61FE67B3-B4F6-4FB5-AD09-3A89700FBF0D
 */
 id?: string; // uuid
 /**
 * sub network name
 * example:
 * private
 */
 name?: string;
 };
 }[];
 metadata?: {
 key?: string;
 value?: string;
 }[];
 /**
 * One or more security groups. Specify the name of the security groug.
 * example:
 * [
 * {
 * "id": "ssh-only",
 * "name": "ssh"
 * }
 * ]
 */
 security_groups?: {
 id?: string;
 name?: string;
 }[];
 }
 /**
 * Network Interface mapping
 */
 export interface NetworkInterface {
 /**
 * ID
 * example:
 * 61FE67B3-B4F6-4FB5-AD09-3A89700FBF0D
 */
 id?: string; // uuid
 mac_address?: string;
 /**
 * example:
 * 10.0.0.1
 */
 ip_address?: string;
 public_ip_address?: {
 /**
 * ID
 * example:
 * 61FE67B3-B4F6-4FB5-AD09-3A89700FBF0D
 */
 id?: string; // uuid
 /**
 * Public IP Adress Type
 * example:
 * standard
 */
 type?: string;
 /**
 * example:
 * 179.190.33.254
 */
 ip_address?: string; // ip
 };
 network?: {
 /**
 * ID
 * example:
 * 61FE67B3-B4F6-4FB5-AD09-3A89700FBF0D
 */
 id?: string; // uuid
 /**
 * network name
 * example:
 * my network
 */
 name?: string;
 };
 sub_network?: {
 /**
 * ID
 * example:
 * 61FE67B3-B4F6-4FB5-AD09-3A89700FBF0D
 */
 id?: string; // uuid
 /**
 * sub network name
 * example:
 * private
 */
 name?: string;
 };
 }
 /**
 * Persistent Volume
 */
 export interface Volume {
 /**
 * Volume ID
 * example:
 * 61FE67B3-B4F6-4FB5-AD09-3A89700FBF0D
 */
 id?: string; // uuid
 /**
 * volume name
 * example:
 * redis-a
 */
 name?: string;
 /**
 * Volume size un gibabytes
 * example:
 * 20
 */
 size_gb?: number; // int32
 /**
 * volume type
 * example:
 * ssd
 */
 type?: string;
 /**
 * Availability zones
 * example:
 * sa-east-1-a
 */
 zone?: string;
 /**
 * Volumes tags
 * example:
 * [
 * {
 * "type": "CostCenter",
 * "value": "1"
 * },
 * {
 * "type": "ClusterName",
 * "value": "redis-a"
 * }
 * ]
 */
 tags?: {
 key?: string;
 value?: string;
 }[];
 /**
 * Volume status
 * example:
 * IN_USE
 */
 status?: string;
 /**
 * example:
 * 2020-12-22T16:08:51.000Z
 */
 created_at?: string; // date-time
 /**
 * example:
 * 2020-12-22T16:08:51.000Z
 */
 updated_at?: string; // date-time
 }
 }
}
declare namespace Paths {
 namespace ComputeV1alphaProjects$ProjectRegions$RegionInstances {
 namespace Parameters {
 /**
 * project id
 * example:
 * meu-projeto-1
 */
 export type Project = string;
 /**
 * region
 * example:
 * sa-east-1
 */
 export type Region = string;
 }
 export interface PathParameters {
 project: /**
 * project id
 * example:
 * meu-projeto-1
 */
 Parameters.Project;
 region: /**
 * region
 * example:
 * sa-east-1
 */
 Parameters.Region;
 }
 }
 namespace ComputeV1alphaProjects$ProjectRegions$RegionInstances$Id {
 namespace Parameters {
 /**
 * instance id
 * example:
 * 61FE67B3-B4F6-4FB5-AD09-3A89700FBF0D
 */
 export type Id = string;
 /**
 * project id
 * example:
 * meu-projeto-1
 */
 export type Project = string;
 /**
 * region
 * example:
 * sa-east-1
 */
 export type Region = string;
 }
 export interface PathParameters {
 project: /**
 * project id
 * example:
 * meu-projeto-1
 */
 Parameters.Project;
 region: /**
 * region
 * example:
 * sa-east-1
 */
 Parameters.Region;
 id: /**
 * instance id
 * example:
 * 61FE67B3-B4F6-4FB5-AD09-3A89700FBF0D
 */
 Parameters.Id;
 }
 }
 namespace ComputeV1alphaProjects$ProjectRegions$RegionVolumes {
 namespace Parameters {
 /**
 * project id
 * example:
 * meu-projeto-1
 */
 export type Project = string;
 /**
 * region
 * example:
 * sa-east-1
 */
 export type Region = string;
 }
 export interface PathParameters {
 project: /**
 * project id
 * example:
 * meu-projeto-1
 */
 Parameters.Project;
 region: /**
 * region
 * example:
 * sa-east-1
 */
 Parameters.Region;
 }
 }
 namespace ComputeV1alphaProjects$ProjectRegions$RegionVolumes$Id {
 namespace Parameters {
 /**
 * volume id
 * example:
 * 61FE67B3-B4F6-4FB5-AD09-3A89700FBF0D
 */
 export type Id = string;
 /**
 * project id
 * example:
 * meu-projeto-1
 */
 export type Project = string;
 /**
 * region
 * example:
 * sa-east-1
 */
 export type Region = string;
 }
 export interface PathParameters {
 project: /**
 * project id
 * example:
 * meu-projeto-1
 */
 Parameters.Project;
 region: /**
 * region
 * example:
 * sa-east-1
 */
 Parameters.Region;
 id: /**
 * volume id
 * example:
 * 61FE67B3-B4F6-4FB5-AD09-3A89700FBF0D
 */
 Parameters.Id;
 }
 }
 namespace CreateInstances {
 namespace Responses {
 export type $400 = {
 details?: {
 description?: string;
 field?: string;
 issue?: string;
 location?: string;
 value?: string;
 }[];
 errorCode?: string;
 links?: {
 href?: string;
 }[];
 message?: string;
 }[];
 export type $401 = {
 details?: {
 description?: string;
 field?: string;
 issue?: string;
 location?: string;
 value?: string;
 }[];
 errorCode?: string;
 links?: {
 href?: string;
 }[];
 message?: string;
 }[];
 export type $403 = {
 details?: {
 description?: string;
 field?: string;
 issue?: string;
 location?: string;
 value?: string;
 }[];
 errorCode?: string;
 links?: {
 href?: string;
 }[];
 message?: string;
 }[];
 export type $404 = {
 details?: {
 description?: string;
 field?: string;
 issue?: string;
 location?: string;
 value?: string;
 }[];
 errorCode?: string;
 links?: {
 href?: string;
 }[];
 message?: string;
 }[];
 export type $422 = {
 details?: {
 description?: string;
 field?: string;
 issue?: string;
 location?: string;
 value?: string;
 }[];
 errorCode?: string;
 links?: {
 href?: string;
 }[];
 message?: string;
 }[];
 export type $500 = {
 details?: {
 description?: string;
 field?: string;
 issue?: string;
 location?: string;
 value?: string;
 }[];
 errorCode?: string;
 links?: {
 href?: string;
 }[];
 message?: string;
 }[];
 }
 }
 namespace CreateVolumes {
 namespace Responses {
 export type $400 = {
 details?: {
 description?: string;
 field?: string;
 issue?: string;
 location?: string;
 value?: string;
 }[];
 errorCode?: string;
 links?: {
 href?: string;
 }[];
 message?: string;
 }[];
 export type $401 = {
 details?: {
 description?: string;
 field?: string;
 issue?: string;
 location?: string;
 value?: string;
 }[];
 errorCode?: string;
 links?: {
 href?: string;
 }[];
 message?: string;
 }[];
 export type $403 = {
 details?: {
 description?: string;
 field?: string;
 issue?: string;
 location?: string;
 value?: string;
 }[];
 errorCode?: string;
 links?: {
 href?: string;
 }[];
 message?: string;
 }[];
 export type $404 = {
 details?: {
 description?: string;
 field?: string;
 issue?: string;
 location?: string;
 value?: string;
 }[];
 errorCode?: string;
 links?: {
 href?: string;
 }[];
 message?: string;
 }[];
 export type $422 = {
 details?: {
 description?: string;
 field?: string;
 issue?: string;
 location?: string;
 value?: string;
 }[];
 errorCode?: string;
 links?: {
 href?: string;
 }[];
 message?: string;
 }[];
 export type $500 = {
 details?: {
 description?: string;
 field?: string;
 issue?: string;
 location?: string;
 value?: string;
 }[];
 errorCode?: string;
 links?: {
 href?: string;
 }[];
 message?: string;
 }[];
 }
 }
 namespace DeleteInstance {
 namespace Responses {
 export type $400 = {
 details?: {
 description?: string;
 field?: string;
 issue?: string;
 location?: string;
 value?: string;
 }[];
 errorCode?: string;
 links?: {
 href?: string;
 }[];
 message?: string;
 }[];
 export type $401 = {
 details?: {
 description?: string;
 field?: string;
 issue?: string;
 location?: string;
 value?: string;
 }[];
 errorCode?: string;
 links?: {
 href?: string;
 }[];
 message?: string;
 }[];
 export type $403 = {
 details?: {
 description?: string;
 field?: string;
 issue?: string;
 location?: string;
 value?: string;
 }[];
 errorCode?: string;
 links?: {
 href?: string;
 }[];
 message?: string;
 }[];
 export type $404 = {
 details?: {
 description?: string;
 field?: string;
 issue?: string;
 location?: string;
 value?: string;
 }[];
 errorCode?: string;
 links?: {
 href?: string;
 }[];
 message?: string;
 }[];
 export type $422 = {
 details?: {
 description?: string;
 field?: string;
 issue?: string;
 location?: string;
 value?: string;
 }[];
 errorCode?: string;
 links?: {
 href?: string;
 }[];
 message?: string;
 }[];
 export type $500 = {
 details?: {
 description?: string;
 field?: string;
 issue?: string;
 location?: string;
 value?: string;
 }[];
 errorCode?: string;
 links?: {
 href?: string;
 }[];
 message?: string;
 }[];
 }
 }
 namespace DeleteVolume {
 namespace Responses {
 export type $400 = {
 details?: {
 description?: string;
 field?: string;
 issue?: string;
 location?: string;
 value?: string;
 }[];
 errorCode?: string;
 links?: {
 href?: string;
 }[];
 message?: string;
 }[];
 export type $401 = {
 details?: {
 description?: string;
 field?: string;
 issue?: string;
 location?: string;
 value?: string;
 }[];
 errorCode?: string;
 links?: {
 href?: string;
 }[];
 message?: string;
 }[];
 export type $403 = {
 details?: {
 description?: string;
 field?: string;
 issue?: string;
 location?: string;
 value?: string;
 }[];
 errorCode?: string;
 links?: {
 href?: string;
 }[];
 message?: string;
 }[];
 export type $404 = {
 details?: {
 description?: string;
 field?: string;
 issue?: string;
 location?: string;
 value?: string;
 }[];
 errorCode?: string;
 links?: {
 href?: string;
 }[];
 message?: string;
 }[];
 export type $422 = {
 details?: {
 description?: string;
 field?: string;
 issue?: string;
 location?: string;
 value?: string;
 }[];
 errorCode?: string;
 links?: {
 href?: string;
 }[];
 message?: string;
 }[];
 export type $500 = {
 details?: {
 description?: string;
 field?: string;
 issue?: string;
 location?: string;
 value?: string;
 }[];
 errorCode?: string;
 links?: {
 href?: string;
 }[];
 message?: string;
 }[];
 }
 }
 namespace GetInstance {
 namespace Responses {
 export type $400 = {
 details?: {
 description?: string;
 field?: string;
 issue?: string;
 location?: string;
 value?: string;
 }[];
 errorCode?: string;
 links?: {
 href?: string;
 }[];
 message?: string;
 }[];
 export type $401 = {
 details?: {
 description?: string;
 field?: string;
 issue?: string;
 location?: string;
 value?: string;
 }[];
 errorCode?: string;
 links?: {
 href?: string;
 }[];
 message?: string;
 }[];
 export type $403 = {
 details?: {
 description?: string;
 field?: string;
 issue?: string;
 location?: string;
 value?: string;
 }[];
 errorCode?: string;
 links?: {
 href?: string;
 }[];
 message?: string;
 }[];
 export type $404 = {
 details?: {
 description?: string;
 field?: string;
 issue?: string;
 location?: string;
 value?: string;
 }[];
 errorCode?: string;
 links?: {
 href?: string;
 }[];
 message?: string;
 }[];
 export type $422 = {
 details?: {
 description?: string;
 field?: string;
 issue?: string;
 location?: string;
 value?: string;
 }[];
 errorCode?: string;
 links?: {
 href?: string;
 }[];
 message?: string;
 }[];
 export type $500 = {
 details?: {
 description?: string;
 field?: string;
 issue?: string;
 location?: string;
 value?: string;
 }[];
 errorCode?: string;
 links?: {
 href?: string;
 }[];
 message?: string;
 }[];
 }
 }
 namespace GetVolume {
 namespace Responses {
 export type $400 = {
 details?: {
 description?: string;
 field?: string;
 issue?: string;
 location?: string;
 value?: string;
 }[];
 errorCode?: string;
 links?: {
 href?: string;
 }[];
 message?: string;
 }[];
 export type $401 = {
 details?: {
 description?: string;
 field?: string;
 issue?: string;
 location?: string;
 value?: string;
 }[];
 errorCode?: string;
 links?: {
 href?: string;
 }[];
 message?: string;
 }[];
 export type $403 = {
 details?: {
 description?: string;
 field?: string;
 issue?: string;
 location?: string;
 value?: string;
 }[];
 errorCode?: string;
 links?: {
 href?: string;
 }[];
 message?: string;
 }[];
 export type $404 = {
 details?: {
 description?: string;
 field?: string;
 issue?: string;
 location?: string;
 value?: string;
 }[];
 errorCode?: string;
 links?: {
 href?: string;
 }[];
 message?: string;
 }[];
 export type $422 = {
 details?: {
 description?: string;
 field?: string;
 issue?: string;
 location?: string;
 value?: string;
 }[];
 errorCode?: string;
 links?: {
 href?: string;
 }[];
 message?: string;
 }[];
 export type $500 = {
 details?: {
 description?: string;
 field?: string;
 issue?: string;
 location?: string;
 value?: string;
 }[];
 errorCode?: string;
 links?: {
 href?: string;
 }[];
 message?: string;
 }[];
 }
 }
 namespace ListInstances {
 namespace Parameters {
 /**
 * Used for paging. Tells how many records are to be returned.
 * example:
 * 50
 */
 export type Limit = number;
 /**
 * instance name
 * example:
 * redis-a
 */
 export type Name = string;
 /**
 * Used for paging. Tells the position of the first record to be returned. Similar to the paging offset used in traditional databases.
 * example:
 * 0
 */
 export type Offset = number;
 /**
 * Availability zones
 * example:
 * sa-east-1-a
 */
 export type Zone = string;
 }
 export interface QueryParameters {
 name?: /**
 * instance name
 * example:
 * redis-a
 */
 Parameters.Name;
 zone?: /**
 * Availability zones
 * example:
 * sa-east-1-a
 */
 Parameters.Zone;
 _offset?: /**
 * Used for paging. Tells the position of the first record to be returned. Similar to the paging offset used in traditional databases.
 * example:
 * 0
 */
 Parameters.Offset;
 _limit?: /**
 * Used for paging. Tells how many records are to be returned.
 * example:
 * 50
 */
 Parameters.Limit;
 }
 namespace Responses {
 export type $200 = {
 /**
 * ID
 * example:
 * 61FE67B3-B4F6-4FB5-AD09-3A89700FBF0D
 */
 id?: string; // uuid
 /**
 * instance name
 * example:
 * apiserver-a
 */
 name?: string;
 /**
 * instance description
 */
 description?: string;
 /**
 * instance type
 * example:
 * mg1-large
 */
 type?: string;
 /**
 * Availability zones
 * example:
 * sa-east-1-a
 */
 zone?: string;
 /**
 * tags
 * example:
 * [
 * {
 * "type": "CostCenter",
 * "value": "1"
 * },
 * {
 * "type": "ClusterName",
 * "value": "apiserver-a"
 * }
 * ]
 */
 tags?: {
 key?: string;
 value?: string;
 }[];
 /**
 * Instance status
 * example:
 * OK
 */
 status?: string;
 /**
 * example:
 * 2020-12-22T16:08:51.000Z
 */
 created_at?: string; // date-time
 /**
 * example:
 * 2020-12-22T16:08:51.000Z
 */
 updated_at?: string; // date-time
 /**
 * Specifies the hostname of the instance. The specified hostname must be RFC1035 compliant.
 * example:
 * apiserver-01
 */
 hostname?: string;
 /**
 * Key pair name.
 * example:
 * ssh-key-01
 */
 key_name?: string;
 image?: {
 /**
 * ID
 * example:
 * 61FE67B3-B4F6-4FB5-AD09-3A89700FBF0D
 */
 id?: string; // uuid
 /**
 * example:
 * image-test
 */
 name?: string;
 };
 disk_mappings?: {
 /**
 * ID
 * example:
 * 61FE67B3-B4F6-4FB5-AD09-3A89700FBF0D
 */
 id?: string; // uuid
 /**
 * device name
 * example:
 * sda
 */
 device_name?: string;
 /**
 * Terminatie volume when the instance is deleted
 * example:
 * false
 */
 delete_on_termination?: boolean;
 volume?: {
 /**
 * Volume ID
 * example:
 * 61FE67B3-B4F6-4FB5-AD09-3A89700FBF0D
 */
 id?: string; // uuid
 /**
 * volume name
 * example:
 * redis-a
 */
 name?: string;
 /**
 * Volume size un gibabytes
 * example:
 * 20
 */
 size_gb?: number; // int32
 /**
 * volume type
 * example:
 * ssd
 */
 type?: string;
 /**
 * Availability zones
 * example:
 * sa-east-1-a
 */
 zone?: string;
 /**
 * Volumes tags
 * example:
 * [
 * {
 * "type": "CostCenter",
 * "value": "1"
 * },
 * {
 * "type": "ClusterName",
 * "value": "redis-a"
 * }
 * ]
 */
 tags?: {
 key?: string;
 value?: string;
 }[];
 /**
 * Volume status
 * example:
 * IN_USE
 */
 status?: string;
 /**
 * example:
 * 2020-12-22T16:08:51.000Z
 */
 created_at?: string; // date-time
 /**
 * example:
 * 2020-12-22T16:08:51.000Z
 */
 updated_at?: string; // date-time
 } | {
 /**
 * Volume ID
 * example:
 * 61FE67B3-B4F6-4FB5-AD09-3A89700FBF0D
 */
 id?: string; // uuid
 };
 }[];
 network_interfaces?: {
 /**
 * ID
 * example:
 * 61FE67B3-B4F6-4FB5-AD09-3A89700FBF0D
 */
 id?: string; // uuid
 mac_address?: string;
 /**
 * example:
 * 10.0.0.1
 */
 ip_address?: string;
 public_ip_address?: {
 /**
 * ID
 * example:
 * 61FE67B3-B4F6-4FB5-AD09-3A89700FBF0D
 */
 id?: string; // uuid
 /**
 * Public IP Adress Type
 * example:
 * standard
 */
 type?: string;
 /**
 * example:
 * 179.190.33.254
 */
 ip_address?: string; // ip
 };
 network?: {
 /**
 * ID
 * example:
 * 61FE67B3-B4F6-4FB5-AD09-3A89700FBF0D
 */
 id?: string; // uuid
 /**
 * network name
 * example:
 * my network
 */
 name?: string;
 };
 sub_network?: {
 /**
 * ID
 * example:
 * 61FE67B3-B4F6-4FB5-AD09-3A89700FBF0D
 */
 id?: string; // uuid
 /**
 * sub network name
 * example:
 * private
 */
 name?: string;
 };
 }[];
 metadata?: {
 key?: string;
 value?: string;
 }[];
 /**
 * One or more security groups. Specify the name of the security groug.
 * example:
 * [
 * {
 * "id": "ssh-only",
 * "name": "ssh"
 * }
 * ]
 */
 security_groups?: {
 id?: string;
 name?: string;
 }[];
 }[];
 export type $400 = {
 details?: {
 description?: string;
 field?: string;
 issue?: string;
 location?: string;
 value?: string;
 }[];
 errorCode?: string;
 links?: {
 href?: string;
 }[];
 message?: string;
 }[];
 export type $401 = {
 details?: {
 description?: string;
 field?: string;
 issue?: string;
 location?: string;
 value?: string;
 }[];
 errorCode?: string;
 links?: {
 href?: string;
 }[];
 message?: string;
 }[];
 export type $403 = {
 details?: {
 description?: string;
 field?: string;
 issue?: string;
 location?: string;
 value?: string;
 }[];
 errorCode?: string;
 links?: {
 href?: string;
 }[];
 message?: string;
 }[];
 export type $404 = {
 details?: {
 description?: string;
 field?: string;
 issue?: string;
 location?: string;
 value?: string;
 }[];
 errorCode?: string;
 links?: {
 href?: string;
 }[];
 message?: string;
 }[];
 export type $422 = {
 details?: {
 description?: string;
 field?: string;
 issue?: string;
 location?: string;
 value?: string;
 }[];
 errorCode?: string;
 links?: {
 href?: string;
 }[];
 message?: string;
 }[];
 export type $500 = {
 details?: {
 description?: string;
 field?: string;
 issue?: string;
 location?: string;
 value?: string;
 }[];
 errorCode?: string;
 links?: {
 href?: string;
 }[];
 message?: string;
 }[];
 }
 }
 namespace ListVolumes {
 namespace Parameters {
 /**
 * Used for paging. Tells how many records are to be returned.
 * example:
 * 50
 */
 export type Limit = number;
 /**
 * Volume name
 * example:
 * redis-a
 */
 export type Name = string;
 /**
 * Used for paging. Tells the position of the first record to be returned. Similar to the paging offset used in traditional databases.
 * example:
 * 0
 */
 export type Offset = number;
 /**
 * Availability zones
 * example:
 * sa-east-1-a
 */
 export type Zone = string;
 }
 export interface QueryParameters {
 name?: /**
 * Volume name
 * example:
 * redis-a
 */
 Parameters.Name;
 zone?: /**
 * Availability zones
 * example:
 * sa-east-1-a
 */
 Parameters.Zone;
 _offset?: /**
 * Used for paging. Tells the position of the first record to be returned. Similar to the paging offset used in traditional databases.
 * example:
 * 0
 */
 Parameters.Offset;
 _limit?: /**
 * Used for paging. Tells how many records are to be returned.
 * example:
 * 50
 */
 Parameters.Limit;
 }
 namespace Responses {
 export type $200 = {
 /**
 * Volume ID
 * example:
 * 61FE67B3-B4F6-4FB5-AD09-3A89700FBF0D
 */
 id?: string; // uuid
 /**
 * volume name
 * example:
 * redis-a
 */
 name?: string;
 /**
 * Volume size un gibabytes
 * example:
 * 20
 */
 size_gb?: number; // int32
 /**
 * volume type
 * example:
 * ssd
 */
 type?: string;
 /**
 * Availability zones
 * example:
 * sa-east-1-a
 */
 zone?: string;
 /**
 * Volumes tags
 * example:
 * [
 * {
 * "type": "CostCenter",
 * "value": "1"
 * },
 * {
 * "type": "ClusterName",
 * "value": "redis-a"
 * }
 * ]
 */
 tags?: {
 key?: string;
 value?: string;
 }[];
 /**
 * Volume status
 * example:
 * IN_USE
 */
 status?: string;
 /**
 * example:
 * 2020-12-22T16:08:51.000Z
 */
 created_at?: string; // date-time
 /**
 * example:
 * 2020-12-22T16:08:51.000Z
 */
 updated_at?: string; // date-time
 }[];
 export type $400 = {
 details?: {
 description?: string;
 field?: string;
 issue?: string;
 location?: string;
 value?: string;
 }[];
 errorCode?: string;
 links?: {
 href?: string;
 }[];
 message?: string;
 }[];
 export type $401 = {
 details?: {
 description?: string;
 field?: string;
 issue?: string;
 location?: string;
 value?: string;
 }[];
 errorCode?: string;
 links?: {
 href?: string;
 }[];
 message?: string;
 }[];
 export type $403 = {
 details?: {
 description?: string;
 field?: string;
 issue?: string;
 location?: string;
 value?: string;
 }[];
 errorCode?: string;
 links?: {
 href?: string;
 }[];
 message?: string;
 }[];
 export type $404 = {
 details?: {
 description?: string;
 field?: string;
 issue?: string;
 location?: string;
 value?: string;
 }[];
 errorCode?: string;
 links?: {
 href?: string;
 }[];
 message?: string;
 }[];
 export type $422 = {
 details?: {
 description?: string;
 field?: string;
 issue?: string;
 location?: string;
 value?: string;
 }[];
 errorCode?: string;
 links?: {
 href?: string;
 }[];
 message?: string;
 }[];
 export type $500 = {
 details?: {
 description?: string;
 field?: string;
 issue?: string;
 location?: string;
 value?: string;
 }[];
 errorCode?: string;
 links?: {
 href?: string;
 }[];
 message?: string;
 }[];
 }
 }
}

export interface OperationMethods {
 /**
 * GetVolume - Get the specific Volume
 * 
 * Retrieves the current state of the Volume by it's unique identifier.
 */
 'GetVolume'(
 parameters?: Parameters<UnknownParamsObject> | null,
 data?: any,
 config?: AxiosRequestConfig 
 ): OperationResponse<any>
 /**
 * DeleteVolume - Deletes the volume
 */
 'DeleteVolume'(
 parameters?: Parameters<UnknownParamsObject> | null,
 data?: any,
 config?: AxiosRequestConfig 
 ): OperationResponse<any>
 /**
 * ListVolumes - Retrives a Volumes list
 * 
 * Searches for any volumes matching the given arguments
 */
 'ListVolumes'(
 parameters?: Parameters<Paths.ListVolumes.QueryParameters> | null,
 data?: any,
 config?: AxiosRequestConfig 
 ): OperationResponse<Paths.ListVolumes.Responses.$200>
 /**
 * CreateVolumes - Create a new Volume
 */
 'CreateVolumes'(
 parameters?: Parameters<UnknownParamsObject> | null,
 data?: any,
 config?: AxiosRequestConfig 
 ): OperationResponse<any>
 /**
 * GetInstance - Get the specific Instance
 * 
 * Retrieves the current state of the Instance by it's unique identifier.
 */
 'GetInstance'(
 parameters?: Parameters<UnknownParamsObject> | null,
 data?: any,
 config?: AxiosRequestConfig 
 ): OperationResponse<any>
 /**
 * DeleteInstance - Deletes the intence
 */
 'DeleteInstance'(
 parameters?: Parameters<UnknownParamsObject> | null,
 data?: any,
 config?: AxiosRequestConfig 
 ): OperationResponse<any>
 /**
 * ListInstances - Retrives a Instances list
 * 
 * Searches for any instance matching the given arguments
 */
 'ListInstances'(
 parameters?: Parameters<Paths.ListInstances.QueryParameters> | null,
 data?: any,
 config?: AxiosRequestConfig 
 ): OperationResponse<Paths.ListInstances.Responses.$200>
 /**
 * CreateInstances - Create new Instances
 */
 'CreateInstances'(
 parameters?: Parameters<UnknownParamsObject> | null,
 data?: any,
 config?: AxiosRequestConfig 
 ): OperationResponse<any>
}

export interface PathsDictionary {
 ['/compute/v1alpha/projects/{project}/regions/{region}/volumes/{id}']: {
 /**
 * get - Get the specific Volume
 * 
 * Retrieves the current state of the Volume by it's unique identifier.
 */
 'get'(
 parameters?: Parameters<UnknownParamsObject> | null,
 data?: any,
 config?: AxiosRequestConfig 
 ): OperationResponse<any>
 /**
 * delete - Deletes the volume
 */
 'delete'(
 parameters?: Parameters<UnknownParamsObject> | null,
 data?: any,
 config?: AxiosRequestConfig 
 ): OperationResponse<any>
 }
 ['/compute/v1alpha/projects/{project}/regions/{region}/volumes']: {
 /**
 * post - Create a new Volume
 */
 'post'(
 parameters?: Parameters<UnknownParamsObject> | null,
 data?: any,
 config?: AxiosRequestConfig 
 ): OperationResponse<any>
 /**
 * get - Retrives a Volumes list
 * 
 * Searches for any volumes matching the given arguments
 */
 'get'(
 parameters?: Parameters<Paths.ListVolumes.QueryParameters> | null,
 data?: any,
 config?: AxiosRequestConfig 
 ): OperationResponse<Paths.ListVolumes.Responses.$200>
 }
 ['/compute/v1alpha/projects/{project}/regions/{region}/instances/{id}']: {
 /**
 * get - Get the specific Instance
 * 
 * Retrieves the current state of the Instance by it's unique identifier.
 */
 'get'(
 parameters?: Parameters<UnknownParamsObject> | null,
 data?: any,
 config?: AxiosRequestConfig 
 ): OperationResponse<any>
 /**
 * delete - Deletes the intence
 */
 'delete'(
 parameters?: Parameters<UnknownParamsObject> | null,
 data?: any,
 config?: AxiosRequestConfig 
 ): OperationResponse<any>
 }
 ['/compute/v1alpha/projects/{project}/regions/{region}/instances']: {
 /**
 * get - Retrives a Instances list
 * 
 * Searches for any instance matching the given arguments
 */
 'get'(
 parameters?: Parameters<Paths.ListInstances.QueryParameters> | null,
 data?: any,
 config?: AxiosRequestConfig 
 ): OperationResponse<Paths.ListInstances.Responses.$200>
 /**
 * post - Create new Instances
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
 const api = new OAClient({ definition: 
	JSON.parse(
		`{"openapi":"3.0.3","info":{"title":"JEM Cloud Compute API","description":"JEM Cloud Compute API","version":"0.0.1"},"servers":[{"url":"https://api.jaxyendy.com/jem/"}],"paths":{"/compute/v1alpha/projects/{project}/regions/{region}/volumes/{id}":{"parameters":[{"name":"project","in":"path","required":true,"schema":{"type":"string","description":"project id","example":"meu-projeto-1","maxLength":100,"minLength":1,"$id":"#/paths/ComputeV1alphaProjects$projectRegions$regionVolumes$id/parameters/project"}},{"name":"region","in":"path","required":true,"schema":{"type":"string","description":"region","example":"sa-east-1","maxLength":100,"minLength":1,"$id":"#/paths/ComputeV1alphaProjects$projectRegions$regionVolumes$id/parameters/region"}},{"name":"id","in":"path","required":true,"schema":{"type":"string","description":"volume id","example":"61FE67B3-B4F6-4FB5-AD09-3A89700FBF0D","maxLength":36,"minLength":1,"$id":"#/paths/ComputeV1alphaProjects$projectRegions$regionVolumes$id/parameters/id"}}],"get":{"tags":["volumes"],"operationId":"GetVolume","summary":"Get the specific Volume","description":"Retrieves the current state of the Volume by it's unique identifier.","responses":{"200":{"description":"Volume was found.","content":{"application/json":{"schema":{"type":"object","description":"Persistent Volume","properties":{"id":{"type":"string","format":"uuid","description":"Volume ID","example":"61FE67B3-B4F6-4FB5-AD09-3A89700FBF0D","readOnly":true,"maxLength":36,"minLength":1},"name":{"type":"string","minLength":1,"maxLength":50,"description":"volume name","example":"redis-a"},"size_gb":{"type":"integer","format":"int32","minimum":0,"maximum":1000000,"description":"Volume size un gibabytes","example":20},"type":{"type":"string","minLength":1,"maxLength":20,"description":"volume type","example":"ssd"},"zone":{"type":"string","minLength":1,"maxLength":20,"description":"Availability zones","example":"sa-east-1-a"},"tags":{"type":"array","items":{"type":"object","description":"Key Value Object","properties":{"key":{"type":"string","minLength":1,"maxLength":50},"value":{"type":"string","minLength":1,"maxLength":50}}},"description":"Volumes tags","example":[{"type":"CostCenter","value":"1"},{"type":"ClusterName","value":"redis-a"}]},"status":{"type":"string","readOnly":true,"minLength":1,"maxLength":20,"description":"Volume status","example":"IN_USE"},"created_at":{"readOnly":true,"type":"string","example":"2020-12-22T16:08:51.000Z","format":"date-time"},"updated_at":{"readOnly":true,"type":"string","example":"2020-12-22T16:08:51.000Z","format":"date-time"}},"$id":"#/components/schemas/Volume"}}}},"400":{"content":{"application/json":{"schema":{"items":{"type":"object","properties":{"details":{"type":"array","items":{"type":"object","properties":{"description":{"type":"string"},"field":{"type":"string"},"issue":{"type":"string"},"location":{"type":"string"},"value":{"type":"string"}}}},"errorCode":{"type":"string"},"links":{"type":"array","items":{"type":"object","properties":{"href":{"type":"string"}}}},"message":{"type":"string"}}},"type":"array","$id":"#/paths/GetVolume/responses/400"}}},"description":"Invalid request"},"401":{"content":{"application/json":{"schema":{"items":{"type":"object","properties":{"details":{"type":"array","items":{"type":"object","properties":{"description":{"type":"string"},"field":{"type":"string"},"issue":{"type":"string"},"location":{"type":"string"},"value":{"type":"string"}}}},"errorCode":{"type":"string"},"links":{"type":"array","items":{"type":"object","properties":{"href":{"type":"string"}}}},"message":{"type":"string"}}},"type":"array","$id":"#/paths/GetVolume/responses/401"}}},"description":"Not Authorized"},"403":{"content":{"application/json":{"schema":{"items":{"type":"object","properties":{"details":{"type":"array","items":{"type":"object","properties":{"description":{"type":"string"},"field":{"type":"string"},"issue":{"type":"string"},"location":{"type":"string"},"value":{"type":"string"}}}},"errorCode":{"type":"string"},"links":{"type":"array","items":{"type":"object","properties":{"href":{"type":"string"}}}},"message":{"type":"string"}}},"type":"array","$id":"#/paths/GetVolume/responses/403"}}},"description":"Forbidden"},"404":{"content":{"application/json":{"schema":{"items":{"type":"object","properties":{"details":{"type":"array","items":{"type":"object","properties":{"description":{"type":"string"},"field":{"type":"string"},"issue":{"type":"string"},"location":{"type":"string"},"value":{"type":"string"}}}},"errorCode":{"type":"string"},"links":{"type":"array","items":{"type":"object","properties":{"href":{"type":"string"}}}},"message":{"type":"string"}}},"type":"array","$id":"#/paths/GetVolume/responses/404"}}},"description":"Entity not found"},"422":{"content":{"application/json":{"schema":{"items":{"type":"object","properties":{"details":{"type":"array","items":{"type":"object","properties":{"description":{"type":"string"},"field":{"type":"string"},"issue":{"type":"string"},"location":{"type":"string"},"value":{"type":"string"}}}},"errorCode":{"type":"string"},"links":{"type":"array","items":{"type":"object","properties":{"href":{"type":"string"}}}},"message":{"type":"string"}}},"type":"array","$id":"#/paths/GetVolume/responses/422"}}},"description":"Unprocessable entity"},"500":{"content":{"application/json":{"schema":{"items":{"type":"object","properties":{"details":{"type":"array","items":{"type":"object","properties":{"description":{"type":"string"},"field":{"type":"string"},"issue":{"type":"string"},"location":{"type":"string"},"value":{"type":"string"}}}},"errorCode":{"type":"string"},"links":{"type":"array","items":{"type":"object","properties":{"href":{"type":"string"}}}},"message":{"type":"string"}}},"type":"array","$id":"#/paths/GetVolume/responses/500"}}},"description":"Internal server error"}}},"delete":{"tags":["volumes"],"operationId":"DeleteVolume","summary":"Deletes the volume","responses":{"202":{"description":"Volume is being delete asynchronously","content":{"application/json":{"schema":{"type":"object","description":"Persistent Volume","properties":{"id":{"type":"string","format":"uuid","description":"Volume ID","example":"61FE67B3-B4F6-4FB5-AD09-3A89700FBF0D","readOnly":true,"maxLength":36,"minLength":1},"name":{"type":"string","minLength":1,"maxLength":50,"description":"volume name","example":"redis-a"},"size_gb":{"type":"integer","format":"int32","minimum":0,"maximum":1000000,"description":"Volume size un gibabytes","example":20},"type":{"type":"string","minLength":1,"maxLength":20,"description":"volume type","example":"ssd"},"zone":{"type":"string","minLength":1,"maxLength":20,"description":"Availability zones","example":"sa-east-1-a"},"tags":{"type":"array","items":{"type":"object","description":"Key Value Object","properties":{"key":{"type":"string","minLength":1,"maxLength":50},"value":{"type":"string","minLength":1,"maxLength":50}}},"description":"Volumes tags","example":[{"type":"CostCenter","value":"1"},{"type":"ClusterName","value":"redis-a"}]},"status":{"type":"string","readOnly":true,"minLength":1,"maxLength":20,"description":"Volume status","example":"IN_USE"},"created_at":{"readOnly":true,"type":"string","example":"2020-12-22T16:08:51.000Z","format":"date-time"},"updated_at":{"readOnly":true,"type":"string","example":"2020-12-22T16:08:51.000Z","format":"date-time"}},"$id":"#/components/schemas/Volume"}}}},"400":{"content":{"application/json":{"schema":{"items":{"type":"object","properties":{"details":{"type":"array","items":{"type":"object","properties":{"description":{"type":"string"},"field":{"type":"string"},"issue":{"type":"string"},"location":{"type":"string"},"value":{"type":"string"}}}},"errorCode":{"type":"string"},"links":{"type":"array","items":{"type":"object","properties":{"href":{"type":"string"}}}},"message":{"type":"string"}}},"type":"array","$id":"#/paths/DeleteVolume/responses/400"}}},"description":"Invalid request"},"401":{"content":{"application/json":{"schema":{"items":{"type":"object","properties":{"details":{"type":"array","items":{"type":"object","properties":{"description":{"type":"string"},"field":{"type":"string"},"issue":{"type":"string"},"location":{"type":"string"},"value":{"type":"string"}}}},"errorCode":{"type":"string"},"links":{"type":"array","items":{"type":"object","properties":{"href":{"type":"string"}}}},"message":{"type":"string"}}},"type":"array","$id":"#/paths/DeleteVolume/responses/401"}}},"description":"Not Authorized"},"403":{"content":{"application/json":{"schema":{"items":{"type":"object","properties":{"details":{"type":"array","items":{"type":"object","properties":{"description":{"type":"string"},"field":{"type":"string"},"issue":{"type":"string"},"location":{"type":"string"},"value":{"type":"string"}}}},"errorCode":{"type":"string"},"links":{"type":"array","items":{"type":"object","properties":{"href":{"type":"string"}}}},"message":{"type":"string"}}},"type":"array","$id":"#/paths/DeleteVolume/responses/403"}}},"description":"Forbidden"},"404":{"content":{"application/json":{"schema":{"items":{"type":"object","properties":{"details":{"type":"array","items":{"type":"object","properties":{"description":{"type":"string"},"field":{"type":"string"},"issue":{"type":"string"},"location":{"type":"string"},"value":{"type":"string"}}}},"errorCode":{"type":"string"},"links":{"type":"array","items":{"type":"object","properties":{"href":{"type":"string"}}}},"message":{"type":"string"}}},"type":"array","$id":"#/paths/DeleteVolume/responses/404"}}},"description":"Entity not found"},"422":{"content":{"application/json":{"schema":{"items":{"type":"object","properties":{"details":{"type":"array","items":{"type":"object","properties":{"description":{"type":"string"},"field":{"type":"string"},"issue":{"type":"string"},"location":{"type":"string"},"value":{"type":"string"}}}},"errorCode":{"type":"string"},"links":{"type":"array","items":{"type":"object","properties":{"href":{"type":"string"}}}},"message":{"type":"string"}}},"type":"array","$id":"#/paths/DeleteVolume/responses/422"}}},"description":"Unprocessable entity"},"500":{"content":{"application/json":{"schema":{"items":{"type":"object","properties":{"details":{"type":"array","items":{"type":"object","properties":{"description":{"type":"string"},"field":{"type":"string"},"issue":{"type":"string"},"location":{"type":"string"},"value":{"type":"string"}}}},"errorCode":{"type":"string"},"links":{"type":"array","items":{"type":"object","properties":{"href":{"type":"string"}}}},"message":{"type":"string"}}},"type":"array","$id":"#/paths/DeleteVolume/responses/500"}}},"description":"Internal server error"}}}},"/compute/v1alpha/projects/{project}/regions/{region}/volumes":{"parameters":[{"name":"project","in":"path","required":true,"schema":{"type":"string","description":"project id","example":"meu-projeto-1","maxLength":100,"minLength":1,"$id":"#/paths/ComputeV1alphaProjects$projectRegions$regionVolumes/parameters/project"}},{"name":"region","in":"path","required":true,"schema":{"type":"string","description":"region","example":"sa-east-1","maxLength":100,"minLength":1,"$id":"#/paths/ComputeV1alphaProjects$projectRegions$regionVolumes/parameters/region"}}],"post":{"tags":["volumes"],"operationId":"CreateVolumes","summary":"Create a new Volume","requestBody":{"required":true,"content":{"application/json":{"schema":{"type":"object","description":"Persistent Volume","properties":{"id":{"type":"string","format":"uuid","description":"Volume ID","example":"61FE67B3-B4F6-4FB5-AD09-3A89700FBF0D","readOnly":true,"maxLength":36,"minLength":1},"name":{"type":"string","minLength":1,"maxLength":50,"description":"volume name","example":"redis-a"},"size_gb":{"type":"integer","format":"int32","minimum":0,"maximum":1000000,"description":"Volume size un gibabytes","example":20},"type":{"type":"string","minLength":1,"maxLength":20,"description":"volume type","example":"ssd"},"zone":{"type":"string","minLength":1,"maxLength":20,"description":"Availability zones","example":"sa-east-1-a"},"tags":{"type":"array","items":{"type":"object","description":"Key Value Object","properties":{"key":{"type":"string","minLength":1,"maxLength":50},"value":{"type":"string","minLength":1,"maxLength":50}}},"description":"Volumes tags","example":[{"type":"CostCenter","value":"1"},{"type":"ClusterName","value":"redis-a"}]},"status":{"type":"string","readOnly":true,"minLength":1,"maxLength":20,"description":"Volume status","example":"IN_USE"},"created_at":{"readOnly":true,"type":"string","example":"2020-12-22T16:08:51.000Z","format":"date-time"},"updated_at":{"readOnly":true,"type":"string","example":"2020-12-22T16:08:51.000Z","format":"date-time"}},"$id":"#/components/schemas/Volume"}}}},"responses":{"202":{"description":"Volume is being created asynchronously","content":{"application/json":{"schema":{"type":"object","description":"Persistent Volume","properties":{"id":{"type":"string","format":"uuid","description":"Volume ID","example":"61FE67B3-B4F6-4FB5-AD09-3A89700FBF0D","readOnly":true,"maxLength":36,"minLength":1},"name":{"type":"string","minLength":1,"maxLength":50,"description":"volume name","example":"redis-a"},"size_gb":{"type":"integer","format":"int32","minimum":0,"maximum":1000000,"description":"Volume size un gibabytes","example":20},"type":{"type":"string","minLength":1,"maxLength":20,"description":"volume type","example":"ssd"},"zone":{"type":"string","minLength":1,"maxLength":20,"description":"Availability zones","example":"sa-east-1-a"},"tags":{"type":"array","items":{"type":"object","description":"Key Value Object","properties":{"key":{"type":"string","minLength":1,"maxLength":50},"value":{"type":"string","minLength":1,"maxLength":50}}},"description":"Volumes tags","example":[{"type":"CostCenter","value":"1"},{"type":"ClusterName","value":"redis-a"}]},"status":{"type":"string","readOnly":true,"minLength":1,"maxLength":20,"description":"Volume status","example":"IN_USE"},"created_at":{"readOnly":true,"type":"string","example":"2020-12-22T16:08:51.000Z","format":"date-time"},"updated_at":{"readOnly":true,"type":"string","example":"2020-12-22T16:08:51.000Z","format":"date-time"}},"$id":"#/components/schemas/Volume"}}}},"400":{"content":{"application/json":{"schema":{"items":{"type":"object","properties":{"details":{"type":"array","items":{"type":"object","properties":{"description":{"type":"string"},"field":{"type":"string"},"issue":{"type":"string"},"location":{"type":"string"},"value":{"type":"string"}}}},"errorCode":{"type":"string"},"links":{"type":"array","items":{"type":"object","properties":{"href":{"type":"string"}}}},"message":{"type":"string"}}},"type":"array","$id":"#/paths/CreateVolumes/responses/400"}}},"description":"Invalid request"},"401":{"content":{"application/json":{"schema":{"items":{"type":"object","properties":{"details":{"type":"array","items":{"type":"object","properties":{"description":{"type":"string"},"field":{"type":"string"},"issue":{"type":"string"},"location":{"type":"string"},"value":{"type":"string"}}}},"errorCode":{"type":"string"},"links":{"type":"array","items":{"type":"object","properties":{"href":{"type":"string"}}}},"message":{"type":"string"}}},"type":"array","$id":"#/paths/CreateVolumes/responses/401"}}},"description":"Not Authorized"},"403":{"content":{"application/json":{"schema":{"items":{"type":"object","properties":{"details":{"type":"array","items":{"type":"object","properties":{"description":{"type":"string"},"field":{"type":"string"},"issue":{"type":"string"},"location":{"type":"string"},"value":{"type":"string"}}}},"errorCode":{"type":"string"},"links":{"type":"array","items":{"type":"object","properties":{"href":{"type":"string"}}}},"message":{"type":"string"}}},"type":"array","$id":"#/paths/CreateVolumes/responses/403"}}},"description":"Forbidden"},"404":{"content":{"application/json":{"schema":{"items":{"type":"object","properties":{"details":{"type":"array","items":{"type":"object","properties":{"description":{"type":"string"},"field":{"type":"string"},"issue":{"type":"string"},"location":{"type":"string"},"value":{"type":"string"}}}},"errorCode":{"type":"string"},"links":{"type":"array","items":{"type":"object","properties":{"href":{"type":"string"}}}},"message":{"type":"string"}}},"type":"array","$id":"#/paths/CreateVolumes/responses/404"}}},"description":"Entity not found"},"422":{"content":{"application/json":{"schema":{"items":{"type":"object","properties":{"details":{"type":"array","items":{"type":"object","properties":{"description":{"type":"string"},"field":{"type":"string"},"issue":{"type":"string"},"location":{"type":"string"},"value":{"type":"string"}}}},"errorCode":{"type":"string"},"links":{"type":"array","items":{"type":"object","properties":{"href":{"type":"string"}}}},"message":{"type":"string"}}},"type":"array","$id":"#/paths/CreateVolumes/responses/422"}}},"description":"Unprocessable entity"},"500":{"content":{"application/json":{"schema":{"items":{"type":"object","properties":{"details":{"type":"array","items":{"type":"object","properties":{"description":{"type":"string"},"field":{"type":"string"},"issue":{"type":"string"},"location":{"type":"string"},"value":{"type":"string"}}}},"errorCode":{"type":"string"},"links":{"type":"array","items":{"type":"object","properties":{"href":{"type":"string"}}}},"message":{"type":"string"}}},"type":"array","$id":"#/paths/CreateVolumes/responses/500"}}},"description":"Internal server error"}}},"get":{"tags":["volumes"],"operationId":"ListVolumes","summary":"Retrives a Volumes list","description":"Searches for any volumes matching the given arguments","parameters":[{"in":"query","name":"name","schema":{"type":"string","minLength":3,"maxLength":150,"description":"Volume name","example":"redis-a","$id":"#/paths/ListVolumes/parameters/name"}},{"in":"query","name":"zone","schema":{"type":"string","example":"sa-east-1-a","description":"Availability zones","$id":"#/paths/ListVolumes/parameters/zone"}},{"in":"query","name":"_offset","schema":{"type":"integer","minimum":0,"description":"Used for paging. Tells the position of the first record to be returned. Similar to the paging offset used in traditional databases.","example":0,"default":0,"$id":"#/paths/ListVolumes/parameters/_offset"}},{"in":"query","name":"_limit","schema":{"type":"integer","minimum":1,"maximum":50,"description":"Used for paging. Tells how many records are to be returned.","example":50,"default":50,"$id":"#/paths/ListVolumes/parameters/_limit"}}],"responses":{"200":{"description":"Volume search succeed","content":{"application/json":{"schema":{"type":"array","items":{"type":"object","description":"Persistent Volume","properties":{"id":{"type":"string","format":"uuid","description":"Volume ID","example":"61FE67B3-B4F6-4FB5-AD09-3A89700FBF0D","readOnly":true,"maxLength":36,"minLength":1},"name":{"type":"string","minLength":1,"maxLength":50,"description":"volume name","example":"redis-a"},"size_gb":{"type":"integer","format":"int32","minimum":0,"maximum":1000000,"description":"Volume size un gibabytes","example":20},"type":{"type":"string","minLength":1,"maxLength":20,"description":"volume type","example":"ssd"},"zone":{"type":"string","minLength":1,"maxLength":20,"description":"Availability zones","example":"sa-east-1-a"},"tags":{"type":"array","items":{"type":"object","description":"Key Value Object","properties":{"key":{"type":"string","minLength":1,"maxLength":50},"value":{"type":"string","minLength":1,"maxLength":50}}},"description":"Volumes tags","example":[{"type":"CostCenter","value":"1"},{"type":"ClusterName","value":"redis-a"}]},"status":{"type":"string","readOnly":true,"minLength":1,"maxLength":20,"description":"Volume status","example":"IN_USE"},"created_at":{"readOnly":true,"type":"string","example":"2020-12-22T16:08:51.000Z","format":"date-time"},"updated_at":{"readOnly":true,"type":"string","example":"2020-12-22T16:08:51.000Z","format":"date-time"}},"$id":"#/components/schemas/Volume"},"$id":"#/paths/ListVolumes/responses/200"}}}},"400":{"content":{"application/json":{"schema":{"items":{"type":"object","properties":{"details":{"type":"array","items":{"type":"object","properties":{"description":{"type":"string"},"field":{"type":"string"},"issue":{"type":"string"},"location":{"type":"string"},"value":{"type":"string"}}}},"errorCode":{"type":"string"},"links":{"type":"array","items":{"type":"object","properties":{"href":{"type":"string"}}}},"message":{"type":"string"}}},"type":"array","$id":"#/paths/ListVolumes/responses/400"}}},"description":"Invalid request"},"401":{"content":{"application/json":{"schema":{"items":{"type":"object","properties":{"details":{"type":"array","items":{"type":"object","properties":{"description":{"type":"string"},"field":{"type":"string"},"issue":{"type":"string"},"location":{"type":"string"},"value":{"type":"string"}}}},"errorCode":{"type":"string"},"links":{"type":"array","items":{"type":"object","properties":{"href":{"type":"string"}}}},"message":{"type":"string"}}},"type":"array","$id":"#/paths/ListVolumes/responses/401"}}},"description":"Not Authorized"},"403":{"content":{"application/json":{"schema":{"items":{"type":"object","properties":{"details":{"type":"array","items":{"type":"object","properties":{"description":{"type":"string"},"field":{"type":"string"},"issue":{"type":"string"},"location":{"type":"string"},"value":{"type":"string"}}}},"errorCode":{"type":"string"},"links":{"type":"array","items":{"type":"object","properties":{"href":{"type":"string"}}}},"message":{"type":"string"}}},"type":"array","$id":"#/paths/ListVolumes/responses/403"}}},"description":"Forbidden"},"404":{"content":{"application/json":{"schema":{"items":{"type":"object","properties":{"details":{"type":"array","items":{"type":"object","properties":{"description":{"type":"string"},"field":{"type":"string"},"issue":{"type":"string"},"location":{"type":"string"},"value":{"type":"string"}}}},"errorCode":{"type":"string"},"links":{"type":"array","items":{"type":"object","properties":{"href":{"type":"string"}}}},"message":{"type":"string"}}},"type":"array","$id":"#/paths/ListVolumes/responses/404"}}},"description":"Entity not found"},"422":{"content":{"application/json":{"schema":{"items":{"type":"object","properties":{"details":{"type":"array","items":{"type":"object","properties":{"description":{"type":"string"},"field":{"type":"string"},"issue":{"type":"string"},"location":{"type":"string"},"value":{"type":"string"}}}},"errorCode":{"type":"string"},"links":{"type":"array","items":{"type":"object","properties":{"href":{"type":"string"}}}},"message":{"type":"string"}}},"type":"array","$id":"#/paths/ListVolumes/responses/422"}}},"description":"Unprocessable entity"},"500":{"content":{"application/json":{"schema":{"items":{"type":"object","properties":{"details":{"type":"array","items":{"type":"object","properties":{"description":{"type":"string"},"field":{"type":"string"},"issue":{"type":"string"},"location":{"type":"string"},"value":{"type":"string"}}}},"errorCode":{"type":"string"},"links":{"type":"array","items":{"type":"object","properties":{"href":{"type":"string"}}}},"message":{"type":"string"}}},"type":"array","$id":"#/paths/ListVolumes/responses/500"}}},"description":"Internal server error"}}}},"/compute/v1alpha/projects/{project}/regions/{region}/instances/{id}":{"parameters":[{"name":"project","in":"path","required":true,"schema":{"type":"string","description":"project id","example":"meu-projeto-1","maxLength":100,"minLength":1,"$id":"#/paths/ComputeV1alphaProjects$projectRegions$regionInstances$id/parameters/project"}},{"name":"region","in":"path","required":true,"schema":{"type":"string","description":"region","example":"sa-east-1","maxLength":100,"minLength":1,"$id":"#/paths/ComputeV1alphaProjects$projectRegions$regionInstances$id/parameters/region"}},{"name":"id","in":"path","required":true,"schema":{"type":"string","description":"instance id","example":"61FE67B3-B4F6-4FB5-AD09-3A89700FBF0D","maxLength":36,"minLength":1,"$id":"#/paths/ComputeV1alphaProjects$projectRegions$regionInstances$id/parameters/id"}}],"get":{"tags":["instances"],"operationId":"GetInstance","summary":"Get the specific Instance","description":"Retrieves the current state of the Instance by it's unique identifier.","responses":{"200":{"description":"Instance was found.","content":{"application/json":{"schema":{"type":"object","description":"Represents an Instance resource.","properties":{"id":{"type":"string","format":"uuid","description":"ID","example":"61FE67B3-B4F6-4FB5-AD09-3A89700FBF0D","readOnly":true,"maxLength":36,"minLength":1},"name":{"type":"string","minLength":1,"maxLength":50,"description":"instance name","example":"apiserver-a"},"description":{"type":"string","minLength":0,"maxLength":255,"description":"instance description"},"type":{"type":"string","minLength":1,"maxLength":20,"description":"instance type","example":"mg1-large"},"zone":{"type":"string","minLength":1,"maxLength":20,"description":"Availability zones","example":"sa-east-1-a"},"tags":{"type":"array","items":{"type":"object","description":"Key Value Object","properties":{"key":{"type":"string","minLength":1,"maxLength":50},"value":{"type":"string","minLength":1,"maxLength":50}}},"description":"tags","example":[{"type":"CostCenter","value":"1"},{"type":"ClusterName","value":"apiserver-a"}]},"status":{"type":"string","readOnly":true,"minLength":1,"maxLength":20,"description":"Instance status","example":"OK"},"created_at":{"readOnly":true,"type":"string","example":"2020-12-22T16:08:51.000Z","format":"date-time"},"updated_at":{"readOnly":true,"type":"string","example":"2020-12-22T16:08:51.000Z","format":"date-time"},"hostname":{"type":"string","minLength":1,"maxLength":20,"description":"Specifies the hostname of the instance. The specified hostname must be RFC1035 compliant.","example":"apiserver-01"},"key_name":{"type":"string","minLength":1,"maxLength":20,"description":"Key pair name.","example":"ssh-key-01"},"image":{"type":"object","properties":{"id":{"type":"string","format":"uuid","description":"ID","example":"61FE67B3-B4F6-4FB5-AD09-3A89700FBF0D","readOnly":false,"maxLength":36,"minLength":1},"name":{"type":"string","readOnly":true,"example":"image-test"}}},"disk_mappings":{"type":"array","items":{"type":"object","description":"Instance Disk Mapping","properties":{"id":{"type":"string","format":"uuid","description":"ID","example":"61FE67B3-B4F6-4FB5-AD09-3A89700FBF0D","readOnly":true,"maxLength":36,"minLength":1},"device_name":{"type":"string","minLength":1,"maxLength":50,"description":"device name","example":"sda"},"delete_on_termination":{"type":"boolean","description":"Terminatie volume when the instance is deleted","example":false},"volume":{"oneOf":[{"type":"object","description":"Persistent Volume","properties":{"id":{"type":"string","format":"uuid","description":"Volume ID","example":"61FE67B3-B4F6-4FB5-AD09-3A89700FBF0D","readOnly":true,"maxLength":36,"minLength":1},"name":{"type":"string","minLength":1,"maxLength":50,"description":"volume name","example":"redis-a"},"size_gb":{"type":"integer","format":"int32","minimum":0,"maximum":1000000,"description":"Volume size un gibabytes","example":20},"type":{"type":"string","minLength":1,"maxLength":20,"description":"volume type","example":"ssd"},"zone":{"type":"string","minLength":1,"maxLength":20,"description":"Availability zones","example":"sa-east-1-a"},"tags":{"type":"array","items":{"type":"object","description":"Key Value Object","properties":{"key":{"type":"string","minLength":1,"maxLength":50},"value":{"type":"string","minLength":1,"maxLength":50}}},"description":"Volumes tags","example":[{"type":"CostCenter","value":"1"},{"type":"ClusterName","value":"redis-a"}]},"status":{"type":"string","readOnly":true,"minLength":1,"maxLength":20,"description":"Volume status","example":"IN_USE"},"created_at":{"readOnly":true,"type":"string","example":"2020-12-22T16:08:51.000Z","format":"date-time"},"updated_at":{"readOnly":true,"type":"string","example":"2020-12-22T16:08:51.000Z","format":"date-time"}},"$id":"#/components/schemas/Volume"},{"type":"object","properties":{"id":{"type":"string","format":"uuid","description":"Volume ID","example":"61FE67B3-B4F6-4FB5-AD09-3A89700FBF0D","readOnly":false,"maxLength":36,"minLength":1}}}]}},"$id":"#/components/schemas/DiskMapping"}},"network_interfaces":{"type":"array","items":{"type":"object","description":"Network Interface mapping","properties":{"id":{"type":"string","format":"uuid","description":"ID","example":"61FE67B3-B4F6-4FB5-AD09-3A89700FBF0D","readOnly":true,"maxLength":36,"minLength":1},"mac_address":{"type":"string","readOnly":true},"ip_address":{"type":"string","example":"10.0.0.1","maxLength":39,"minLength":1},"public_ip_address":{"type":"object","properties":{"id":{"type":"string","format":"uuid","description":"ID","example":"61FE67B3-B4F6-4FB5-AD09-3A89700FBF0D","readOnly":false,"maxLength":36,"minLength":1},"type":{"type":"string","description":"Public IP Adress Type","example":"standard"},"ip_address":{"type":"string","format":"ip","readOnly":true,"example":"179.190.33.254"}}},"network":{"type":"object","properties":{"id":{"type":"string","format":"uuid","description":"ID","example":"61FE67B3-B4F6-4FB5-AD09-3A89700FBF0D","readOnly":false,"maxLength":36,"minLength":1},"name":{"type":"string","minLength":1,"maxLength":50,"description":"network name","example":"my network","readOnly":true}}},"sub_network":{"type":"object","properties":{"id":{"type":"string","format":"uuid","description":"ID","example":"61FE67B3-B4F6-4FB5-AD09-3A89700FBF0D","readOnly":false,"maxLength":36,"minLength":1},"name":{"type":"string","minLength":1,"maxLength":50,"description":"sub network name","example":"private","readOnly":true}}}},"$id":"#/components/schemas/NetworkInterface"}},"metadata":{"type":"array","items":{"type":"object","properties":{"key":{"type":"string","minLength":1,"maxLength":255},"value":{"type":"string","minLength":1,"maxLength":255}}}},"security_groups":{"type":"array","description":"One or more security groups. Specify the name of the security groug.","items":{"type":"object","properties":{"id":{"type":"string"},"name":{"type":"string","readOnly":true}}},"example":[{"id":"ssh-only","name":"ssh"}]}},"$id":"#/components/schemas/Instance"}}}},"400":{"content":{"application/json":{"schema":{"items":{"type":"object","properties":{"details":{"type":"array","items":{"type":"object","properties":{"description":{"type":"string"},"field":{"type":"string"},"issue":{"type":"string"},"location":{"type":"string"},"value":{"type":"string"}}}},"errorCode":{"type":"string"},"links":{"type":"array","items":{"type":"object","properties":{"href":{"type":"string"}}}},"message":{"type":"string"}}},"type":"array","$id":"#/paths/GetInstance/responses/400"}}},"description":"Invalid request"},"401":{"content":{"application/json":{"schema":{"items":{"type":"object","properties":{"details":{"type":"array","items":{"type":"object","properties":{"description":{"type":"string"},"field":{"type":"string"},"issue":{"type":"string"},"location":{"type":"string"},"value":{"type":"string"}}}},"errorCode":{"type":"string"},"links":{"type":"array","items":{"type":"object","properties":{"href":{"type":"string"}}}},"message":{"type":"string"}}},"type":"array","$id":"#/paths/GetInstance/responses/401"}}},"description":"Not Authorized"},"403":{"content":{"application/json":{"schema":{"items":{"type":"object","properties":{"details":{"type":"array","items":{"type":"object","properties":{"description":{"type":"string"},"field":{"type":"string"},"issue":{"type":"string"},"location":{"type":"string"},"value":{"type":"string"}}}},"errorCode":{"type":"string"},"links":{"type":"array","items":{"type":"object","properties":{"href":{"type":"string"}}}},"message":{"type":"string"}}},"type":"array","$id":"#/paths/GetInstance/responses/403"}}},"description":"Forbidden"},"404":{"content":{"application/json":{"schema":{"items":{"type":"object","properties":{"details":{"type":"array","items":{"type":"object","properties":{"description":{"type":"string"},"field":{"type":"string"},"issue":{"type":"string"},"location":{"type":"string"},"value":{"type":"string"}}}},"errorCode":{"type":"string"},"links":{"type":"array","items":{"type":"object","properties":{"href":{"type":"string"}}}},"message":{"type":"string"}}},"type":"array","$id":"#/paths/GetInstance/responses/404"}}},"description":"Entity not found"},"422":{"content":{"application/json":{"schema":{"items":{"type":"object","properties":{"details":{"type":"array","items":{"type":"object","properties":{"description":{"type":"string"},"field":{"type":"string"},"issue":{"type":"string"},"location":{"type":"string"},"value":{"type":"string"}}}},"errorCode":{"type":"string"},"links":{"type":"array","items":{"type":"object","properties":{"href":{"type":"string"}}}},"message":{"type":"string"}}},"type":"array","$id":"#/paths/GetInstance/responses/422"}}},"description":"Unprocessable entity"},"500":{"content":{"application/json":{"schema":{"items":{"type":"object","properties":{"details":{"type":"array","items":{"type":"object","properties":{"description":{"type":"string"},"field":{"type":"string"},"issue":{"type":"string"},"location":{"type":"string"},"value":{"type":"string"}}}},"errorCode":{"type":"string"},"links":{"type":"array","items":{"type":"object","properties":{"href":{"type":"string"}}}},"message":{"type":"string"}}},"type":"array","$id":"#/paths/GetInstance/responses/500"}}},"description":"Internal server error"}}},"delete":{"tags":["instances"],"operationId":"DeleteInstance","summary":"Deletes the intence","responses":{"202":{"description":"Instance is being delete asynchronously","content":{"application/json":{"schema":{"type":"object","description":"Represents an Instance resource.","properties":{"id":{"type":"string","format":"uuid","description":"ID","example":"61FE67B3-B4F6-4FB5-AD09-3A89700FBF0D","readOnly":true,"maxLength":36,"minLength":1},"name":{"type":"string","minLength":1,"maxLength":50,"description":"instance name","example":"apiserver-a"},"description":{"type":"string","minLength":0,"maxLength":255,"description":"instance description"},"type":{"type":"string","minLength":1,"maxLength":20,"description":"instance type","example":"mg1-large"},"zone":{"type":"string","minLength":1,"maxLength":20,"description":"Availability zones","example":"sa-east-1-a"},"tags":{"type":"array","items":{"type":"object","description":"Key Value Object","properties":{"key":{"type":"string","minLength":1,"maxLength":50},"value":{"type":"string","minLength":1,"maxLength":50}}},"description":"tags","example":[{"type":"CostCenter","value":"1"},{"type":"ClusterName","value":"apiserver-a"}]},"status":{"type":"string","readOnly":true,"minLength":1,"maxLength":20,"description":"Instance status","example":"OK"},"created_at":{"readOnly":true,"type":"string","example":"2020-12-22T16:08:51.000Z","format":"date-time"},"updated_at":{"readOnly":true,"type":"string","example":"2020-12-22T16:08:51.000Z","format":"date-time"},"hostname":{"type":"string","minLength":1,"maxLength":20,"description":"Specifies the hostname of the instance. The specified hostname must be RFC1035 compliant.","example":"apiserver-01"},"key_name":{"type":"string","minLength":1,"maxLength":20,"description":"Key pair name.","example":"ssh-key-01"},"image":{"type":"object","properties":{"id":{"type":"string","format":"uuid","description":"ID","example":"61FE67B3-B4F6-4FB5-AD09-3A89700FBF0D","readOnly":false,"maxLength":36,"minLength":1},"name":{"type":"string","readOnly":true,"example":"image-test"}}},"disk_mappings":{"type":"array","items":{"type":"object","description":"Instance Disk Mapping","properties":{"id":{"type":"string","format":"uuid","description":"ID","example":"61FE67B3-B4F6-4FB5-AD09-3A89700FBF0D","readOnly":true,"maxLength":36,"minLength":1},"device_name":{"type":"string","minLength":1,"maxLength":50,"description":"device name","example":"sda"},"delete_on_termination":{"type":"boolean","description":"Terminatie volume when the instance is deleted","example":false},"volume":{"oneOf":[{"type":"object","description":"Persistent Volume","properties":{"id":{"type":"string","format":"uuid","description":"Volume ID","example":"61FE67B3-B4F6-4FB5-AD09-3A89700FBF0D","readOnly":true,"maxLength":36,"minLength":1},"name":{"type":"string","minLength":1,"maxLength":50,"description":"volume name","example":"redis-a"},"size_gb":{"type":"integer","format":"int32","minimum":0,"maximum":1000000,"description":"Volume size un gibabytes","example":20},"type":{"type":"string","minLength":1,"maxLength":20,"description":"volume type","example":"ssd"},"zone":{"type":"string","minLength":1,"maxLength":20,"description":"Availability zones","example":"sa-east-1-a"},"tags":{"type":"array","items":{"type":"object","description":"Key Value Object","properties":{"key":{"type":"string","minLength":1,"maxLength":50},"value":{"type":"string","minLength":1,"maxLength":50}}},"description":"Volumes tags","example":[{"type":"CostCenter","value":"1"},{"type":"ClusterName","value":"redis-a"}]},"status":{"type":"string","readOnly":true,"minLength":1,"maxLength":20,"description":"Volume status","example":"IN_USE"},"created_at":{"readOnly":true,"type":"string","example":"2020-12-22T16:08:51.000Z","format":"date-time"},"updated_at":{"readOnly":true,"type":"string","example":"2020-12-22T16:08:51.000Z","format":"date-time"}},"$id":"#/components/schemas/Volume"},{"type":"object","properties":{"id":{"type":"string","format":"uuid","description":"Volume ID","example":"61FE67B3-B4F6-4FB5-AD09-3A89700FBF0D","readOnly":false,"maxLength":36,"minLength":1}}}]}},"$id":"#/components/schemas/DiskMapping"}},"network_interfaces":{"type":"array","items":{"type":"object","description":"Network Interface mapping","properties":{"id":{"type":"string","format":"uuid","description":"ID","example":"61FE67B3-B4F6-4FB5-AD09-3A89700FBF0D","readOnly":true,"maxLength":36,"minLength":1},"mac_address":{"type":"string","readOnly":true},"ip_address":{"type":"string","example":"10.0.0.1","maxLength":39,"minLength":1},"public_ip_address":{"type":"object","properties":{"id":{"type":"string","format":"uuid","description":"ID","example":"61FE67B3-B4F6-4FB5-AD09-3A89700FBF0D","readOnly":false,"maxLength":36,"minLength":1},"type":{"type":"string","description":"Public IP Adress Type","example":"standard"},"ip_address":{"type":"string","format":"ip","readOnly":true,"example":"179.190.33.254"}}},"network":{"type":"object","properties":{"id":{"type":"string","format":"uuid","description":"ID","example":"61FE67B3-B4F6-4FB5-AD09-3A89700FBF0D","readOnly":false,"maxLength":36,"minLength":1},"name":{"type":"string","minLength":1,"maxLength":50,"description":"network name","example":"my network","readOnly":true}}},"sub_network":{"type":"object","properties":{"id":{"type":"string","format":"uuid","description":"ID","example":"61FE67B3-B4F6-4FB5-AD09-3A89700FBF0D","readOnly":false,"maxLength":36,"minLength":1},"name":{"type":"string","minLength":1,"maxLength":50,"description":"sub network name","example":"private","readOnly":true}}}},"$id":"#/components/schemas/NetworkInterface"}},"metadata":{"type":"array","items":{"type":"object","properties":{"key":{"type":"string","minLength":1,"maxLength":255},"value":{"type":"string","minLength":1,"maxLength":255}}}},"security_groups":{"type":"array","description":"One or more security groups. Specify the name of the security groug.","items":{"type":"object","properties":{"id":{"type":"string"},"name":{"type":"string","readOnly":true}}},"example":[{"id":"ssh-only","name":"ssh"}]}},"$id":"#/components/schemas/Instance"}}}},"400":{"content":{"application/json":{"schema":{"items":{"type":"object","properties":{"details":{"type":"array","items":{"type":"object","properties":{"description":{"type":"string"},"field":{"type":"string"},"issue":{"type":"string"},"location":{"type":"string"},"value":{"type":"string"}}}},"errorCode":{"type":"string"},"links":{"type":"array","items":{"type":"object","properties":{"href":{"type":"string"}}}},"message":{"type":"string"}}},"type":"array","$id":"#/paths/DeleteInstance/responses/400"}}},"description":"Invalid request"},"401":{"content":{"application/json":{"schema":{"items":{"type":"object","properties":{"details":{"type":"array","items":{"type":"object","properties":{"description":{"type":"string"},"field":{"type":"string"},"issue":{"type":"string"},"location":{"type":"string"},"value":{"type":"string"}}}},"errorCode":{"type":"string"},"links":{"type":"array","items":{"type":"object","properties":{"href":{"type":"string"}}}},"message":{"type":"string"}}},"type":"array","$id":"#/paths/DeleteInstance/responses/401"}}},"description":"Not Authorized"},"403":{"content":{"application/json":{"schema":{"items":{"type":"object","properties":{"details":{"type":"array","items":{"type":"object","properties":{"description":{"type":"string"},"field":{"type":"string"},"issue":{"type":"string"},"location":{"type":"string"},"value":{"type":"string"}}}},"errorCode":{"type":"string"},"links":{"type":"array","items":{"type":"object","properties":{"href":{"type":"string"}}}},"message":{"type":"string"}}},"type":"array","$id":"#/paths/DeleteInstance/responses/403"}}},"description":"Forbidden"},"404":{"content":{"application/json":{"schema":{"items":{"type":"object","properties":{"details":{"type":"array","items":{"type":"object","properties":{"description":{"type":"string"},"field":{"type":"string"},"issue":{"type":"string"},"location":{"type":"string"},"value":{"type":"string"}}}},"errorCode":{"type":"string"},"links":{"type":"array","items":{"type":"object","properties":{"href":{"type":"string"}}}},"message":{"type":"string"}}},"type":"array","$id":"#/paths/DeleteInstance/responses/404"}}},"description":"Entity not found"},"422":{"content":{"application/json":{"schema":{"items":{"type":"object","properties":{"details":{"type":"array","items":{"type":"object","properties":{"description":{"type":"string"},"field":{"type":"string"},"issue":{"type":"string"},"location":{"type":"string"},"value":{"type":"string"}}}},"errorCode":{"type":"string"},"links":{"type":"array","items":{"type":"object","properties":{"href":{"type":"string"}}}},"message":{"type":"string"}}},"type":"array","$id":"#/paths/DeleteInstance/responses/422"}}},"description":"Unprocessable entity"},"500":{"content":{"application/json":{"schema":{"items":{"type":"object","properties":{"details":{"type":"array","items":{"type":"object","properties":{"description":{"type":"string"},"field":{"type":"string"},"issue":{"type":"string"},"location":{"type":"string"},"value":{"type":"string"}}}},"errorCode":{"type":"string"},"links":{"type":"array","items":{"type":"object","properties":{"href":{"type":"string"}}}},"message":{"type":"string"}}},"type":"array","$id":"#/paths/DeleteInstance/responses/500"}}},"description":"Internal server error"}}}},"/compute/v1alpha/projects/{project}/regions/{region}/instances":{"parameters":[{"name":"project","in":"path","required":true,"schema":{"type":"string","description":"project id","example":"meu-projeto-1","maxLength":100,"minLength":1,"$id":"#/paths/ComputeV1alphaProjects$projectRegions$regionInstances/parameters/project"}},{"name":"region","in":"path","required":true,"schema":{"type":"string","description":"region","example":"sa-east-1","maxLength":100,"minLength":1,"$id":"#/paths/ComputeV1alphaProjects$projectRegions$regionInstances/parameters/region"}}],"get":{"operationId":"ListInstances","tags":["instances"],"summary":"Retrives a Instances list","description":"Searches for any instance matching the given arguments","parameters":[{"in":"query","name":"name","schema":{"type":"string","minLength":3,"maxLength":150,"description":"instance name","example":"redis-a","$id":"#/paths/ListInstances/parameters/name"}},{"in":"query","name":"zone","schema":{"type":"string","example":"sa-east-1-a","description":"Availability zones","$id":"#/paths/ListInstances/parameters/zone"}},{"in":"query","name":"_offset","schema":{"type":"integer","minimum":0,"description":"Used for paging. Tells the position of the first record to be returned. Similar to the paging offset used in traditional databases.","example":0,"default":0,"$id":"#/paths/ListInstances/parameters/_offset"}},{"in":"query","name":"_limit","schema":{"type":"integer","minimum":1,"maximum":50,"description":"Used for paging. Tells how many records are to be returned.","example":50,"default":50,"$id":"#/paths/ListInstances/parameters/_limit"}}],"responses":{"200":{"description":"Instances search succeed","content":{"application/json":{"schema":{"type":"array","items":{"type":"object","description":"Represents an Instance resource.","properties":{"id":{"type":"string","format":"uuid","description":"ID","example":"61FE67B3-B4F6-4FB5-AD09-3A89700FBF0D","readOnly":true,"maxLength":36,"minLength":1},"name":{"type":"string","minLength":1,"maxLength":50,"description":"instance name","example":"apiserver-a"},"description":{"type":"string","minLength":0,"maxLength":255,"description":"instance description"},"type":{"type":"string","minLength":1,"maxLength":20,"description":"instance type","example":"mg1-large"},"zone":{"type":"string","minLength":1,"maxLength":20,"description":"Availability zones","example":"sa-east-1-a"},"tags":{"type":"array","items":{"type":"object","description":"Key Value Object","properties":{"key":{"type":"string","minLength":1,"maxLength":50},"value":{"type":"string","minLength":1,"maxLength":50}}},"description":"tags","example":[{"type":"CostCenter","value":"1"},{"type":"ClusterName","value":"apiserver-a"}]},"status":{"type":"string","readOnly":true,"minLength":1,"maxLength":20,"description":"Instance status","example":"OK"},"created_at":{"readOnly":true,"type":"string","example":"2020-12-22T16:08:51.000Z","format":"date-time"},"updated_at":{"readOnly":true,"type":"string","example":"2020-12-22T16:08:51.000Z","format":"date-time"},"hostname":{"type":"string","minLength":1,"maxLength":20,"description":"Specifies the hostname of the instance. The specified hostname must be RFC1035 compliant.","example":"apiserver-01"},"key_name":{"type":"string","minLength":1,"maxLength":20,"description":"Key pair name.","example":"ssh-key-01"},"image":{"type":"object","properties":{"id":{"type":"string","format":"uuid","description":"ID","example":"61FE67B3-B4F6-4FB5-AD09-3A89700FBF0D","readOnly":false,"maxLength":36,"minLength":1},"name":{"type":"string","readOnly":true,"example":"image-test"}}},"disk_mappings":{"type":"array","items":{"type":"object","description":"Instance Disk Mapping","properties":{"id":{"type":"string","format":"uuid","description":"ID","example":"61FE67B3-B4F6-4FB5-AD09-3A89700FBF0D","readOnly":true,"maxLength":36,"minLength":1},"device_name":{"type":"string","minLength":1,"maxLength":50,"description":"device name","example":"sda"},"delete_on_termination":{"type":"boolean","description":"Terminatie volume when the instance is deleted","example":false},"volume":{"oneOf":[{"type":"object","description":"Persistent Volume","properties":{"id":{"type":"string","format":"uuid","description":"Volume ID","example":"61FE67B3-B4F6-4FB5-AD09-3A89700FBF0D","readOnly":true,"maxLength":36,"minLength":1},"name":{"type":"string","minLength":1,"maxLength":50,"description":"volume name","example":"redis-a"},"size_gb":{"type":"integer","format":"int32","minimum":0,"maximum":1000000,"description":"Volume size un gibabytes","example":20},"type":{"type":"string","minLength":1,"maxLength":20,"description":"volume type","example":"ssd"},"zone":{"type":"string","minLength":1,"maxLength":20,"description":"Availability zones","example":"sa-east-1-a"},"tags":{"type":"array","items":{"type":"object","description":"Key Value Object","properties":{"key":{"type":"string","minLength":1,"maxLength":50},"value":{"type":"string","minLength":1,"maxLength":50}}},"description":"Volumes tags","example":[{"type":"CostCenter","value":"1"},{"type":"ClusterName","value":"redis-a"}]},"status":{"type":"string","readOnly":true,"minLength":1,"maxLength":20,"description":"Volume status","example":"IN_USE"},"created_at":{"readOnly":true,"type":"string","example":"2020-12-22T16:08:51.000Z","format":"date-time"},"updated_at":{"readOnly":true,"type":"string","example":"2020-12-22T16:08:51.000Z","format":"date-time"}},"$id":"#/components/schemas/Volume"},{"type":"object","properties":{"id":{"type":"string","format":"uuid","description":"Volume ID","example":"61FE67B3-B4F6-4FB5-AD09-3A89700FBF0D","readOnly":false,"maxLength":36,"minLength":1}}}]}},"$id":"#/components/schemas/DiskMapping"}},"network_interfaces":{"type":"array","items":{"type":"object","description":"Network Interface mapping","properties":{"id":{"type":"string","format":"uuid","description":"ID","example":"61FE67B3-B4F6-4FB5-AD09-3A89700FBF0D","readOnly":true,"maxLength":36,"minLength":1},"mac_address":{"type":"string","readOnly":true},"ip_address":{"type":"string","example":"10.0.0.1","maxLength":39,"minLength":1},"public_ip_address":{"type":"object","properties":{"id":{"type":"string","format":"uuid","description":"ID","example":"61FE67B3-B4F6-4FB5-AD09-3A89700FBF0D","readOnly":false,"maxLength":36,"minLength":1},"type":{"type":"string","description":"Public IP Adress Type","example":"standard"},"ip_address":{"type":"string","format":"ip","readOnly":true,"example":"179.190.33.254"}}},"network":{"type":"object","properties":{"id":{"type":"string","format":"uuid","description":"ID","example":"61FE67B3-B4F6-4FB5-AD09-3A89700FBF0D","readOnly":false,"maxLength":36,"minLength":1},"name":{"type":"string","minLength":1,"maxLength":50,"description":"network name","example":"my network","readOnly":true}}},"sub_network":{"type":"object","properties":{"id":{"type":"string","format":"uuid","description":"ID","example":"61FE67B3-B4F6-4FB5-AD09-3A89700FBF0D","readOnly":false,"maxLength":36,"minLength":1},"name":{"type":"string","minLength":1,"maxLength":50,"description":"sub network name","example":"private","readOnly":true}}}},"$id":"#/components/schemas/NetworkInterface"}},"metadata":{"type":"array","items":{"type":"object","properties":{"key":{"type":"string","minLength":1,"maxLength":255},"value":{"type":"string","minLength":1,"maxLength":255}}}},"security_groups":{"type":"array","description":"One or more security groups. Specify the name of the security groug.","items":{"type":"object","properties":{"id":{"type":"string"},"name":{"type":"string","readOnly":true}}},"example":[{"id":"ssh-only","name":"ssh"}]}},"$id":"#/components/schemas/Instance"},"$id":"#/paths/ListInstances/responses/200"}}}},"400":{"content":{"application/json":{"schema":{"items":{"type":"object","properties":{"details":{"type":"array","items":{"type":"object","properties":{"description":{"type":"string"},"field":{"type":"string"},"issue":{"type":"string"},"location":{"type":"string"},"value":{"type":"string"}}}},"errorCode":{"type":"string"},"links":{"type":"array","items":{"type":"object","properties":{"href":{"type":"string"}}}},"message":{"type":"string"}}},"type":"array","$id":"#/paths/ListInstances/responses/400"}}},"description":"Invalid request"},"401":{"content":{"application/json":{"schema":{"items":{"type":"object","properties":{"details":{"type":"array","items":{"type":"object","properties":{"description":{"type":"string"},"field":{"type":"string"},"issue":{"type":"string"},"location":{"type":"string"},"value":{"type":"string"}}}},"errorCode":{"type":"string"},"links":{"type":"array","items":{"type":"object","properties":{"href":{"type":"string"}}}},"message":{"type":"string"}}},"type":"array","$id":"#/paths/ListInstances/responses/401"}}},"description":"Not Authorized"},"403":{"content":{"application/json":{"schema":{"items":{"type":"object","properties":{"details":{"type":"array","items":{"type":"object","properties":{"description":{"type":"string"},"field":{"type":"string"},"issue":{"type":"string"},"location":{"type":"string"},"value":{"type":"string"}}}},"errorCode":{"type":"string"},"links":{"type":"array","items":{"type":"object","properties":{"href":{"type":"string"}}}},"message":{"type":"string"}}},"type":"array","$id":"#/paths/ListInstances/responses/403"}}},"description":"Forbidden"},"404":{"content":{"application/json":{"schema":{"items":{"type":"object","properties":{"details":{"type":"array","items":{"type":"object","properties":{"description":{"type":"string"},"field":{"type":"string"},"issue":{"type":"string"},"location":{"type":"string"},"value":{"type":"string"}}}},"errorCode":{"type":"string"},"links":{"type":"array","items":{"type":"object","properties":{"href":{"type":"string"}}}},"message":{"type":"string"}}},"type":"array","$id":"#/paths/ListInstances/responses/404"}}},"description":"Entity not found"},"422":{"content":{"application/json":{"schema":{"items":{"type":"object","properties":{"details":{"type":"array","items":{"type":"object","properties":{"description":{"type":"string"},"field":{"type":"string"},"issue":{"type":"string"},"location":{"type":"string"},"value":{"type":"string"}}}},"errorCode":{"type":"string"},"links":{"type":"array","items":{"type":"object","properties":{"href":{"type":"string"}}}},"message":{"type":"string"}}},"type":"array","$id":"#/paths/ListInstances/responses/422"}}},"description":"Unprocessable entity"},"500":{"content":{"application/json":{"schema":{"items":{"type":"object","properties":{"details":{"type":"array","items":{"type":"object","properties":{"description":{"type":"string"},"field":{"type":"string"},"issue":{"type":"string"},"location":{"type":"string"},"value":{"type":"string"}}}},"errorCode":{"type":"string"},"links":{"type":"array","items":{"type":"object","properties":{"href":{"type":"string"}}}},"message":{"type":"string"}}},"type":"array","$id":"#/paths/ListInstances/responses/500"}}},"description":"Internal server error"}}},"post":{"operationId":"CreateInstances","tags":["instances"],"summary":"Create new Instances","requestBody":{"required":true,"content":{"application/json":{"schema":{"type":"object","description":"Represents an Instance resource.","properties":{"id":{"type":"string","format":"uuid","description":"ID","example":"61FE67B3-B4F6-4FB5-AD09-3A89700FBF0D","readOnly":true,"maxLength":36,"minLength":1},"name":{"type":"string","minLength":1,"maxLength":50,"description":"instance name","example":"apiserver-a"},"description":{"type":"string","minLength":0,"maxLength":255,"description":"instance description"},"type":{"type":"string","minLength":1,"maxLength":20,"description":"instance type","example":"mg1-large"},"zone":{"type":"string","minLength":1,"maxLength":20,"description":"Availability zones","example":"sa-east-1-a"},"tags":{"type":"array","items":{"type":"object","description":"Key Value Object","properties":{"key":{"type":"string","minLength":1,"maxLength":50},"value":{"type":"string","minLength":1,"maxLength":50}}},"description":"tags","example":[{"type":"CostCenter","value":"1"},{"type":"ClusterName","value":"apiserver-a"}]},"status":{"type":"string","readOnly":true,"minLength":1,"maxLength":20,"description":"Instance status","example":"OK"},"created_at":{"readOnly":true,"type":"string","example":"2020-12-22T16:08:51.000Z","format":"date-time"},"updated_at":{"readOnly":true,"type":"string","example":"2020-12-22T16:08:51.000Z","format":"date-time"},"hostname":{"type":"string","minLength":1,"maxLength":20,"description":"Specifies the hostname of the instance. The specified hostname must be RFC1035 compliant.","example":"apiserver-01"},"key_name":{"type":"string","minLength":1,"maxLength":20,"description":"Key pair name.","example":"ssh-key-01"},"image":{"type":"object","properties":{"id":{"type":"string","format":"uuid","description":"ID","example":"61FE67B3-B4F6-4FB5-AD09-3A89700FBF0D","readOnly":false,"maxLength":36,"minLength":1},"name":{"type":"string","readOnly":true,"example":"image-test"}}},"disk_mappings":{"type":"array","items":{"type":"object","description":"Instance Disk Mapping","properties":{"id":{"type":"string","format":"uuid","description":"ID","example":"61FE67B3-B4F6-4FB5-AD09-3A89700FBF0D","readOnly":true,"maxLength":36,"minLength":1},"device_name":{"type":"string","minLength":1,"maxLength":50,"description":"device name","example":"sda"},"delete_on_termination":{"type":"boolean","description":"Terminatie volume when the instance is deleted","example":false},"volume":{"oneOf":[{"type":"object","description":"Persistent Volume","properties":{"id":{"type":"string","format":"uuid","description":"Volume ID","example":"61FE67B3-B4F6-4FB5-AD09-3A89700FBF0D","readOnly":true,"maxLength":36,"minLength":1},"name":{"type":"string","minLength":1,"maxLength":50,"description":"volume name","example":"redis-a"},"size_gb":{"type":"integer","format":"int32","minimum":0,"maximum":1000000,"description":"Volume size un gibabytes","example":20},"type":{"type":"string","minLength":1,"maxLength":20,"description":"volume type","example":"ssd"},"zone":{"type":"string","minLength":1,"maxLength":20,"description":"Availability zones","example":"sa-east-1-a"},"tags":{"type":"array","items":{"type":"object","description":"Key Value Object","properties":{"key":{"type":"string","minLength":1,"maxLength":50},"value":{"type":"string","minLength":1,"maxLength":50}}},"description":"Volumes tags","example":[{"type":"CostCenter","value":"1"},{"type":"ClusterName","value":"redis-a"}]},"status":{"type":"string","readOnly":true,"minLength":1,"maxLength":20,"description":"Volume status","example":"IN_USE"},"created_at":{"readOnly":true,"type":"string","example":"2020-12-22T16:08:51.000Z","format":"date-time"},"updated_at":{"readOnly":true,"type":"string","example":"2020-12-22T16:08:51.000Z","format":"date-time"}},"$id":"#/components/schemas/Volume"},{"type":"object","properties":{"id":{"type":"string","format":"uuid","description":"Volume ID","example":"61FE67B3-B4F6-4FB5-AD09-3A89700FBF0D","readOnly":false,"maxLength":36,"minLength":1}}}]}},"$id":"#/components/schemas/DiskMapping"}},"network_interfaces":{"type":"array","items":{"type":"object","description":"Network Interface mapping","properties":{"id":{"type":"string","format":"uuid","description":"ID","example":"61FE67B3-B4F6-4FB5-AD09-3A89700FBF0D","readOnly":true,"maxLength":36,"minLength":1},"mac_address":{"type":"string","readOnly":true},"ip_address":{"type":"string","example":"10.0.0.1","maxLength":39,"minLength":1},"public_ip_address":{"type":"object","properties":{"id":{"type":"string","format":"uuid","description":"ID","example":"61FE67B3-B4F6-4FB5-AD09-3A89700FBF0D","readOnly":false,"maxLength":36,"minLength":1},"type":{"type":"string","description":"Public IP Adress Type","example":"standard"},"ip_address":{"type":"string","format":"ip","readOnly":true,"example":"179.190.33.254"}}},"network":{"type":"object","properties":{"id":{"type":"string","format":"uuid","description":"ID","example":"61FE67B3-B4F6-4FB5-AD09-3A89700FBF0D","readOnly":false,"maxLength":36,"minLength":1},"name":{"type":"string","minLength":1,"maxLength":50,"description":"network name","example":"my network","readOnly":true}}},"sub_network":{"type":"object","properties":{"id":{"type":"string","format":"uuid","description":"ID","example":"61FE67B3-B4F6-4FB5-AD09-3A89700FBF0D","readOnly":false,"maxLength":36,"minLength":1},"name":{"type":"string","minLength":1,"maxLength":50,"description":"sub network name","example":"private","readOnly":true}}}},"$id":"#/components/schemas/NetworkInterface"}},"metadata":{"type":"array","items":{"type":"object","properties":{"key":{"type":"string","minLength":1,"maxLength":255},"value":{"type":"string","minLength":1,"maxLength":255}}}},"security_groups":{"type":"array","description":"One or more security groups. Specify the name of the security groug.","items":{"type":"object","properties":{"id":{"type":"string"},"name":{"type":"string","readOnly":true}}},"example":[{"id":"ssh-only","name":"ssh"}]}},"$id":"#/components/schemas/Instance"}}}},"responses":{"202":{"description":"Instance is being created asynchronously","content":{"application/json":{"schema":{"type":"object","description":"Represents an Instance resource.","properties":{"id":{"type":"string","format":"uuid","description":"ID","example":"61FE67B3-B4F6-4FB5-AD09-3A89700FBF0D","readOnly":true,"maxLength":36,"minLength":1},"name":{"type":"string","minLength":1,"maxLength":50,"description":"instance name","example":"apiserver-a"},"description":{"type":"string","minLength":0,"maxLength":255,"description":"instance description"},"type":{"type":"string","minLength":1,"maxLength":20,"description":"instance type","example":"mg1-large"},"zone":{"type":"string","minLength":1,"maxLength":20,"description":"Availability zones","example":"sa-east-1-a"},"tags":{"type":"array","items":{"type":"object","description":"Key Value Object","properties":{"key":{"type":"string","minLength":1,"maxLength":50},"value":{"type":"string","minLength":1,"maxLength":50}}},"description":"tags","example":[{"type":"CostCenter","value":"1"},{"type":"ClusterName","value":"apiserver-a"}]},"status":{"type":"string","readOnly":true,"minLength":1,"maxLength":20,"description":"Instance status","example":"OK"},"created_at":{"readOnly":true,"type":"string","example":"2020-12-22T16:08:51.000Z","format":"date-time"},"updated_at":{"readOnly":true,"type":"string","example":"2020-12-22T16:08:51.000Z","format":"date-time"},"hostname":{"type":"string","minLength":1,"maxLength":20,"description":"Specifies the hostname of the instance. The specified hostname must be RFC1035 compliant.","example":"apiserver-01"},"key_name":{"type":"string","minLength":1,"maxLength":20,"description":"Key pair name.","example":"ssh-key-01"},"image":{"type":"object","properties":{"id":{"type":"string","format":"uuid","description":"ID","example":"61FE67B3-B4F6-4FB5-AD09-3A89700FBF0D","readOnly":false,"maxLength":36,"minLength":1},"name":{"type":"string","readOnly":true,"example":"image-test"}}},"disk_mappings":{"type":"array","items":{"type":"object","description":"Instance Disk Mapping","properties":{"id":{"type":"string","format":"uuid","description":"ID","example":"61FE67B3-B4F6-4FB5-AD09-3A89700FBF0D","readOnly":true,"maxLength":36,"minLength":1},"device_name":{"type":"string","minLength":1,"maxLength":50,"description":"device name","example":"sda"},"delete_on_termination":{"type":"boolean","description":"Terminatie volume when the instance is deleted","example":false},"volume":{"oneOf":[{"type":"object","description":"Persistent Volume","properties":{"id":{"type":"string","format":"uuid","description":"Volume ID","example":"61FE67B3-B4F6-4FB5-AD09-3A89700FBF0D","readOnly":true,"maxLength":36,"minLength":1},"name":{"type":"string","minLength":1,"maxLength":50,"description":"volume name","example":"redis-a"},"size_gb":{"type":"integer","format":"int32","minimum":0,"maximum":1000000,"description":"Volume size un gibabytes","example":20},"type":{"type":"string","minLength":1,"maxLength":20,"description":"volume type","example":"ssd"},"zone":{"type":"string","minLength":1,"maxLength":20,"description":"Availability zones","example":"sa-east-1-a"},"tags":{"type":"array","items":{"type":"object","description":"Key Value Object","properties":{"key":{"type":"string","minLength":1,"maxLength":50},"value":{"type":"string","minLength":1,"maxLength":50}}},"description":"Volumes tags","example":[{"type":"CostCenter","value":"1"},{"type":"ClusterName","value":"redis-a"}]},"status":{"type":"string","readOnly":true,"minLength":1,"maxLength":20,"description":"Volume status","example":"IN_USE"},"created_at":{"readOnly":true,"type":"string","example":"2020-12-22T16:08:51.000Z","format":"date-time"},"updated_at":{"readOnly":true,"type":"string","example":"2020-12-22T16:08:51.000Z","format":"date-time"}},"$id":"#/components/schemas/Volume"},{"type":"object","properties":{"id":{"type":"string","format":"uuid","description":"Volume ID","example":"61FE67B3-B4F6-4FB5-AD09-3A89700FBF0D","readOnly":false,"maxLength":36,"minLength":1}}}]}},"$id":"#/components/schemas/DiskMapping"}},"network_interfaces":{"type":"array","items":{"type":"object","description":"Network Interface mapping","properties":{"id":{"type":"string","format":"uuid","description":"ID","example":"61FE67B3-B4F6-4FB5-AD09-3A89700FBF0D","readOnly":true,"maxLength":36,"minLength":1},"mac_address":{"type":"string","readOnly":true},"ip_address":{"type":"string","example":"10.0.0.1","maxLength":39,"minLength":1},"public_ip_address":{"type":"object","properties":{"id":{"type":"string","format":"uuid","description":"ID","example":"61FE67B3-B4F6-4FB5-AD09-3A89700FBF0D","readOnly":false,"maxLength":36,"minLength":1},"type":{"type":"string","description":"Public IP Adress Type","example":"standard"},"ip_address":{"type":"string","format":"ip","readOnly":true,"example":"179.190.33.254"}}},"network":{"type":"object","properties":{"id":{"type":"string","format":"uuid","description":"ID","example":"61FE67B3-B4F6-4FB5-AD09-3A89700FBF0D","readOnly":false,"maxLength":36,"minLength":1},"name":{"type":"string","minLength":1,"maxLength":50,"description":"network name","example":"my network","readOnly":true}}},"sub_network":{"type":"object","properties":{"id":{"type":"string","format":"uuid","description":"ID","example":"61FE67B3-B4F6-4FB5-AD09-3A89700FBF0D","readOnly":false,"maxLength":36,"minLength":1},"name":{"type":"string","minLength":1,"maxLength":50,"description":"sub network name","example":"private","readOnly":true}}}},"$id":"#/components/schemas/NetworkInterface"}},"metadata":{"type":"array","items":{"type":"object","properties":{"key":{"type":"string","minLength":1,"maxLength":255},"value":{"type":"string","minLength":1,"maxLength":255}}}},"security_groups":{"type":"array","description":"One or more security groups. Specify the name of the security groug.","items":{"type":"object","properties":{"id":{"type":"string"},"name":{"type":"string","readOnly":true}}},"example":[{"id":"ssh-only","name":"ssh"}]}},"$id":"#/components/schemas/Instance"}}}},"400":{"content":{"application/json":{"schema":{"items":{"type":"object","properties":{"details":{"type":"array","items":{"type":"object","properties":{"description":{"type":"string"},"field":{"type":"string"},"issue":{"type":"string"},"location":{"type":"string"},"value":{"type":"string"}}}},"errorCode":{"type":"string"},"links":{"type":"array","items":{"type":"object","properties":{"href":{"type":"string"}}}},"message":{"type":"string"}}},"type":"array","$id":"#/paths/CreateInstances/responses/400"}}},"description":"Invalid request"},"401":{"content":{"application/json":{"schema":{"items":{"type":"object","properties":{"details":{"type":"array","items":{"type":"object","properties":{"description":{"type":"string"},"field":{"type":"string"},"issue":{"type":"string"},"location":{"type":"string"},"value":{"type":"string"}}}},"errorCode":{"type":"string"},"links":{"type":"array","items":{"type":"object","properties":{"href":{"type":"string"}}}},"message":{"type":"string"}}},"type":"array","$id":"#/paths/CreateInstances/responses/401"}}},"description":"Not Authorized"},"403":{"content":{"application/json":{"schema":{"items":{"type":"object","properties":{"details":{"type":"array","items":{"type":"object","properties":{"description":{"type":"string"},"field":{"type":"string"},"issue":{"type":"string"},"location":{"type":"string"},"value":{"type":"string"}}}},"errorCode":{"type":"string"},"links":{"type":"array","items":{"type":"object","properties":{"href":{"type":"string"}}}},"message":{"type":"string"}}},"type":"array","$id":"#/paths/CreateInstances/responses/403"}}},"description":"Forbidden"},"404":{"content":{"application/json":{"schema":{"items":{"type":"object","properties":{"details":{"type":"array","items":{"type":"object","properties":{"description":{"type":"string"},"field":{"type":"string"},"issue":{"type":"string"},"location":{"type":"string"},"value":{"type":"string"}}}},"errorCode":{"type":"string"},"links":{"type":"array","items":{"type":"object","properties":{"href":{"type":"string"}}}},"message":{"type":"string"}}},"type":"array","$id":"#/paths/CreateInstances/responses/404"}}},"description":"Entity not found"},"422":{"content":{"application/json":{"schema":{"items":{"type":"object","properties":{"details":{"type":"array","items":{"type":"object","properties":{"description":{"type":"string"},"field":{"type":"string"},"issue":{"type":"string"},"location":{"type":"string"},"value":{"type":"string"}}}},"errorCode":{"type":"string"},"links":{"type":"array","items":{"type":"object","properties":{"href":{"type":"string"}}}},"message":{"type":"string"}}},"type":"array","$id":"#/paths/CreateInstances/responses/422"}}},"description":"Unprocessable entity"},"500":{"content":{"application/json":{"schema":{"items":{"type":"object","properties":{"details":{"type":"array","items":{"type":"object","properties":{"description":{"type":"string"},"field":{"type":"string"},"issue":{"type":"string"},"location":{"type":"string"},"value":{"type":"string"}}}},"errorCode":{"type":"string"},"links":{"type":"array","items":{"type":"object","properties":{"href":{"type":"string"}}}},"message":{"type":"string"}}},"type":"array","$id":"#/paths/CreateInstances/responses/500"}}},"description":"Internal server error"}}}}},"components":{"securitySchemes":{"api_key":{"type":"apiKey","name":"X-Api-Key","in":"header"}},"schemas":{"Instance":{"type":"object","description":"Represents an Instance resource.","properties":{"id":{"type":"string","format":"uuid","description":"ID","example":"61FE67B3-B4F6-4FB5-AD09-3A89700FBF0D","readOnly":true,"maxLength":36,"minLength":1},"name":{"type":"string","minLength":1,"maxLength":50,"description":"instance name","example":"apiserver-a"},"description":{"type":"string","minLength":0,"maxLength":255,"description":"instance description"},"type":{"type":"string","minLength":1,"maxLength":20,"description":"instance type","example":"mg1-large"},"zone":{"type":"string","minLength":1,"maxLength":20,"description":"Availability zones","example":"sa-east-1-a"},"tags":{"type":"array","items":{"type":"object","description":"Key Value Object","properties":{"key":{"type":"string","minLength":1,"maxLength":50},"value":{"type":"string","minLength":1,"maxLength":50}}},"description":"tags","example":[{"type":"CostCenter","value":"1"},{"type":"ClusterName","value":"apiserver-a"}]},"status":{"type":"string","readOnly":true,"minLength":1,"maxLength":20,"description":"Instance status","example":"OK"},"created_at":{"readOnly":true,"type":"string","example":"2020-12-22T16:08:51.000Z","format":"date-time"},"updated_at":{"readOnly":true,"type":"string","example":"2020-12-22T16:08:51.000Z","format":"date-time"},"hostname":{"type":"string","minLength":1,"maxLength":20,"description":"Specifies the hostname of the instance. The specified hostname must be RFC1035 compliant.","example":"apiserver-01"},"key_name":{"type":"string","minLength":1,"maxLength":20,"description":"Key pair name.","example":"ssh-key-01"},"image":{"type":"object","properties":{"id":{"type":"string","format":"uuid","description":"ID","example":"61FE67B3-B4F6-4FB5-AD09-3A89700FBF0D","readOnly":false,"maxLength":36,"minLength":1},"name":{"type":"string","readOnly":true,"example":"image-test"}}},"disk_mappings":{"type":"array","items":{"type":"object","description":"Instance Disk Mapping","properties":{"id":{"type":"string","format":"uuid","description":"ID","example":"61FE67B3-B4F6-4FB5-AD09-3A89700FBF0D","readOnly":true,"maxLength":36,"minLength":1},"device_name":{"type":"string","minLength":1,"maxLength":50,"description":"device name","example":"sda"},"delete_on_termination":{"type":"boolean","description":"Terminatie volume when the instance is deleted","example":false},"volume":{"oneOf":[{"type":"object","description":"Persistent Volume","properties":{"id":{"type":"string","format":"uuid","description":"Volume ID","example":"61FE67B3-B4F6-4FB5-AD09-3A89700FBF0D","readOnly":true,"maxLength":36,"minLength":1},"name":{"type":"string","minLength":1,"maxLength":50,"description":"volume name","example":"redis-a"},"size_gb":{"type":"integer","format":"int32","minimum":0,"maximum":1000000,"description":"Volume size un gibabytes","example":20},"type":{"type":"string","minLength":1,"maxLength":20,"description":"volume type","example":"ssd"},"zone":{"type":"string","minLength":1,"maxLength":20,"description":"Availability zones","example":"sa-east-1-a"},"tags":{"type":"array","items":{"type":"object","description":"Key Value Object","properties":{"key":{"type":"string","minLength":1,"maxLength":50},"value":{"type":"string","minLength":1,"maxLength":50}}},"description":"Volumes tags","example":[{"type":"CostCenter","value":"1"},{"type":"ClusterName","value":"redis-a"}]},"status":{"type":"string","readOnly":true,"minLength":1,"maxLength":20,"description":"Volume status","example":"IN_USE"},"created_at":{"readOnly":true,"type":"string","example":"2020-12-22T16:08:51.000Z","format":"date-time"},"updated_at":{"readOnly":true,"type":"string","example":"2020-12-22T16:08:51.000Z","format":"date-time"}},"$id":"#/components/schemas/Volume"},{"type":"object","properties":{"id":{"type":"string","format":"uuid","description":"Volume ID","example":"61FE67B3-B4F6-4FB5-AD09-3A89700FBF0D","readOnly":false,"maxLength":36,"minLength":1}}}]}},"$id":"#/components/schemas/DiskMapping"}},"network_interfaces":{"type":"array","items":{"type":"object","description":"Network Interface mapping","properties":{"id":{"type":"string","format":"uuid","description":"ID","example":"61FE67B3-B4F6-4FB5-AD09-3A89700FBF0D","readOnly":true,"maxLength":36,"minLength":1},"mac_address":{"type":"string","readOnly":true},"ip_address":{"type":"string","example":"10.0.0.1","maxLength":39,"minLength":1},"public_ip_address":{"type":"object","properties":{"id":{"type":"string","format":"uuid","description":"ID","example":"61FE67B3-B4F6-4FB5-AD09-3A89700FBF0D","readOnly":false,"maxLength":36,"minLength":1},"type":{"type":"string","description":"Public IP Adress Type","example":"standard"},"ip_address":{"type":"string","format":"ip","readOnly":true,"example":"179.190.33.254"}}},"network":{"type":"object","properties":{"id":{"type":"string","format":"uuid","description":"ID","example":"61FE67B3-B4F6-4FB5-AD09-3A89700FBF0D","readOnly":false,"maxLength":36,"minLength":1},"name":{"type":"string","minLength":1,"maxLength":50,"description":"network name","example":"my network","readOnly":true}}},"sub_network":{"type":"object","properties":{"id":{"type":"string","format":"uuid","description":"ID","example":"61FE67B3-B4F6-4FB5-AD09-3A89700FBF0D","readOnly":false,"maxLength":36,"minLength":1},"name":{"type":"string","minLength":1,"maxLength":50,"description":"sub network name","example":"private","readOnly":true}}}},"$id":"#/components/schemas/NetworkInterface"}},"metadata":{"type":"array","items":{"type":"object","properties":{"key":{"type":"string","minLength":1,"maxLength":255},"value":{"type":"string","minLength":1,"maxLength":255}}}},"security_groups":{"type":"array","description":"One or more security groups. Specify the name of the security groug.","items":{"type":"object","properties":{"id":{"type":"string"},"name":{"type":"string","readOnly":true}}},"example":[{"id":"ssh-only","name":"ssh"}]}},"$id":"#/components/schemas/Instance"},"Volume":{"type":"object","description":"Persistent Volume","properties":{"id":{"type":"string","format":"uuid","description":"Volume ID","example":"61FE67B3-B4F6-4FB5-AD09-3A89700FBF0D","readOnly":true,"maxLength":36,"minLength":1},"name":{"type":"string","minLength":1,"maxLength":50,"description":"volume name","example":"redis-a"},"size_gb":{"type":"integer","format":"int32","minimum":0,"maximum":1000000,"description":"Volume size un gibabytes","example":20},"type":{"type":"string","minLength":1,"maxLength":20,"description":"volume type","example":"ssd"},"zone":{"type":"string","minLength":1,"maxLength":20,"description":"Availability zones","example":"sa-east-1-a"},"tags":{"type":"array","items":{"type":"object","description":"Key Value Object","properties":{"key":{"type":"string","minLength":1,"maxLength":50},"value":{"type":"string","minLength":1,"maxLength":50}}},"description":"Volumes tags","example":[{"type":"CostCenter","value":"1"},{"type":"ClusterName","value":"redis-a"}]},"status":{"type":"string","readOnly":true,"minLength":1,"maxLength":20,"description":"Volume status","example":"IN_USE"},"created_at":{"readOnly":true,"type":"string","example":"2020-12-22T16:08:51.000Z","format":"date-time"},"updated_at":{"readOnly":true,"type":"string","example":"2020-12-22T16:08:51.000Z","format":"date-time"}},"$id":"#/components/schemas/Volume"},"DiskMapping":{"type":"object","description":"Instance Disk Mapping","properties":{"id":{"type":"string","format":"uuid","description":"ID","example":"61FE67B3-B4F6-4FB5-AD09-3A89700FBF0D","readOnly":true,"maxLength":36,"minLength":1},"device_name":{"type":"string","minLength":1,"maxLength":50,"description":"device name","example":"sda"},"delete_on_termination":{"type":"boolean","description":"Terminatie volume when the instance is deleted","example":false},"volume":{"oneOf":[{"type":"object","description":"Persistent Volume","properties":{"id":{"type":"string","format":"uuid","description":"Volume ID","example":"61FE67B3-B4F6-4FB5-AD09-3A89700FBF0D","readOnly":true,"maxLength":36,"minLength":1},"name":{"type":"string","minLength":1,"maxLength":50,"description":"volume name","example":"redis-a"},"size_gb":{"type":"integer","format":"int32","minimum":0,"maximum":1000000,"description":"Volume size un gibabytes","example":20},"type":{"type":"string","minLength":1,"maxLength":20,"description":"volume type","example":"ssd"},"zone":{"type":"string","minLength":1,"maxLength":20,"description":"Availability zones","example":"sa-east-1-a"},"tags":{"type":"array","items":{"type":"object","description":"Key Value Object","properties":{"key":{"type":"string","minLength":1,"maxLength":50},"value":{"type":"string","minLength":1,"maxLength":50}}},"description":"Volumes tags","example":[{"type":"CostCenter","value":"1"},{"type":"ClusterName","value":"redis-a"}]},"status":{"type":"string","readOnly":true,"minLength":1,"maxLength":20,"description":"Volume status","example":"IN_USE"},"created_at":{"readOnly":true,"type":"string","example":"2020-12-22T16:08:51.000Z","format":"date-time"},"updated_at":{"readOnly":true,"type":"string","example":"2020-12-22T16:08:51.000Z","format":"date-time"}},"$id":"#/components/schemas/Volume"},{"type":"object","properties":{"id":{"type":"string","format":"uuid","description":"Volume ID","example":"61FE67B3-B4F6-4FB5-AD09-3A89700FBF0D","readOnly":false,"maxLength":36,"minLength":1}}}]}},"$id":"#/components/schemas/DiskMapping"},"NetworkInterface":{"type":"object","description":"Network Interface mapping","properties":{"id":{"type":"string","format":"uuid","description":"ID","example":"61FE67B3-B4F6-4FB5-AD09-3A89700FBF0D","readOnly":true,"maxLength":36,"minLength":1},"mac_address":{"type":"string","readOnly":true},"ip_address":{"type":"string","example":"10.0.0.1","maxLength":39,"minLength":1},"public_ip_address":{"type":"object","properties":{"id":{"type":"string","format":"uuid","description":"ID","example":"61FE67B3-B4F6-4FB5-AD09-3A89700FBF0D","readOnly":false,"maxLength":36,"minLength":1},"type":{"type":"string","description":"Public IP Adress Type","example":"standard"},"ip_address":{"type":"string","format":"ip","readOnly":true,"example":"179.190.33.254"}}},"network":{"type":"object","properties":{"id":{"type":"string","format":"uuid","description":"ID","example":"61FE67B3-B4F6-4FB5-AD09-3A89700FBF0D","readOnly":false,"maxLength":36,"minLength":1},"name":{"type":"string","minLength":1,"maxLength":50,"description":"network name","example":"my network","readOnly":true}}},"sub_network":{"type":"object","properties":{"id":{"type":"string","format":"uuid","description":"ID","example":"61FE67B3-B4F6-4FB5-AD09-3A89700FBF0D","readOnly":false,"maxLength":36,"minLength":1},"name":{"type":"string","minLength":1,"maxLength":50,"description":"sub network name","example":"private","readOnly":true}}}},"$id":"#/components/schemas/NetworkInterface"}}}}
		`) as Document, axiosConfigDefaults: config })
 return await api.init<Client>()
}