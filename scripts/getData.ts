import { MissingParamError, NotFoundError } from "../errors/errorHandler.js"
import { getCollection } from "../utils/getCollection.js"
export  interface GetDataOptions {
    where: any,
    limit?: number
}
export  interface GetDataProps extends GetDataOptions { 
    collection: string
}

export async function getData(params : GetDataProps): Promise<any> {
    if(!params.collection){
        throw new MissingParamError("collection")
    }
    const collection = await getCollection(params.collection)
    if(params){
        const where_data   = Object.entries(params.where)
        for(let i  : number = 0 ; i  < where_data.length ; i++){
         const doc : any  =  collection.find((collection :  any) => collection[`${where_data[i][0]}`] == `${where_data[i][1]}`)
            if(doc)
                return doc
            else
                return new NotFoundError(`Datum with '${where_data[i][0]}' set to '${where_data[i][1]}' was not found in '${params.collection}' Collection`)
        } 
    }else{
        return collection
    }
}