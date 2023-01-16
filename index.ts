import { getData } from "./scripts/getData.js";

(async function () {
    const data = await getData({
        collection: "users",
        where : {
            id : 1
        },
        limit : 1
    }
    )
    console.log(data)
}())