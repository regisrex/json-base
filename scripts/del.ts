import { CollectionNotFoundError, MissingParamError } from "../errors/errorHandler.js"
import { getJSONDb } from "../utils/getJSONDb.js"
import { setJSONDb } from "../utils/setJSONDb.js"
interface DeleteParams {
    collection: string
    where: {}
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
export default async function del(params: DeleteParams): Promise<void> {
    try {
        const where_clause = Object.entries(params.where)
        const jsonDB = JSON.parse(await getJSONDb())

        if (!params.collection)
            throw new MissingParamError('collection')
        if (!params.where)
            throw new MissingParamError('where clause')
        const coll: {}[] = jsonDB['db'][`${params.collection}`]
        if (!coll)
            throw new CollectionNotFoundError(`${params.collection}`)
        const index = coll.indexOf(coll.find((rec: any) => rec[`${where_clause[0][0]}`] == `${where_clause[0][1]}`) as {})
        coll.splice(index, 1);

        setJSONDb(JSON.stringify(jsonDB))
    } catch (error: any) {
        throw new Error(error.message)
    }
}