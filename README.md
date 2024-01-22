# **📦 json-base**
A simple json dbms with an orm, for nodejs
</br>
![NPM Downloads](https://img.shields.io/npm/dw/@ndzhwr/json-base?style=flat-square)
___

```bash
npm install @ndzhwr/json-base
```
<blockquote>
 This package doesn't work well with typescript-projects currently, I'm still working hard to fix this
</blockquote>

<br></br>
Use json file as your database on the backend, json-base create the database json file for you and also provides you with a lightweight ORM to perform transactions on your database.

## Get Started

To get started, first make sure you have the latest stable version of nodejs on your computer. Another thing is that `json-base` runs only in a node environemt.


**1. Install json-base dependecy with npm**  

You have to install json-base with npm, it's not currently available on other package managers like yarn, etc.
```bash
$ npm install @ndzhwr/json-base
```

**2. Initialize json-base in your project**  

Initialize json-base in your project. Open the root folder of your project in your terminal and initialize json-base. This will create a `database.json` file in the project.

```bash
$ npx json-base --init
```

**3. Create your base schema or just leave it.**  

Normally, the database.json created comes with 2 sample data collections, 'users' ans 'posts', you can add more collections as you please, it's allow.   

**NB** : Respect the syntax of json files while adding new collection and also keep in mind that all collections must be enwrapped in the  `db`  field.
<br>


**4. Perform crud on the schemas as you need it**  

Let's have a simple tutorial on how we can use this `json-base`. We're going to create a simple app to interact with our models where we can get all the  users, get a particular user with a unique key or get a group of users but not all. The developer can also get a limited number of users if he or she specifies the limit argument in the get function. We're doing this in [tutorial](#a-simple-tutorial) section

## A simple tutorial 

**Table of contents**  
1. Getting data with get() api
2. Deleting data with del() api
3. Updating data with set() api
4. Adding data with add() api
5. Deleting All data with delAll() api

#### 0. Setting up json-base in a project
Before starting to perform transactions to the database, let's 
learn a little bit on the usage of the  CLI 
```
    Usage     : npx json-base [command]
    Commands  :  
                --init     Initialized the database.json in the current directory
                --version  Prints the current version of json-base
                --help     Prints the help message

```

*database.json*
```json
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
                "id" : "1"
                "userId" : "1",
                "photo" : "https://j.co/6235jjgk",
                "caption" : "Look at hom"
            }
        ]
    }
    
}
```

You will need to remove the models in the json database as long as the sample ones may not match  with your purpose.

#### 2. I Getting data (Simple where clause)
In this section, we're going to see how we can get data from our json database.   
```ts
import { get } from '@ndzhwr/json-base'
  (async function(){
       const aUsersWithId2  =  await get({
              collection : "users",
               where : {
                     id : 2
                   },
               limit :  1,
           })
  }())
```
The code above retrieves `1 record` from the `users` collection, where `user.id == 2` 
### 2. II Getting data (Complex where clause)

You can use the lt, gt, lte, gte, and eq operators in the where clause like this:

```typescript
import { get } from 'json-base'

(async function(){
    const aUsersWithId2  =  await get({
        collection : "users",
        where : {
            id : { lt: 10, gt: 3 }
        },
        limit :  1
    })
    console.log(aUsersWithId2);
}());
```
In this example, we are querying the "users" collection for records where the "id" field is less than 10 and greater than 3, and limiting the results to 1 record. The lt, gt, lte, gte, and eq operators are used to specify the comparison operators in the query. The get() function will return the matching record(s) if found, or throw an error if not found.

#### 3. Create data
As said before, we'll be creating  a simple crud operation, this means that we already have read checked on our todo checklist as read is the same as getting data. Next we're going to work on creating data.
```ts
  import  { add } from '@ndzhwr/json-base'
  (async function(){
      await add({
        collection : "posts",
        data : {
            id  : 1 ,
            userId : 1 ,
            photo :  "https://linkto.img",
            caption : "The quick brown fox"
        }
    })
  }())
```
The code snipped above adds the `data ` object in the `posts` collection 

#### 4. Update and delete data

Let's combine the update and  the delete  sections into one section as long as they're kinda simple and easy to understand.

Updating data will require a unique identifier of the record we're updating.
```ts
   import { set } from '@ndzhwr/json-base'
   await set({
        collection : "users",
        where : {
            username : "leerob"
        },
        data : {
            email : "leerobin@gmail.com"
        }
    })
```

Enough for updating data, the next is to learn how to delete some records from the json database. Here, a unique identifier is required.

```ts
 import { del } from '@ndzhwr/json-base'
  
  (async function(){
       await del({
           collection  : "posts",
           where : {
                  id : 1 
               }     
       })
  }())
```


We can't finish without talking about how to delete all data from db in case you want . here are code example

```ts
 import { delAll } from '@ndzhwr/json-base'
  
  (async function(){
       await delAll();
  }())

```


🎉 Congrats! Now we've finished creating our CRUD operations on the models and I hope now you're able to consume the API and make your life easier.  
*For more, jsdoc was used , hover on your imported function to see the documentation*


## Contributing
Willing to contribute to this Open Source project ?
You can contribute to this project by **making bug reports** , **requesting features** ,  **Adding features** and more other ways. Read more  [here](CONTRIBUTING.md) before contributing.

## Maintainers
This project is  maintained by [R&eacute;gis NDIZIHIWE](https://github.com/ndzhwr).  
<!-- You can buy him coffee on  <a style="color:yellow;" href="https://www.buymeacoffee.com/ndzhwr">Buymeacoffee</a> -->

## Licence
This project is [MIT](LICENSE) licensed.
___

<p align="right"> Jan 2023. </p>
