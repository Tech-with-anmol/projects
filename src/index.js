
let fetch = require("node-fetch")
let base = "https://api.pgamerx.com/"
let api_key = 
process
  .on('unhandledRejection', (reason, p) => {
    console.error(reason, 'Unhandled Rejection at Promise', p);
  })
  .on('uncaughtException', err => {
    console.error(err, 'Uncaught Exception thrown');
    process.exit(1);
  });
  process.on('error', (err) => {
    console.error('whoops! there was an error', err);
  });

  class API {
        constructor (key, options = {}) {
          if(!key) console.warn('API Key is missing! Get one at https://api.pgamerx.com/register. Till that using DEMO version')
          base = "https://api.pgamerx.com/demo/"
          this.key = key
          if(key){
            api_key = this.key
          }
          else {
          api_key = "nothing"
          }
          api_key = this.key

          this.options = Object.assign(options)
        }
        async joke(type){
            if(!type) throw new Error("No Joke type provided! Refer to https://api.pgamerx.com/endpoints for types")
            let res = await fetch(`${base}joke/${type}?api_key=${api_key}`)
            let json = await res.json()
            return(json)
        }
       async image(type){
        if(!type) throw new Error("No Joke type provided! Refer to https://api.pgamerx.com/endpoints for types")
        let res = await fetch(`${base}image/${type}?api_key=${api_key}`)
        let json = await res.json()
        return(json[0])
       }
       async ai(message, language){
           if(!message) throw new Error("No Message was provided")
           if(!language) console.warn("No Language selected, using automatic by default")
           if(language){
           let res = await fetch(`${base}/ai/response?message=${message}&language=${lang}&api_key=${api_key}`)
           let json = await res.json()
           let response = json[0]
           return(response)
           }
       }
      }


module.exports = API


/*
    insult: async () => {
        try {
            return new Promise(async resolve => {
                let joke = await insulter.Insult();
                return resolve(joke);
            });
        } catch (err) {
            throw new Error("An error occurred, error: " + err);
        }
    }

    */