import { CollectionNotFoundError, DuplicationError, MissingParamError } from "../errors/errorHandler.js"
import { getJSONDb } from "../utils/getJSONDb.js"
import { setJSONDb } from "../utils/setJSONDb.js"

interface AddDataProps {
    collection: string,
    data: {}
}

/**
 * #### add()
 *  An asyncronous json-base api to add data to a collection to jsondb
 * @async
 * @param params.collection Collection where the data will be added to
 * @param params.data Data to add to the collection
 * @returns  Promise
 * @example 
 * ```
 *  import  { add } from 'json-base'
 *  (async function(){
 *      await add({
        collection : "posts",
        data : {
            id  : 1 ,
            userId : 1 ,
            photo :  "https://linkto.img",
            caption : "The quick brown fox"
        }
    })
 * }())
 * ```
 */
export default async function add(params: AddDataProps) : Promise<any> {
    try {
        const jsonDB: {} | any = JSON.parse(await getJSONDb())

        if (!params.collection)
            throw new MissingParamError(`collection`)
        if (!params.data)
            throw new MissingParamError(`data`)
        const coll: {}[] = jsonDB['db'][`${params.collection}`]
        if (!coll)
            throw new CollectionNotFoundError(`${params.collection}`)
            if(!coll.find(doc => doc == params.data))
                 coll.push(params.data)
            else throw new DuplicationError()
        setJSONDb(JSON.stringify(jsonDB))
        return params.data
    } catch (err: any) {
        throw new Error(err.message)
    }
}