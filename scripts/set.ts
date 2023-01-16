import { CollectionNotFoundError, DuplicationError, MissingParamError, NotFoundError } from "../errors/errorHandler.js";
import { getJSONDb } from "../utils/getJSONDb.js";
import { setJSONDb } from "../utils/setJSONDb.js";

interface  SetDataProps  {
    collection : string
    where : any ,
    data : any
}

export async function set(params: SetDataProps) {
    try {
        
        if(!params.collection || !params.where || !params.data ){
            throw new MissingParamError("Some requiered parameters for the set function was not added")
        }
        
        // const collection =  await getCollection(params.collection)
        const where_clause = Object.entries(params.where)
        const jsonDB :  any  = JSON.parse(await getJSONDb())
        const coll = jsonDB['db'][`${params.collection}`]
        if(!coll)
            throw new CollectionNotFoundError(`${params.collection}`)
        const datum  = coll.filter(( collection : any) =>  collection[`${where_clause[0][0]}`] == `${where_clause[0][1]}`)
        if(!datum){
            throw new NotFoundError(`Datum with '${where_clause[0][0]}' set to '${where_clause[0][1]}' was not found in '${params.collection}' Collection`)
        }
        if(datum.length > 1)
        {
            throw new DuplicationError(`Found 2 elements with the same '${where_clause[0][0]}' set to '${where_clause[0][1]}'`)
        }
        
        const data_clause = Object.entries(params.data)
        
        const document =  datum[0] ;
        for(let i : number = 0 ; i <  data_clause.length ; i++){
            document[`${data_clause[i][0]}`] = `${data_clause[i][1]}`
        }
        setJSONDb(JSON.stringify(jsonDB))
        return document
    } catch (err : any) {
        throw new Error(err.message)
    }

    
}