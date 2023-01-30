# TypeScript configuration

## Table of content
* [General info](#general-info)
* [Subject of exercise](#subject-of-exercise)
* [Technologies](#technologies)
* [Setup](#setup)

## General info
This project is an exercise from backend programmign in javascript

## Procedure of TypeScript configuration
1. Intitialize package.json:
```
npm init -y
```
2. Global install of TypeScript:
```
npm install -g typescript
```
3. Create two files: html and ts with code.

4. Write in console:
```
tsc app.ts
```
it is creating a js file with our code

5. Create file tsconfig.json
```
{
    "compilerOptions": {
        "baseUrl": "./", //base path for configuration
        "target": "ES6",
        "esModuleInterop": true,
        "forceConsistentCasingInFileNames": true,
        "strict": true,
        "skipLibCheck": true,
        "module": "commonjs",
        "outDir": "./dist/", //path of result files
        "experimentalDecorators": true,
        "emitDecoratorMetadata": true,
        "sourceMap": true,
        "preserveConstEnums": true,
        "noImplicitAny": true, //forcing types
        "downlevelIteration": true,
        "moduleResolution": "Node",
        "removeComments": true, //remov all comments
        "lib": [
            "es6",
            "dom.iterable",
            "dom"
        ]
    }
}
```

6. Added scripts into a package.json:
```
"scripts": {
  "build": "tsc --build",
  "clean": "tsc --build --clean",
  "preserve": "npm run build",
  "serve": "node dist/index.js"
},
```
for webpack:
```
"scripts": {
   "build": "webpack-cli app.tsx --config webpack-config.js"
}
```
7. Instalation Expres.js
```
npm i @types/express @types/node
```



