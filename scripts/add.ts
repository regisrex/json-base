import { CollectionNotFoundError, DuplicationError, MissingParamError } from "../errors/errorHandler.js"
import { getJSONDb } from "../utils/getJSONDb.js"
import { setJSONDb } from "../utils/setJSONDb.js"
interface AddDataProps {
    collection: string,
    data: {}
}
export async function add(params: AddDataProps) : Promise<void> {
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
    } catch (err: any) {
        throw new Error(err.message)
    }
}