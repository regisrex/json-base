// import { get } from "./scripts/get.js";
import { set } from "./scripts/set.js";
// import { log } from "console";
(async function () {
    // const data = await get({
    //     collection: "users",
    //     where : {
    //         id : 1
    //     },
    //     limit : 1
    // }
    // )
    // console.log( data)

     await set({
        collection : "users" ,
        where : {
            username : "leerob"
        },
        data : {
            email : 'leerob@gmail.com',
            password : '123456'
        }
    })

    // log(user)
}())