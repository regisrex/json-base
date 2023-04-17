export class MissingParamError extends Error {
    constructor(param : string) {
        super(`Missing param  : ${param}`)
        this.name  = "MissingParamError"
    }
}

export class CollectionNotFoundError extends Error {
    constructor(collection : string) {
        super(`Collection  ${collection} was not found in database`)
        this.name  = "CollectionNotFoundError"
    }
}


export class DatabaseError extends Error {
    constructor(err : string) {
        super(err)
        this.name  = "DatabaseError"
    }
}

export class NotFoundError extends Error {
    constructor(err : string) {
        super(err)
        this.name = "NotFoundError"
    }
}

export class DuplicationError extends  Error {
    constructor(err? : string){
        super(err || "Duplication error occured")
        this.name =  "DuplicationError"
    }
}

export class CreateFileError extends Error {
    constructor(err? : string){
        super(err || "Failed to create database.json")
        this.name =  "CreateFileError"
    }
    
}