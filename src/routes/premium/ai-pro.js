let premium = require("../../premium");
const fetch = require("node-fetch");
const translate = require('@vitalets/google-translate-api');

const Chatbot = require("private-package");
const chatbot = new Chatbot.Client();
const ai = require("another-private-package")
const express = require("express")
const router = express.Router()
let cors = require("cors")
router.use(cors())
const rateLimit = require("express-rate-limit");



const pro_daily = rateLimit({
  function (req /*, res*/) {
    return req.get("x-api-key") | req.ip
},
  windowMs: 60 * 1000 * 60 * 24,
  max: 40000,
  message: [
    "Dude, You crossed your daily rate limit i.e 40K requests. For increased rate limit - https://u.pgamerx.com/premium",
  ],
});

const pro_minute = rateLimit({
  function (req /*, res*/) {
    return req.get("x-api-key") | req.ip
},
  windowMs: 60 * 1000,
  max: 120,
  message: [
    "Jeez dude, 120 requests per minute? Calm down! For increased rate limit - https://u.pgamerx.com/premium",
  ],
});

router.get("/", pro_daily, pro_minute , async(req,res,next) => {
  let api_key = req.get("x-api-key")
  if(!api_key){
    res.sendStatus(401).send("API Key is missing! Kindly get one at api.pgamerx.com/register")
  }
const list = await premium.findOne({
    key: api_key,
  });
  if(!list){
   res.sendStatus(403).send("Forbidden! You don't have a premium API Key")
  }
  if(list.type !== "pro") return res.sendStatus(403).send("Forbidden! You don't have a Pro Plan Subscribed")
  let server = req.query.server;
  let language = req.query.language;
  let message = req.query.message;
  let uid = req.query.uid;
  let master = req.query.master;
  let bot = req.query.bot;
  if (server === "primary") {
    if (!language) {
      let detecting = await translate(message, { to: 'en' })
      let lang = detecting.from.language.iso
        let reply = await chatbot.chat({
            message: message,
            name: bot,
            owner: master,
            user: uid,
            language: lang
          });
          return res.json([{"message": reply} ,{"response_time" : "Normal" }])
    } else if (language) {
        let reply = await chatbot.chat({
            message: message,
            name: bot,
            owner: master,
            user: uid,
            language: language,
          });
          return res.json([{"message": reply} ,{"response_time" : "Normal" }])
    }
  } else if (server === "backup") {
    let ress = await translate(message, { to: 'en' })
    let lang = await ress.from.language.iso
    let langg = language ? language : lang
    let fetching = await fetch(`http://Ialmostforgot thislink.com&uid=${uid}&msg=${message}`)
        let fetched = await fetching.json()
         let replytemp = fetched.cnt
         let okbruhh = await translate(replytemp, { to: langg })
         let reply = okbruhh.text
        return res.json([{"message": reply} ,{"response_time" : "Normal" }])
    
} else if (server === "unstable") {
    const history = [message]
    let reply = await ai(encodeURIComponent(message), history)
    return res.json([{"message": reply} , {"response_time" : "Unusual" }])
}
  
})

module.exports = router
