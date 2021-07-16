let keys = require("../../new-keys");
const fetch = require("node-fetch");
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

router.get("/", normal_daily , normal_minute , async(req,res,next) => {
  console.log("111111")
  let api_key = req.get("x-api-key")
  if(!api_key){
    res.sendStatus(401).send("API Key is missing! Kindly get one at api.pgamerx.com/register")
  }
  console.log("111111")

const list = await keys.findOne({
    key: api_key,
  });
  if(!list){
    res.sendStatus(403).send("Forbidden! API key is incorrect")
    console.log("111111")
  }
  
  let typess = req.query.type;
  console.log("111111")

  let joke_endpoints = ["dev", "pun", "spooky", "any"];
  console.log("111111")

  if(!joke_endpoints.includes(typess)){
      res.sendStatus(400).send("Bad Request, Invalid type")
  }
  console.log("111111")

  let request;
  let destination = typess
  if (destination.toLocaleLowerCase() == "dev") {
    request = "Programming";
  } else if (destination.toLocaleLowerCase() == "pun") {
    request = "Pun";
  } else if (destination.toLocaleLowerCase() == "spooky") {
    request = "Spooky";
  } else if (destination.toLocaleLowerCase() == "any") {
    request = "Any";
  }
  console.log("111111")

  const r = await fetch(`https://v2.private-endpoint-on-my-domain/joke/${request}`);
  res.json(await r.json());


})
module.exports = router
