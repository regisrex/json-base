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
    }
}
