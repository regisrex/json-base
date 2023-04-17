interface DeleteParams {
    collection: string;
    where: {};
}
/**
 * ### del
 *  An asynchronous json-base api for deleting data from database.json
 * @async
 * @param params.collection A collectio to delete data from
 * @param params.where An object that provides a unique key and value of the record to be deleted
 * @returns Promise
 * @example
 * ```
 * import { del } from 'json-base'
 *
 * (async function(){
 *      await del({
 *          collection  : "posts",
 *          where : {
 *                 id : 1
 *              }
 *      })
 * }())
 * ```
 */
export declare function del(params: DeleteParams): Promise<void>;
export {};
