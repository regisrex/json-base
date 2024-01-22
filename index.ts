
import add from './scripts/add.js'
import del from './scripts/del.js'
import delAll from './scripts/delAll.js'
import get from './scripts/get.js'
import set from './scripts/set.js'


/**
 * # 📦JSON-BASE 
 * **a lightweight odm for json file inspired by prisma**
 * 
 * 
 * Use json file as your database on the backend, json-base create the database json file for you and also provides you with a lightweight ORM to perform transactions on your database.
 * @repository https://github.com/regisrex/json-base
 * @license MIT
 * @version 0.1.6
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
 * 
 * @author  Regis NDIZIHIWE <https://regisndizihiwe.me>
 */
export default {
    add,
    del,
    get,
    set,
    delAll
}

// export * from './scripts/delAll.js'