import { getData } from "./scripts/getData.js";

(async function(){
    const data  =  await getData({collection : "people"})
    console.log(data)
}())