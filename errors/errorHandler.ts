export class MissingParamError extends Error {
    constructor(param : string) {
        super(`Missing param  : ${param}`)
        this.name  = "Missing Parameter Error"
    }
}

export class CollectionNotFoundError extends Error {
    constructor(collection : string) {
        super(`Collection  ${collection} was not found in database`)
        this.name  = "Collection Not Found"
    }
}


export class DatabaseError extends Error {
    constructor(err : string) {
        super(err)
        this.name  = "Database Error"
    }
}

export class NotFoundError extends Error {
    constructor(err : string) {
        super(err)
        this.name = "Not Found Error"
    }
}

export class DuplicationError extends  Error {
    constructor(err? : string){
        super(err || "Duplication error occured")
        this.name =  "Duplication error"
    }
}

export class CreateFileError extends Error {
    constructor(err? : string){
        super(err || "Failed to create database.json")
        this.name =  "CreateFile Error"
    }
    
}