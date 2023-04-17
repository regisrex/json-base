import { createReadStream } from 'fs';
import { CollectionNotFoundError } from '../errors/errorHandler.js';
export async function getCollection(collection) {
    try {
        const _database_src = createReadStream('./database.json');
        let database = '';
        let parsedDatabase = null;
        let __requested_coll = null;
        return new Promise((resolve, reject) => {
            _database_src
                .on('error', (err) => {
                reject(new Error(err.message));
            })
                .on("data", (chunk) => {
                database += chunk.toString("utf-8");
            })
                .on("end", async () => {
                parsedDatabase = JSON.parse(database);
                const coll = await parsedDatabase.db[`${collection}`];
                if (coll)
                    __requested_coll = coll;
                if (!coll)
                    throw new CollectionNotFoundError(collection);
            })
                .on("close", () => {
                resolve(__requested_coll);
            });
        });
    }
    catch (error) {
        throw new CollectionNotFoundError(error.message);
    }
}
