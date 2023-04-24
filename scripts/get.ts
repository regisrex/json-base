import { MissingParamError, NotFoundError } from "../errors/errorHandler.js"
import { getCollection } from "../utils/getCollection.js"

export interface GetDataOptions {
    where?: any,
    limit?: number,
    ls?: any,
    gt?: any
}

export interface GetDataProps extends GetDataOptions {
    collection: string
}

/**
 * ### get()
 * An asynchronous json-base API to get data from database.json
 *  
 * @param params.collection A collection to get data from 
 * @param params.where A where clause like SQL's WHERE, (optional)
 * @param params.limit A limit of records to retrieve, (optional)
 * @param params.ls A filter to retrieve records where the specified field is less than or equal to the specified value, (optional)
 * @param params.gt A filter to retrieve records where the specified field is greater than or equal to the specified value, (optional)
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
 *              ls: 5
 *              gt: 2
 *          })
 * }())
 * ```
 */
export async function get(params: GetDataProps): Promise<any> {
    if (!params.collection) {
        throw new MissingParamError("collection")
    }
    const collection = await getCollection(params.collection)

    let data_to_return: any = collection

    if (params.where) {
        const where_data = Object.entries(params.where)
        for (let i: number = 0; i < where_data.length; i++) {
            const data: any = data_to_return.filter((collection: any) => collection[`${where_data[i][0]}`] == `${where_data[i][1]}`)
            if (data.length > 0) {
                data_to_return = data
            } else {
                throw new NotFoundError(`Datum with '${where_data[i][0]}' set to '${where_data[i][1]}' was not found in '${params.collection}' Collection`)
            }
        }
    }

    if (params.ls) {
        const ls_data = Object.entries(params.ls)
        for (let i: number = 0; i < ls_data.length; i++) {
            data_to_return = data_to_return.filter((collection: any) => collection[`${ls_data[i][0]}`] <= `${ls_data[i][1]}`)
        }
    }

    if (params.gt) {
        const gt_data = Object.entries(params.gt)
        for (let i: number = 0; i < gt_data.length; i++) {
            data_to_return = data_to_return.filter((collection: any) => collection[`${gt_data[i][0]}`] >= `${gt_data[i][1]}`)
        }
    }

    if (params.limit) {
        data_to_return = (data_to_return as any[]).slice(0, params.limit)
    }

    return data_to_return
}
