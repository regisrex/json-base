import { createWriteStream } from "fs";
export async function setJSONDb(json) {
    const destination = createWriteStream('./database.json');
    destination.write(json);
}
