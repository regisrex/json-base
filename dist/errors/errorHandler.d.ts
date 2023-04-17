export declare class MissingParamError extends Error {
    constructor(param: string);
}
export declare class CollectionNotFoundError extends Error {
    constructor(collection: string);
}
export declare class DatabaseError extends Error {
    constructor(err: string);
}
export declare class NotFoundError extends Error {
    constructor(err: string);
}
export declare class DuplicationError extends Error {
    constructor(err?: string);
}
export declare class CreateFileError extends Error {
    constructor(err?: string);
}
