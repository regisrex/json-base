interface AddDataProps {
    collection: string;
    data: {};
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
export declare function add(params: AddDataProps): Promise<any>;
export {};
