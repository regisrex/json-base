import { createWriteStream } from "fs";
export async function setJSONDb(json: string): Promise<void> {
    const destination = createWriteStream('./database.json')
    destination.write(json)
}