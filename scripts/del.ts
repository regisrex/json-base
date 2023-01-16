import { CollectionNotFoundError, MissingParamError } from "../errors/errorHandler.js"
import { getJSONDb } from "../utils/getJSONDb.js"
import { setJSONDb } from "../utils/setJSONDb.js"
interface DeleteParams {
    collection: string
    where: {}
}
export async function del(params: DeleteParams): Promise<void> {
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