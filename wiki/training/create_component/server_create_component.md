# what is TypeORM
>TypeORM is a TypeScript ORM (object-relational mapper) library that makes it easy to link your TypeScript application up to a relational database database. TypeORM supports MySQL,Mongodb,c SQlite, Postgres, MS SQL Server, and a host of other traditional options.

### How To implement TypeORM
### entities
An entity is a collection of fields and associated database operations. It is used to map database table and its fields with the entities and its attributes

*Example*
Create a entities called user

```
import { ObjectId } from "mongodb";
import { Entity, Column, ObjectIdColumn } from "typeorm";

@Entity()
export class User {
  @ObjectIdColumn()
  _id: ObjectId;

  @Column("string")
  firstName: string;

  @Column("string")
  lastName: string;

  @Column({ type: "string", unique: true })
  userName: string;

  @Column("string")
  password: string;

 }

```
## Folder structure for routes 
```

📂 src
  └──📂 pages
      ├──📂 user
      |   └── [userName].ts
      |   └── index.ts
      ├──📂 auth
      |   └── [...nextauth].ts
      |   └── login.ts    
```

## Folder structure for  entities,controllers & services

```

📂 src
  └──📂 server
         ├──📂 entities
         |   └── 📝 user.ts
         ├──📂 controllers
         |   └── 📝 auth.controller.ts
         |   └── 📝 user.controller.ts
         ├──📂 services
             └── 📝 auth.service.ts
             └── 📝 user.service.ts
            
```

### How to access the entities and implement routes in pages/api folder

>step 1: import getRepo from "../utils/get-repository"; in auth.service file and access by using

          const userRepo = await getRepo("User");
      
        
>step 2: After importing it into the auth.service file it will provide the access to getrepo,then provide the response,we can access that in our auth.controllers.ts file.

 ```
      import { NextApiRequest, NextApiResponse } from "next";
      import authService from "../services/auth.service";
      const authController = {
            login: async (req: NextApiRequest, res: NextApiResponse) => {
            const { userName, password }: { userName: string; password: string } = req.body;
            if (!userName || !password) { throw new Error("please provide userName and password both"); }
            const user = await authService.login({ userName, password });
            res.status(200).json(user);
            }
        }
      export default authController
```

>step 3: Now it's time to create routes. In Nextjs every individual page acts as a routes.Create a folder inside
src/pages/api  as auth and import controllers.

```
     import handler from "../../../server/utils/next-connect";
     import authController from "../../../server/controllers/auth.controller";
     export default handler.post(authController.login);
```

>step 4: we are using this handler from next-connect. next-connect is a Async middleware,
Lightweight => Suitable for serverless environment,Works with async handlers (with error catching),TypeScript support.