import { MissingParamError } from "../errors/errorHandler.js"
import { getCollection } from "../utils/getCollection.js"
import { log } from "console"
export  interface GetDataOptions {
    where: any,
    limit: number
}
export  interface GetDataProps  {
    collection: string
    options?: GetDataOptions

}

export async function getData(params : GetDataProps): Promise<any> {
    if(!params.collection){
        throw new MissingParamError("collection")
    }

    const collection = await getCollection(params.collection)
    return collection;
}