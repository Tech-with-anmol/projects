# Random-stuff-api
<a href="https://discord.gg/y94PA8d">
<img src="https://img.shields.io/discord/690557545965813770?color=7289DA&label=Support&logo=discord&style=for-the-badge" alt="Discord">
</a>

<a href="https://www.npmjs.com/package/random-stuff-api">
<img src="https://img.shields.io/npm/dt/random-stuff-api?color=CC3534&logo=npm&style=for-the-badge" alt="Downloads">
</a>

<a href="https://www.npmjs.com/package/random-stuff-api">
<img src="https://img.shields.io/npm/v/random-stuff-api?color=red&label=Version&logo=npm&style=for-the-badge" alt="Npm version">
</a>
<a href="https://github.com/pgamerxdev/projects">
<img src="https://img.shields.io/github/stars/pgamerxdev/projects?color=333&logo=github&style=for-the-badge" alt="Github stars">
</a>

<a href="https://github.com/pgamerxdev/projects/blob/master/LICENSE">
<img src="https://img.shields.io/github/license/pgamerxdev/projects?color=6e5494&logo=github&style=for-the-badge" alt="License">
</a>

## Requirments
* Nodejs Version 12.0.0 or above
* developer/build tools

## Installation
```
npm install random-stuff-api
```
## Usage
### AI Response
```js
let stuff =  require("random-stuff-api")
let rsa = new stuff({
    key: "api_key" // Optional 
})

let response = await rsa.ai(message, language)
```
### Joke 
```js
let stuff =  require("random-stuff-api")
let rsa = new stuff({
    key: "api_key" // Optional 
})

let response = await rsa.joke(type)
// Refer to https://api.pgamerx.com/endpoints for types
```
### Image 
```js
let stuff =  require("random-stuff-api")
let rsa = new stuff({
    key: "api_key" // Optional 
})

let response = await rsa.image(type)
// Refer to https://api.pgamerx.com/endpoints for types
```
## Important links
### Get an API key
[Get one here](https://api.pgamerx.com/register)
### Documentation/Endpoint
[Find here](https://api.pgamerx.com/endpoints)
### Donate
[Donate](https://ko-fi.com/pgamerx)
### Affilate
[Check out best Hosting](https://u.pgamerx.com/sponsor)
### Support 
[Discord server](https://pgamerx.com/discord)
