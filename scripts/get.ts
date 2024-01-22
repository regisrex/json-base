import { MissingParamError, NotFoundError } from "../errors/errorHandler.js";
import { getCollection } from "../utils/getCollection.js";

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
 *                    id : { lt: 10, gt: 3 }
 *                  },
 *              limit :  1
 *          })
 * }())
 * ```
 */
export default async function get(params: GetDataProps): Promise<any> {
  let data_to_return: any;
  if (!params.collection) {
    throw new MissingParamError("collection");
  }
  const collection = await getCollection(params.collection);
  data_to_return = collection;
  if (params.where) {
    const where_data = Object.entries(params.where);
    for (let i: number = 0; i < where_data.length; i++) {
      const [field, filter]: [any, any] = where_data[i];
      if (typeof filter === "object") {
        const filterEntries = Object.entries(filter);
        let data: any = data_to_return;
        for (let j = 0; j < filterEntries.length; j++) {
          const [operator, value] = filterEntries[j];
          switch (operator) {
            case "lt":
              data = data.filter(
                (item: any) => item[field] < Number(value)
              );
              break;
            case "lte":
              data = data.filter(
                (item: any) => item[field] <= Number(value)
              );
              break;
            case "gt":
              data = data.filter(
                (item: any) => item[field] > Number(value)
              );
              break;
            case "gte":
              data = data.filter(
                (item: any) => item[field] >= Number(value)
              );
              break;
            case "eq":
              data = data.filter(
                (item: any) => item[field] === Number(value)
              );
              break;
            default:
              throw new Error(`Operator '${operator}' not supported.`);
          }
        }
        data_to_return = data;
      } else {
        const data: any = data_to_return.filter(
          (collection: any) => collection[`${field}`] == `${filter}`
        );
        if (data) data_to_return = data;
        else
          throw new NotFoundError(
            `Datum with '${field}' set to '${filter}' was not found in '${params.collection}' Collection`
          );
      }
    }
  }
  if (params.limit) {
    if (data_to_return && data_to_return.length != 1)
      data_to_return = (data_to_return as any[]).slice(0, params.limit);
  }

  return data_to_return;
}
