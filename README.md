# **JSONDB**
Json(Javascript Object Notation) Database  
Made for nodejs developers  
Maintained by [@ndzhwr](https://twitter.com/ndzhwr)
___

A simple database-like tool for nodejs using JSON for data storage with its ORM. 
```bash
$ yarn add jsondb
```


## 1. Features
Generally, the point is that jsondb helps you perform databasa like transactions, currently CRUD. You can go there for sure here we go there this is the best choice.

## 2. Get Started

To get started, first make sure you have the latest stable version of nodejs on your computer. Another thing is that `jsondb` runs only in a node environemt.


**1. Install jsonbd dependecy with npm**  

You have to install jsondb with npm, it's not currently available on other package managers like yarn, etc.
```bash
$ npm install jsondb
```

**2. Initialize jsondb in your project**  

Initialize jsondb in your project. If you have a `src` folder in your project, this will create a `jsondb/database.json` file in the src folder.
```bash
$ npx jsondb --init
```

**3. Create your base schema or just leave it.**  

Initialize jsondb in your project. If you have a `src` folder in your project, this will create a `jsondb/database.json` file in the src folder.  
More about this can be found in the [tutorial](#2-get-started) section and in the [setting up jsondb in your project](#1-setting-up-jsondb-in-a-project) to be exact.

<br>

**4. Perform crud on the schemas as you need it**  

Let's use a simple tutorial on how we can use this `jsondb`. We're going to create a simple app to interact with the `users` model where we can get all the  users, get a particular user with a unique key or get a group of users but not all. The developer can also get a limited number of users if he or she specifies the limit arguement in the get function. We're doing this in [tutorial](#3-a-simple-tutorial) section

## 3. A simple tutorial 

**Table of contents**  
1. Setting up jsondb in a project
2. Creating a base models
3. Performing CRUD on the models
4. Upcoming features

#### 1. Setting up jsondb in a project
In this section, we're going to start by creating a nodejs project and add and configure jsondb in it.  

Let's start by installing jsondb from npm package manager 
```
$ npm install jsondb
```

Next, let's initialize jsondb in the nodejs project that we've created

```
$ npx jsondb init
```
On this step, file called `database.json` will be created in the root folder.

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

#### 2. Getting data.
In this section, we're going to see how we can get data from our json database.
```ts

    import { getData } from 'jsondb'
    import UserType from './types/users'


/*    1. Getting all the users   */

    const allUsers  : UserType[]  =  await getData("users")
    console.log(allUsers)      // prints the list of all users

 /*   2. Getting a user with a unique key   */

    const  userWithId2 = await getData("users", { id : 2 })
    console.log(userWithId2)     // prints the user with a unique id of 2

/*    3. Limiting the number of users to retreive  */
    const firstTenUsers =  await getData("users", {} , 10)
    console.log(firstTenUsers)    // prints the first ten users in the json database 

```

