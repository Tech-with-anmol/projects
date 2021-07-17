let keys = require("../../new-keys");
const express = require("express")
const router = express.Router()
let cors = require("cors")
router.use(cors())
const rateLimit = require("express-rate-limit");
const weather = require("private-package");



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
  try{
    let query = req.query.city
    if(!query) return res.json([{error: true , message: "City Missing "}])
  let api_key = req.get("x-api-key")
  if(!api_key){
    res.sendStatus(401).send("API Key is missing! Kindly get one at api.pgamerx.com/register")
  }
const list = await keys.findOne({
    key: api_key,
  });
  if(!list){
    res.sendStatus(403).send("Forbidden! API key is incorrect")
  }

  weather.find({ search: query, degreeType: "C" }, function (
    error,
    result
  ) {
    if(error) res.json([{error: true, message: error}])
    if (result === undefined || result.length === 0){
        res.json([{error: true, message: "Invalid City"}])}
        res.send(result)
  })
}catch(err){
  console.log(err)
}
})
module.exports = router
