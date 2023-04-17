import { getJSONDb } from "../utils/getJSONDb.js";
import { setJSONDb } from "../utils/setJSONDb.js";
export async function delAll() {
    try {
        const jsonDB = JSON.parse(await getJSONDb());
        jsonDB["db"] = {};
        setJSONDb(JSON.stringify(jsonDB));
    }
    catch (error) {
        throw new Error(error?.message);
    }
}
