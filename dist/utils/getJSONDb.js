import { createReadStream } from "fs";
export async function getJSONDb() {
    return new Promise((resolve, reject) => {
        let database = ``;
        const src = createReadStream('./database.json');
        src
            .on('error', (error) => {
            reject(error);
        })
            .on('data', (chunk) => {
            database += chunk.toString("utf-8");
        })
            .on('end', () => {
            resolve(database);
        });
    });
}
