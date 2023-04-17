export interface GetDataOptions {
    where?: any;
    limit?: number;
}
export interface GetDataProps extends GetDataOptions {
    collection: string;
}
/**
 * ### get()
 * An asyncronous json-base api to get data from database.json
 *
 * @param params.collection A collection to get data from
 * @param params.where  A where clause like SQL's WHERE , (optional)
 * @param params.limit A Limit of record to retreive , (optional)
 * @example
 * ```
 * import { get } from 'json-base'
 * (async function(){
 *      const aUsersWithId2  =  await get({
 *              collection : "users",
 *              where : {
 *                    id : 2
 *                  },
 *              limit :  1
 *          })
 * }())
 * ```
 */
export declare function get(params: GetDataProps): Promise<any>;
