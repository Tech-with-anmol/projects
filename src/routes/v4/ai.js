let keys = require("../../new-keys");
const translate = require('@vitalets/google-translate-api');

const fetch = require("node-fetch");
const Chatbot = require("private-packaage");
const chatbot = new Chatbot.Client();
const ai = require("another-private-package")
const express = require("express")
const router = express.Router()
let cors = require("cors")
router.use(cors())
const rateLimit = require("express-rate-limit");



const normal_minute = rateLimit({
  function (req /*, res*/) {
    return req.get("x-api-key") | req.ip
},
  windowMs: 60 * 1000,
  max: 60,
  message: [
    "Jeez dude, 60 requests per minute? Calm down! For increased rate limit - https://u.pgamerx.com/premium",
  ],
});

const normal_daily = rateLimit({
  function (req /*, res*/) {
    return req.get("x-api-key") | req.ip
},
  windowMs: 60 * 1000 * 60 * 24,
  max: 20000,
  message: [
    "Dude, You crossed your daily rate limit i.e 20k requests. For increased rate limit - https://u.pgamerx.com/premium",
  ],
});


router.get("/", normal_daily, normal_minute, async(req,res,next) => {
  try{
    let api_key = req.get("x-api-key")
    if(!api_key){
      res.sendStatus(401).send("API Key is missing! Kindly get one at api.pgamerx.com/register")
    }
  const list = await keys.findOne({
      key: api_key,
    });
    if(!list){
      res.sendStatus(403).send("Forbidden! API Key is incorrect, kindly recheck")
    }
    let server = req.query.server ? req.query.server : "backup"
    let language = req.query.language ? req.query.language : "auto"
    let message = req.query.message;
    let uid = req.query.uid ? req.query.uid : 6969696969
    let master = req.query.master ? req.query.master : "PGamerX"
    let bot = req.query.bot ? req.query.bot : "Random Stuff Api"
    if (server == "primary") {
      if (!language) {
          let reply = await chatbot.chat({
              message: message,
              name: bot,
              owner: master,
              user: uid,
              language: language
            });
            return res.json([{"message": reply} ,{"response_time" : "Normal" }])
      } else if (language) {
        let lang = language
          let reply = await chatbot.chat({
              message: message,
              name: bot,
              owner: master,
              user: uid,
              language: lang,
            });
            return res.json([{"message": reply} ,{"response_time" : "Normal" }])
      }
    } else if (server === "backup") {
      let ress = await translate(message, { to: 'en' })
      let lang = await ress.from.language.iso
      let langg = lang ? lang : language
      let fetching = await fetch(`http://Ialmostforgot thislink.com&uid=${uid}&msg=${message}`)
          let fetched = await fetching.json()
           let replytemp = fetched.cnt
           let okbruhh = await translate(replytemp, { to: lang })
           let reply = okbruhh.text
          return res.json([{"message": reply} ,{"response_time" : "Normal" }])
      
    } else if (server === "unstable") {
          const history = [message]
          let reply = await ai(encodeURIComponent(message), history)
          return res.json([{"message": reply} , {"response_time" : "Unusual" }])
  }
  }catch(err){
    console.log(err)
    res.json[{error: err}]
  }
})
  
module.exports = router
