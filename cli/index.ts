#!/usr/bin/env node
import process from "process"
import {  writeFileSync } from "fs"
import chalk from "chalk"
import { CreateFileError } from "../errors/errorHandler"
import("chalk")

const args: string[] = process.argv.splice(2, 4)


async function createFile(fileName: string, fileContent: string) {
    try {
        writeFileSync(fileName, fileContent)
        console.log(`Successfully created file ${fileName}`);
    } catch (error : any) {
        throw new CreateFileError(error.message);
    }
}

let exampleData: string = `
{
    "$schema" : "http://json-schema.org/draft-04/schema#",
    "db" : {
        "users" : [
            {
             "id" : "1" ,
             "username" : "leerob",
             "email" : "lee@rob.io",
             "password" : "robinin"   
            }
        ],
        "posts" : [
            {
                "id" : "1",
                "userId" : "1",
                "photo" : "https://j.co/6235jjgk",
                "caption" : "Look at home"
            }
        ]
    }
    
}
`

const jsondb = `JSONDB`

const usage = `
\t Usage of JSONDB cli
\t npx jsondb  <command>
\t Commands : 
\t \t --version : Prints the npm version of jsondb
\t \t --init    : Initialize database.json in your project
\t \t --help    : Show this help message
\n

`

switch (args[0]) {
    case '--init':
        console.log(chalk.bold.white.bgBlue(`\t ${ jsondb } \t`))
        console.log("Initializing database.json in your project...")
            createFile('database.json', exampleData)
            console.log( chalk.greenBright("💥 Created database.json successfully"))
            console.log(chalk.yellowBright("Happy coding  :)"))
            process.exit(1)
            break;
    case '--help':
    case undefined:
    case null :
    default:
        console.log(usage)
        console.log(chalk.yellowBright("Happy coding  :)"))
}