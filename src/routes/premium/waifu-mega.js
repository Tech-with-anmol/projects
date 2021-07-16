let premium = require("../../premium");

const fetch = require("node-fetch");

const express = require("express")
const router = express.Router()
let cors = require("cors")
router.use(cors())
const rateLimit = require("express-rate-limit");



const mega_daily = rateLimit({
  function (req /*, res*/) {
    return req.get("x-api-key") | req.ip
},
    windowMs: 60 * 1000 * 60 * 24,
    max: 150000,
    message: [
      "Dude, You crossed your daily rate limit i.e 150K requests. For increased rate limit - https://u.pgamerx.com/premium",
    ],
  });

router.get("/" , mega_daily, async(req,res,next) => {
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
    if(list.type !== "mega") return res.sendStatus(403).send("Forbidden! You don't have a Pro Plan Subscribed")
let type = req.query.type
if(!type) res.sendStatus(400)
let temp = await fetch(`http://another-private-endpoint-I-dont-wanna-leak-so-i-dont-get-ddos/sfw/${type}`)
let json = await temp.json()
res.json([json])
})

module.exports = router
