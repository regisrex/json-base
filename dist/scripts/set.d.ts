interface SetDataProps {
    collection: string;
    where: any;
    data: any;
}
/**
 * ### set()
 *  An asynchronous json-base api for updating data in database.json
 * @param params.collection The collection where the record to be updated is located,
 * @param params.where An object with a key and a value that uniquely identifys the record
 * @param params.data An object that contains updated data
 * @returns Promise<void>
 * @example
 * ```
 *     import { set } from 'json-base'
 *     await set({
        collection : "users",
        where : {
            username : "leerob"
        },
        data : {
            email : "leerobin@gmail.com"
        }
    })
 * ```
 */
export declare function set(params: SetDataProps): Promise<void>;
export {};
