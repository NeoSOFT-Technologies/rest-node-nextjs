# Next JS Skeleton for REST Application 

A skeleton/boilerplate/starter project for quickly building web applications using NextJs as full-stack.

By running one command, you will get a production-ready Next.js app installed and configured on your machine. There are many built-in features in the skeleton, including authentication using next-auth, request validation, unit and integration tests, continuous integration, docker support, API documentation, folderstructure, Mongodb with TypeOrm etc. To learn more about its features, check out the following list.

## Description

- [Next](https://nextjs.org/) framework TypeScript starter repository.

-Next.js gives you the best developer experience with all the features you need for production: hybrid static & server rendering, TypeScript support, smart bundling, route pre-fetching, and more. No config needed.

- Next. js solves both of those problems using server-side rendering. Next's framework allows you to build scalable, performant React code without the configuration hassle.It has many great features and advantages, which can make Nextjs your first option for building your next web application

Take it for a test drive. We'd love to hear any feedback you have or if you've thought of a new feature.

## Table of Contents

- [Features](#features)
- [Getting started](#getting=started)
- [Project Structure](#project-structure)
- [Documentation](#documentation)
- [Miscellaneous](#miscellaneous)
- [Trainings](#trainings)
- [Video Tutorials](#video-tutorials)
- [Contributing To This Project](#contributing-to-this-project)
- [Issues and Discussions](#issues-and-discussions)
- [Stay in touch](stay-in-touch)

## Features



## Getting started

### Prerequisites

- Node <https://nodejs.org/en/> *use the LTS version*
- NPM
- Docker <https://www.docker.com/>
    - Install Docker Desktop for MAC: [https://docs.docker.com/docker-for-mac/install/](https://docs.docker.com/docker-for-mac/install/)
    - Install Docker Desktop for Windows: [https://docs.docker.com/docker-for-windows/install/](https://docs.docker.com/docker-for-windows/install/)
- [Docker Compose](https://docs.docker.com/compose/install/)
- NestJS CLI <https://nestjs.com/>


### Setup

To get started, clone the repository to your local computer. Use the following command to run in your terminal.

#### Clone The Application

```bash
// clone the application
$ git clone https://github.com/NeoSOFT-Technologies/rest-node-nextjs
```
#### Install The Dependencies

Next, install the packages that are required for this project.

```bash
// Install the required npm modules
$ npm install
```

#### Create The Environment Variables

The `env` file should be placed in root folder with the following variables.

- `.env` : Default Environment File
- `.env.test` : Test Environment File
- `.env.production` : Production Environment File
- `.env.staging` : Staging Environment File


```
# .env example

ENV_VARIABLE="server_only_variable"
NEXT_PUBLIC_ENV_VARIABLE="public_variable"
```

#### Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run dev:dev

# production mode
$ npm run dev:prod
```

#### Test

For this project, We chose [Jest](https://facebook.github.io/jest/) as our test framework.
While Mocha is probably more common, Mocha seems to be looking for a new maintainer and setting up TypeScript testing in Jest is wicked simple.


```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```



#### Running the build

All the different build steps are orchestrated via [npm scripts](https://docs.npmjs.com/misc/scripts).
Npm scripts basically allow us to call (and chain) terminal commands via npm.
This is nice because most JavaScript tools have easy to use command line utilities allowing us to not need grunt or gulp to manage our builds.
If you open `package.json`, you will see a `scripts` section with all the different scripts you can call.
To call a script, simply run `npm run <script-name>` from the command line.
You'll notice that npm scripts can call each other which makes it easy to compose complex builds out of simple individual build scripts.
Below is a list of all the scripts this template has available:

| Npm Script      | Description                                                       |
| --------------- | ----------------------------------------------------------------- |
| `start`         | Start project in development mode                                 |
| `start:prod`    | this script runs project in production mode                       |
| `build`         | Full build. Runs ALL build tasks                                  |
| `clean`         | On Run clean the installed node packages                          |
| `clean:cdn`     | On Run clean css from build                                       |
| `build:prod`    | Runs build and build:css together                                 |
| `test`          | Runs tests using Jest test runner                                 |
| `eject`         | Runs react-scripts eject                                          |
| `format`        | Runs prettier roles on project files                              |
| `test:coverage` | Gives the code coverage infrom to table                           |
| `lint`          | Runs ESLint on project files                                      |
| `lint:fix`      | Runs lint and fix the resolve able errors                         |
| `lint:quiet`    | Run lint to show errors only                                      |
| `prepare`       | install husky                                                     |
| `precommit`     | Runs lint:fix and format before commit                            |
| `prepush`       | Runs lint before push                                             |



## Project Structure

In a TypeScript project, it's best to have separate _source_  and _distributable_ files.
TypeScript (`.ts`) files live in your `src` folder and after compilation are output as JavaScript (`.js`) in the `dist` folder.
The `test` and `views` folders remain top level as expected.

Please find below a detailed description of the app's folder structures:


> **Note!** Make sure you have already built the app using  `npm run build`


## Project Structure

| Name | Description |
| ------------------------ | --------------------------------------------------------------------------------------------- |
| **wiki/**                         | You can add project documentation and insructions file here |
| **client**                  | Contains your source code that will be compiled to the build dir                               |
| **client/components/**                | UI Components and reuseable components |
| **client/pages/**                       | We can provide the frontend routes ,dynamic routes |
| **client/pages/api/**             |we can provide the backend routes |
| **client/resources/**               | Constant Variables such as images and strings  |
| **client/store/**               |  Contains slice and hooks |
| **client/store**/${page-name}/slice.ts               |  Contains slice configuration {state, action and reducers} |
| **client/store**/index.ts               |  Entry point for store configuration|
| **client/styles/**               | SASS styles |
| **client/types/**               | Schema or Types |
| **client/utils/**               | Reusable utlity like api http client |
| **client**/index.ts        | Entry point to your frontend app                                                               |
| **server**               |contains the source code of server  |
| **server/configs/**      |connects the server with database  |
| **server/controllers/**   |controllers belongs to that server  |  
| **server/entities/**         | contains the schema,validations |
| **server/services/**        | contains the logic and provide access to repo |
| **server/utils/**          |connects repo with database |
| package.json             | File that contains npm dependencies
| tsconfig.json            | Config settings for compiling server code written in TypeScript                               |
| next.config.js            |config settings for compiling option|
| next-env.d.ts             |file ensures Next.js types are picked up by the TypeScript compiler|
| .eslintrc.json                | Config settings for ESLint code style checking                                                |
| .eslintignore            | Config settings for paths to exclude from linting                                             |
| prettierrc.json                | Config settings for Prettier code format checking                                                |
| .prettierignore            | Config settings for paths to exclude from formatting                                             |
| **.vscode**              | Contains VS Code specific settings                                                            |
| **.github**              | Contains GitHub settings and configurations, including the GitHub Actions workflows            |
| **.husky**              | Contains Husky settings and configurations            |
| **build**                 | Contains the distributable (or output) from your TypeScript build. This is the code you ship  |
| **node_modules**         | Contains all your npm dependencies |           

## Documentation

### 1. [Request and Response Cycle]

> An explanation of how the request and response cycle works is provided here

#### 1.1 Response Workflow

> When there is s request from frontend routes ,here is the response flow.

![Response Cycle](https://github.com/NeoSOFT-Technologies/rest-node-nextjs/blob/main/wiki/images/response-flow.png?raw=true)

#### 1.2 Request Workflow

>This flow start works in server, whenever  there is a request from the client. 

![Request Workflow](https://github.com/NeoSOFT-Technologies/rest-node-nextjs/blob/main/wiki/images/code-flow.jpg?raw=true)

### 2. Modules





## Miscellaneous

- [Known Issues](https://github.com/NeoSOFT-Technologies/rest-node-nestjs/blob/main//wiki/docs/miscellaneous/known-issues.md)
- [Git commits](https://github.com/NeoSOFT-Technologies/rest-node-nestjs/blob/main/wiki/docs/miscellaneous/git-commits.md)
- [Clean Docker Images](https://github.com/NeoSOFT-Technologies/rest-node-nestjs/blob/main/wiki/docs/miscellaneous/clean-docker.md)
- [Installation Pretteri, Husky & Lint](https://github.com/NeoSOFT-Technologies/rest-node-nestjs/blob/main/wiki/docs/miscellaneous/installation-pretteri-husky-lint.md)

## Trainings



## Video Tutorials



## Contributing To This Project

Contributions are welcome from anyone and everyone. We encourage you to review the [guiding principles for contributing](https://github.com/NeoSOFT-Technologies/rest-node-nestjs/blob/main/wiki/docs/contribution.md)

* [Bug reports](https://github.com/NeoSOFT-Technologies/rest-node-nestjs/blob/main/wiki/docs/contribution/bug-reports.md)
* [Feature requests](https://github.com/NeoSOFT-Technologies/rest-node-nestjs/blob/main/wiki/docs/contribution/feature-requests.md)
* [Pull requests](https://github.com/NeoSOFT-Technologies/rest-node-nestjs/blob/main/wiki/docs/contribution/pull-requests.md)

## Issues and Discussions

- [Create New Issue](https://github.com/NeoSOFT-Technologies/rest-node-nestjs/issues/new)
- [Check Existing Issues](https://github.com/NeoSOFT-Technologies/rest-node-nestjs/issues)
- [Discussions](https://github.com/NeoSOFT-Technologies/rest-node-nestjs/discussions)

## Stay in touch

* Website - [https://www.neosofttech.com/](https://www.neosofttech.com/)
* Twitter - [@neosofttech](https://twitter.com/neosofttech)
* Meetup -  [https://www.meetup.com/neosoft-technologies/](https://www.meetup.com/neosoft-technologies/)
* Medium -  [https://medium.com/@neosofttech-technologies-blog](https://medium.com/@neosofttech-technologies-blog)
* GitHub - [https://github.com/NeoSOFT-Technologies](https://github.com/NeoSOFT-Technologies)
* Discord - [NodeJS](https://discord.gg/9xW5gQhQa4)