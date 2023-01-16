import { type ReadStream, createReadStream } from 'fs'
import { CollectionNotFoundError } from '../errors/errorHandler.js'
import { log } from 'console';

export async function getCollection<T>(collection: string): Promise<any> {
    try {

        const _database_src: ReadStream = createReadStream('./database.json');
        let database: string = ''
        let parsedDatabase: any = null
        let __requested_coll: T[] = null
        return new Promise((resolve, reject) => {
            _database_src
                .on('error' , (err) => {
                    reject(new Error(err.message))
                })
                .on("data", (chunk) => {
                    database += chunk.toString("utf-8")
                })
                .on("end", async () => {

                    parsedDatabase = JSON.parse(database);
                    const coll = await parsedDatabase.db[`${collection}`]
                    if (coll)
                        __requested_coll = coll;
                    if (!coll)
                        throw new CollectionNotFoundError(collection);
                })
                .on("close", () => {
                    resolve(__requested_coll)
                })
        })

    } catch (error: any) {
        throw new CollectionNotFoundError(error.message)
    }

}