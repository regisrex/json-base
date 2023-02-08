import { getJSONDb } from "../utils/getJSONDb";
import { setJSONDb } from "../utils/setJSONDb";

export async function delAll() {
  try {
    const jsonDB = JSON.parse(await getJSONDb());
    jsonDB["db"] = {};
    setJSONDb(JSON.stringify(jsonDB));
  } catch (error: any) {
    throw new Error(error?.message);
  }
}
