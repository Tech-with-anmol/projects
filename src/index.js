const express = require("express");
const app = express();
const ai = require("another-private-nodejs-package")
const Chatbot = require("Private-nodejs-package");
const chatbot = new Chatbot.Client();
var cors = require("cors");
const fetch = require("node-fetch");
let keys = require("./new-keys");
const path = require("path");
let premium = require("./premium");
const randomPuppy = require("random-puppy");
const rateLimit = require("express-rate-limit");
const mongoose = require("mongoose");
const translate = require('@vitalets/google-translate-api');

mongoose.connect(
  "PRIVATE STRING NOT TO BE DISCLOSED",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);
const LanguageDetect = require("languagedetect");
const lngDetector = new LanguageDetect();

app.use(cors());
app.get("/products/:id", function (req, res, next) {
  res.json({ msg: "This is CORS-enabled for all origins!" });
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});



/* 
____________________________________________
|                                           |
|                                           |
|          Rate Limit                       |
|         AREA                              |
|                                           |
_____________________________________________
*/

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
const ultra_min = rateLimit({
  function (req /*, res*/) {
    return req.get("x-api-key") | req.ip
},
  windowMs: 60 * 1000,
  max: 250,
  message: [
    "Jeez dude, 250 requests per minute? Calm down! For increased rate limit - https://u.pgamerx.com/premium",
  ],
});
const normal_min = rateLimit({
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

const biz_daily = rateLimit({
  function (req /*, res*/) {
    return req.get("x-api-key") | req.ip
},
  windowMs: 60 * 1000 * 60 * 24,
  max: 95000,
  message: [
    "Dude, You crossed your daily rate limit i.e 95K requests. For increased rate limit - https://u.pgamerx.com/premium",
  ],
});

const ultra_daily = rateLimit({
  function (req /*, res*/) {
    return req.get("x-api-key") | req.ip
},
  windowMs: 60 * 1000 * 60 * 24,
  max: 75000,
  message: [
    "Dude, You crossed your daily rate limit i.e 75K requests. For increased rate limit - https://u.pgamerx.com/premium",
  ],
});

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

const demo = rateLimit({
  function (req /*, res*/) {
    return req.get("x-api-key") | req.ip
},
  windowMs: 60 * 1000,
  max: 10,
  message:
    "You have exhausted your limit on DEMO plan Register now at https://api.pgamerx.com/register FOR FREE and get 20,000 requests/day",
});

/* 
____________________________________________
|                                           |
|                                           |
|          DEMO                             |
|         AREA                              |
|                                           |
_____________________________________________
*/

app.get("/demo/ai/response", demo, async (req, res, next) => {
  try {
    let message = req.query.message;
    let language = req.query.language;

    if (!message)
      return res.json([
        "Error: Incorrect Usage!",
        "Correct usage -",
        "api.pgamerx.com/ai/response?message=Some_Message&language=en",
      ]);
    console.log(message);
    console.log(language);
    if (!language) {
      let ress = await translate(message, { to: 'en' })
      let lang = await ress.from.language.iso
      let reply = await chatbot.chat({
        message: message,
        name: "RSA",
        owner: "PGAMERX",
        user: 69,
        language: lang,
      });
      reply = reply.replace("api.affiliateplus.xyz", "India")

      res.json([reply]);
      return;
    } else {
      let lang = language;
      let reply = await chatbot.chat({
        message: message,
        name: "RSA",
        owner: "PGAMERX",
        user: 69,
        language: lang,
      });
      reply = reply.replace("api.affiliateplus.xyz", "India")

      res.json([reply]);
    }
  } catch (err) {
    res.json([err]);
    console.log(err);
  }
});

app.get("/demo/joke/:file", demo, async (req, res, next) => {
  let allowed = ["dev", "pun", "spooky", "any"];
  let destination = req.params.file;
  if (!allowed.includes(destination.toLocaleLowerCase()))
    return res.json([
      { error: "true" },
      { code: "400" },
      { message: "Bad request(Incorrect endpoint)" },
    ]);
  let bruh;
  if (destination == "dev") bru = "Programming";
  if (destination == "pun") bru = "Pun";
  if (destination == "spooky") bru = "Spooky";
  if (destination == "Any") bru = "Any";
  try {
    const r = await fetch(`https://private-endpoint-on-my-domain/joke/${bruh}`);
    res.json(await r.json());
  } catch (err) {
    console.log(err);
  }
});

app.get(
  "/demo/image/:file",
  demo,
  async (req, res, next) => {
    let destination = req.params.file;
    let working = [
      "aww",
      "duck",
      "dog",
      "cat",
      "memes",
      "dankmemes",
      "wholesomememes",
      "art",
      "harrypottermemes",
      "facepalm",
      "holup",
    ];
    if (!working.includes(destination.toLowerCase()) || !destination) {
      res.json([
        { error: "true" },
        { code: "400" },
        { message: "Bad request(Incorrect endpoint)" },
      ]);
      return;
    }
    const img = await randomPuppy(destination.toLocaleLowerCase());
    res.json([img]);
  }
);

/* 
____________________________________________
|                                           |
|                                           |
|          Real                             |
|         AREA                              |
|                                           |
_____________________________________________
*/



app.get("/test/key", async (req, res, next) => {
  let what = req.query.api_key;
  if (!what)
    return res.json([
      "API key is missing! Kindly visit https://api.pgamerx.com/register to get one for absoutely free! Till that, you can use the demo version. More info about the demo version available at https://github.com/pgamerxdev/projects/issues/11 ",
    ]);
  const list = await keys.findOne({
    key: what,
  });
  if (!list)
    return res.json([
      "API key is incorrect/invalid! Kindly visit https://api.pgamerx.com/register to get one for absoutely free! Till that, you can use the demo version. More info about the demo version available at https://github.com/pgamerxdev/projects/issues/11 ",
    ]);
  res.json([{ "API KEY": `${what}` }]);
});


app.get("/v3/:file/", normal_daily, normal_min, async (req, res, next) => {

  let base = req.params.file;
  if (base == "docs") {
    res.redirect("https://docs.pgamerx.com");
  }
})
app.get("/v3/:file/:file2", normal_daily, normal_min, async (req, res, next) => {
  let joke_endpoints = ["dev", "pun", "spooky", "any"];
  let image_endpoints = [
    "aww",
    "duck",
    "dog",
    "cat",
    "memes",
    "dankmemes",
    "wholesomememes",
    "art",
    "harrypottermemes",
    "facepalm",
    "holup",
  ];
  let bases = ["joke", "image", "ai"];
  let base = req.params.file;
  let branch = req.params.file2;
  let destination = branch

  if (base == "docs") {
    res.redirect("https://api.pgamerx.com/v3/docs")
  }
  if (!bases.includes(base))
    return res.json([
      {
        error: "400 Error",
        message: "Bad Request",
        solution: "kindly double-check the endpoint. ",
      },
    ]);
  if (base == "joke") {
    let header = await req.get("x-api-key");
    if (!header) {
      res.sendStatus(401).send({
        error: "401",
        message: "Unauthorized",
        solution:
          "Kindly make sure to make request using x-api-key as a header. Get one Authentication key at https://api.pgamerx.com/register",
      })
    }

      const list = await keys.findOne({
        key: header,
      });
      if (!list) {
        res.sendStatus(401).send({
          error: "401",
          message: "Unauthorized",
          solution:
            "Kindly make sure to make request using x-api-key as a header. Get one Authentication key at https://api.pgamerx.com/register",
        })
      }
      if (!branch)
        return res.json([
          {
            error: "400 Error",
            message: "Bad Request",
            solution: "kindly double-check the endpoint. ",
          },
        ]);
      if (!joke_endpoints.includes(branch))
        return res.json([
          {
            error: "400 Error",
            message: "Bad Request",
            solution: "kindly double-check the endpoint. ",
          },
        ]);
      let request;
      if (destination.toLocaleLowerCase() == "dev") {
        request = "Programming";
      } else if (destination.toLocaleLowerCase() == "pun") {
        request = "Pun";
      } else if (destination.toLocaleLowerCase() == "spooky") {
        request = "Spooky";
      } else if (destination.toLocaleLowerCase() == "any") {
        request = "Any";
      }
      const r = await fetch(`https://v2.private-endpoint-on-my-domain/joke/${request}`);
      res.json(await r.json());
    } else if (base == "image") {
      let header = await req.get("x-api-key");
      if (!header) {
        res.sendStatus(401).send({
          error: "401",
          message: "Unauthorized",
          solution:
            "Kindly make sure to make request using x-api-key as a header. Get one Authentication key at https://api.pgamerx.com/register",
        })
      }
      const list = await keys.findOne({
        key: header,
      });
      if (!list) {

        res.sendStatus(401).send({
          error: "401",
          message: "Unauthorized",
          solution:
            "Kindly make sure to make request using x-api-key as a header. Get one Authentication key at https://api.pgamerx.com/register",
        })

      }
      if (!branch)
        return res.json([
          {
            error: "400 Error",
            message: "Bad Request",
            solution: "kindly double-check the endpoint. ",
          },
        ]);
      if (!image_endpoints.includes(branch))
        return res.json([
          {
            error: "400 Error",
            message: "Bad Request",
            solution: "kindly double-check the endpoint. ",
          },
        ]);
      const img = await randomPuppy(destination.toLocaleLowerCase());
      return res.json([img]);
    } else if (base == "ai") {
      let header = req.get("x-api-key");
      if (!header) {
        res.sendStatus(401).send({
          error: "401",
          message: "Unauthorized",
          solution:
            "Kindly make sure to make request using x-api-key as a header. Get one Authentication key at https://api.pgamerx.com/register",
        })
      }
      const list = await keys.findOne({
        key: header,
      });
      if (!list) {
        res.sendStatus(401).send({
          error: "401",
          message: "Unauthorized",
          solution:
            "Kindly make sure to make request using x-api-key as a header. Get one Authentication key at https://api.pgamerx.com/register",
        })
      }
      if (!branch)
        return res.json([
          {
            error: "400 Error",
            message: "Bad Request",
            solution: "kindly double-check the endpoint. ",
          },
        ]);
      if (branch !== "response")
        return res.json([
          {
            error: "400 Error",
            message: "Bad Request",
            solution: "kindly double-check the endpoint. ",
          },
        ]);
      let message = req.query.message;
      let language = req.query.language;
      let type = req.query.type;
      if (!message)
        return res.json([
          {
            error: "400 Error",
            message: "Bad Request",
            solution: "kindly make sure you have provided us with the message. ",
          },
        ]);

      if (
        message.toLowerCase().includes("hate") ||
        message.toLowerCase().includes("bad") ||
        message.toLowerCase().includes("suck")
      ) {
        return res.json([
          { success: true, message: "I am Sorry", api_key: header },
        ]);
      }

      if (type == "old" || type == "unstable") {
        if (!language) {
          let ress = await translate(message, { to: 'en' })
          let lang = await ress.from.language.iso
          lang = lang.toString()

          const history = [message]

          let replytemp = await ai(encodeURIComponent(message), history)
          let okbruhh = await translate(replytemp, { to: lang })
          let reply = okbruhh.text

          reply = reply.replace("api.affiliateplus.xyz", "India")

          return res.json([
            { success: true, message: reply, api_key: header },
          ]);
        }
        else {
          let lang = language;
          const history = [message]

          let replytemp = await ai(encodeURIComponent(message), history)
          let okbruhh = await translate(replytemp, { to: lang })
          let reply = okbruhh.text
          reply = reply.replace("api.affiliateplus.xyz", "India")
          return res.json([
            { success: true, message: reply, api_key: header },
          ]);
        }
      } else if (type == "stable" || type == "new") {
        if (!language) {
          let ress = await translate(message, { to: 'en' })
          let lang = await ress.from.language.iso
          lang = lang.toString()
          let bot_name = req.query.bot_name ? req.query.bot_name : "RSA"
          let dev_name = req.query.bot_name ? req.query.dev_name : "PGamerX"
          let unique_id = req.query.unique_id ? req.query.unique_id : header
          let reply = await chatbot.chat({
            message: message,
            name: bot_name,
            owner: dev_name,
            user: unique_id,
            language: lang,
          });
          if (!reply) {
            return res.json([
              { success: false, message: "Stable version is facing some issues, Kindly use unstable version till that!", api_key: header },
            ]);
          }
          reply = reply.replace("api.affiliateplus.xyz", "India")

          return res.json([
            { success: true, message: reply, api_key: header },
          ]);
          return;
        } else {
          let lang = language;
          let bot_name = req.query.bot_name ? req.query.bot_name : "RSA"
          let dev_name = req.query.bot_name ? req.query.dev_name : "PGamerX"
          let unique_id = req.query.unique_id ? req.query.unique_id : header
          let reply = await chatbot.chat({
            message: message,
            name: bot_name,
            owner: dev_name,
            user: unique_id,
            language: lang,
          });
          reply = reply.replace("api.affiliateplus.xyz", "India")


          return res.json([
            { success: true, message: reply, api_key: header },
          ])


        }
      }
    }
  });


app.get("/joke/:file", normal_min, normal_daily, async (req, res, next) => {
  res.json(["Version 2 is no longer supported. We updated you regarding this 1 month before. Kindly shift to Version3 Or Version4. Version 3 Docs - https://docs.pgamerx.com/v/v3/version-3/ or Version 4 Docs - https://docs.pgamerx.com/version-4"])

});

app.get("/ai/response", normal_min, normal_daily, async (req, res, next) => {
  res.json(["Version 2 is no longer supported. We updated you regarding this 1 month before. Kindly shift to Version3 Or Version4. Version 3 Docs - https://docs.pgamerx.com/v/v3/version-3/ or Version 4 Docs - https://docs.pgamerx.com/version-4"])
 });

app.get("/image/:file", normal_min, normal_daily, async (req, res, next) => {
  res.json(["Version 2 is no longer supported. We updated you regarding this 1 month before. Kindly shift to Version3 Or Version4. Version 3 Docs - https://docs.pgamerx.com/v/v3/version-3/ or Version 4 Docs - https://docs.pgamerx.com/version-4"])
});

/* 
____________________________________________
|                                           |
|                                           |
|          NO NEED TO                       |
|         TOUCH THIS Part                   |
|                                           |
_____________________________________________
*/

app.get("/assets/tether/tether.min.css", function (req, res) {
  res.sendFile(__dirname + "/" + "assets/tether/tether.min.css");
});

app.get("/assets/bootstrap/css/bootstrap.min.css", function (req, res) {
  res.sendFile(__dirname + "/" + "assets/bootstrap/css/bootstrap.min.css");
});

app.get("/assets/bootstrap/css/bootstrap-grid.min.css", function (req, res) {
  res.sendFile(__dirname + "/" + "assets/bootstrap/css/bootstrap-grid.min.css");
});

app.get("/assets/bootstrap/css/bootstrap-reboot.min.css", function (req, res) {
  res.sendFile(
    __dirname + "/" + "assets/bootstrap/css/bootstrap-reboot.min.css"
  );
});

app.get("/assets/theme/css/style.css", function (req, res) {
  res.sendFile(__dirname + "/" + "assets/theme/css/style.css");
});

app.get("/assets/mobirise/css/mbr-additional.css", function (req, res) {
  res.sendFile(__dirname + "/" + "assets/mobirise/css/mbr-additional.css");
});

app.get("/assets/mobirise/css/mbr-additional.css", function (req, res) {
  res.sendFile(__dirname + "/" + "assets/mobirise/css/mbr-additional.css");
});

app.get("/assets/web/assets/jquery/jquery.min.js", function (req, res) {
  res.sendFile(__dirname + "/" + "assets/web/assets/jquery/jquery.min.js");
});

app.get("/assets/popper/popper.min.js", function (req, res) {
  res.sendFile(__dirname + "/" + "assets/popper/popper.min.js");
});

app.get("/assets/tether/tether.min.js", function (req, res) {
  res.sendFile(__dirname + "/" + "assets/tether/tether.min.js");
});

app.get("/assets/bootstrap/js/bootstrap.min.js", function (req, res) {
  res.sendFile(__dirname + "/" + "assets/bootstrap/js/bootstrap.min.js");
});

app.get("/assets/smoothscroll/smooth-scroll.js", function (req, res) {
  res.sendFile(__dirname + "/" + "assets/smoothscroll/smooth-scroll.js");
});

app.get("/assets/parallax/jarallax.min.js", function (req, res) {
  res.sendFile(__dirname + "/" + "assets/parallax/jarallax.min.js");
});

app.get("/assets/mbr-tabs/mbr-tabs.js", function (req, res) {
  res.sendFile(__dirname + "/" + "assets/mbr-tabs/mbr-tabs.js");
});

app.get("/assets/theme/js/script.js", function (req, res) {
  res.sendFile(__dirname + "/" + "assets/theme/js/script.js");
});

app.get("/endpoints", normal_min, async (req, res, next) => {
  res.redirect("https://docs.pgamerx.com");
});

app.get("/endpoints/", normal_min, async (req, res, next) => {
  res.redirect("https://docs.pgamerx.com");
});

app.get("/", normal_min, async (req, res, next) => {
  res.redirect("https://api-info.pgamerx.com");
});

app.get("/register", async (req, res, next) => {
  res.redirect("https://api-info.pgamerx.com/register.html");
});
app.get("/register/", async (req, res, next) => {
  res.redirect("https://api-info.pgamerx.com/register.html");
});


app.get("/v3/mega/:file/:file2", mega_daily, async (req, res, next) => {
  let joke_endpoints = ["dev", "pun", "spooky", "any"];
  let image_endpoints = [
    "aww",
    "duck",
    "dog",
    "cat",
    "memes",
    "dankmemes",
    "wholesomememes",
    "art",
    "harrypottermemes",
    "facepalm",
    "holup",
  ];
  let bases = ["joke", "image", "ai"];
  let base = req.params.file;
  let branch = req.params.file2;
  let destination = branch

  if (base == "docs") {
    res.redirect("https://api.pgamerx.com/v3/docs")
  }
  if (!bases.includes(base))
    return res.json([
      {
        error: "400 Error",
        message: "Bad Request",
        solution: "kindly double-check the endpoint. ",
      },
    ]);
  if (base == "joke") {
    let header = await req.get("x-api-key");
    if (!header) {
      res.sendStatus(401).send({
        error: "401",
        message: "Unauthorized",
        solution:
          "Kindly make sure to make request using x-api-key as a header. Get one Authentication key at https://api.pgamerx.com/register",
      })
    }
    const list = await premium.findOne({
      key: header,
    });
    if (!list) {
      res.sendStatus(401).send({
        error: "401",
        message: "Unauthorized",
        solution:
          "Kindly make sure to make request using x-api-key as a header. Get one Authentication key at https://api.pgamerx.com/register",
      })
    }
    let typee = list.type
    if (typee !== "mega") {
      res.sendStatus(401).send({
        error: "401",
        message: "Unauthorized",
        solution:
          "You don't have the mega plan subscribed ",
      })
    }
    ;
    if (!branch)
      return res.json([
        {
          error: "400 Error",
          message: "Bad Request",
          solution: "kindly double-check the endpoint. ",
        },
      ]);
    if (!joke_endpoints.includes(branch))
      return res.json([
        {
          error: "400 Error",
          message: "Bad Request",
          solution: "kindly double-check the endpoint. ",
        },
      ]);
    let request;
    if (destination.toLocaleLowerCase() == "dev") {
      request = "Programming";
    } else if (destination.toLocaleLowerCase() == "pun") {
      request = "Pun";
    } else if (destination.toLocaleLowerCase() == "spooky") {
      request = "Spooky";
    } else if (destination.toLocaleLowerCase() == "any") {
      request = "Any";
    }
    const r = await fetch(`https://v2.private-endpoint-on-my-domain/joke/${request}`);
    res.json(await r.json());
  } else if (base == "image") {

    let header = await req.get("x-api-key");
    if (!header) {
    
        res.sendStatus(401).send({
          error: "401",
          message: "Unauthorized",
          solution:
            "Kindly make sure to make request using PREMIUM x-api-key as a header. Get one Authentication key at https://api.pgamerx.com/register",
        })
      
    }

    const list = await premium.findOne({
      key: header,
    });
    if (!list) {
      
        res.sendStatus(401).send({
          error: "401",
          message: "Unauthorized",
          solution:
            "Kindly make sure to make request using PREMIUM x-api-key as a header. Get one Authentication key at https://api.pgamerx.com/register",
        })
      
    }
    let typee = list.type
    if (typee !== "mega") return res.json([
      {
        error: "401",
        message: "Unauthorized",
        solution:
          "You don't have the mega plan subscribed ",
      },
    ]);
    if (!branch)
      return res.json([
        {
          error: "400 Error",
          message: "Bad Request",
          solution: "kindly double-check the endpoint. ",
        },
      ]);

    if (!branch)
      return res.json([
        {
          error: "400 Error",
          message: "Bad Request",
          solution: "kindly double-check the endpoint. ",
        },
      ]);
    if (!image_endpoints.includes(branch))
      return res.json([
        {
          error: "400 Error",
          message: "Bad Request",
          solution: "kindly double-check the endpoint. ",
        },
      ]);
    const img = await randomPuppy(destination.toLocaleLowerCase());
    return res.json([img]);
  } else if (base == "ai") {
    let header = await req.get("x-api-key");
    if (!header) {
      res.sendStatus(401).send({
        error: "401",
        message: "Unauthorized",
        solution:
          "Kindly make sure to make request using PREMIUM x-api-key as a header. Get one Authentication key at https://api.pgamerx.com/register",
      })
    }

    const list = await premium.findOne({
      key: header,
    });
    if (!list) {
      res.sendStatus(401).send({
        error: "401",
        message: "Unauthorized",
        solution:
          "Kindly make sure to make request using PREMIUM x-api-key as a header. Get one Authentication key at https://api.pgamerx.com/register",
      })
    }


    let typee = list.type
    if (typee !== "mega"){
        
       res.sendStatus(401).send({
        error: "401",
        message: "Unauthorized",
        solution:
          "Kindly make sure to make request using PREMIUM x-api-key as a header. Get one Authentication key at https://api.pgamerx.com/register",
      })
    
    }
    if (!branch)
      return res.json([
        {
          error: "400 Error",
          message: "Bad Request",
          solution: "kindly double-check the endpoint. ",
        },
      ]);
    if (!branch)
      return res.json([
        {
          error: "400 Error",
          message: "Bad Request",
          solution: "kindly double-check the endpoint. ",
        },
      ]);
    if (branch !== "response")
      return res.json([
        {
          error: "400 Error",
          message: "Bad Request",
          solution: "kindly double-check the endpoint. ",
        },
      ]);
    let message = req.query.message;
    let language = req.query.language;
    let type = req.query.type;
    if (!message)
      return res.json([
        {
          error: "400 Error",
          message: "Bad Request",
          solution: "kindly make sure you have provided us with the message. ",
        },
      ]);

    if (
      message.toLowerCase().includes("hate") ||
      message.toLowerCase().includes("bad") ||
      message.toLowerCase().includes("suck")
    ) {
      return res.json([
        { success: true, message: "I am Sorry", api_key: header },
      ]);
    }

    if (type == "old" || type == "unstable") {
      if (!language) {
        let ress = await translate(message, { to: 'en' })
        let lang = await ress.from.language.iso
        const history = [message]

        let replytemp = await ai(encodeURIComponent(message), history)
        let okbruhh = await translate(replytemp, { to: lang })
        let reply = okbruhh.text
        reply = reply.replace("api.affiliateplus.xyz", "India")

        return res.json([
          { success: true, message: reply, api_key: header },
        ]);
      }
      else {
        let lang = language;
        const history = [message]

        let replytemp = await ai(encodeURIComponent(message), history)
        let okbruhh = await translate(replytemp, { to: lang })
        let reply = okbruhh.text
        reply = reply.replace("api.affiliateplus.xyz", "India")

        return res.json([
          { success: true, message: reply, api_key: header },
        ]);
      }
    } else if (type == "stable" || type == "new") {
      if (!language) {
        let ress = await translate(message, { to: 'en' })
        let lang = await ress.from.language.iso
        let bot_name = req.query.bot_name ? req.query.bot_name : "RSA"
        let dev_name = req.query.bot_name ? req.query.dev_name : "PGamerX"
        let unique_id = req.query.unique_id ? req.query.unique_id : header
        let reply = await chatbot.chat({
          message: message,
          name: bot_name,
          owner: dev_name,
          user: unique_id,
          language: lang,
        });
        if (!reply) {
          return res.json([
            { success: false, message: "Stable version is facing some issues, Kindly use unstable version till that!", api_key: header },
          ]);
        }
        reply = reply.replace("api.affiliateplus.xyz", "India")

        return res.json([
          { success: true, message: reply, api_key: header },
        ]);

      } else {
        let lang = language;
        let bot_name = req.query.bot_name ? req.query.bot_name : "RSA"
        let dev_name = req.query.bot_name ? req.query.dev_name : "PGamerX"
        let unique_id = req.query.unique_id ? req.query.unique_id : header
        let reply = await chatbot.chat({
          message: message,
          name: bot_name,
          owner: dev_name,
          user: unique_id,
          language: lang,
        });
        reply = reply.replace("api.affiliateplus.xyz", "India")


        return res.json([
          { success: true, message: reply, api_key: header },
        ])


      }
    }
  }
});

app.get("/v3/pro/:file/:file2", pro_daily, pro_minute, async (req, res, next) => {
  let joke_endpoints = ["dev", "pun", "spooky", "any"];
  let image_endpoints = [
    "aww",
    "duck",
    "dog",
    "cat",
    "memes",
    "dankmemes",
    "wholesomememes",
    "art",
    "harrypottermemes",
    "facepalm",
    "holup",
  ];
  let bases = ["joke", "image", "ai"];
  let base = req.params.file;
  let branch = req.params.file2;
  let destination = branch

  if (base == "docs") {
    res.redirect("https://api.pgamerx.com/v3/docs")
  }
  if (!bases.includes(base))
    return res.json([
      {
        error: "400 Error",
        message: "Bad Request",
        solution: "kindly double-check the endpoint. ",
      },
    ]);
  if (base == "joke") {
    let header = await req.get("x-api-key");
    if (!header)
      {res.sendStatus(401).send({
        error: "401",
        message: "Unauthorized",
        solution:
          "Kindly make sure to make request using  x-api-key as a header. Get one Authentication key at https://api.pgamerx.com/register",
      })}
    const list = await premium.findOne({
      key: header,
    });
    if (!list)
      {res.sendStatus(401).send({
        error: "401",
        message: "Unauthorized",
        solution:
          "Kindly make sure to make request using PREMIUM x-api-key as a header. Get one Authentication key at https://api.pgamerx.com/register",
      })}
    let typee = list.type
    if (typee !== "pro"){res.sendStatus(401).send({
      error: "401",
      message: "Unauthorized",
      solution:
        "Kindly make sure to make request using PREMIUM x-api-key as a header. Get one Authentication key at https://api.pgamerx.com/register",
    })}
    if (!branch)
      return res.json([
        {
          error: "400 Error",
          message: "Bad Request",
          solution: "kindly double-check the endpoint. ",
        },
      ]);
    if (!joke_endpoints.includes(branch))
      return res.json([
        {
          error: "400 Error",
          message: "Bad Request",
          solution: "kindly double-check the endpoint. ",
        },
      ]);
    let request;
    if (destination.toLocaleLowerCase() == "dev") {
      request = "Programming";
    } else if (destination.toLocaleLowerCase() == "pun") {
      request = "Pun";
    } else if (destination.toLocaleLowerCase() == "spooky") {
      request = "Spooky";
    } else if (destination.toLocaleLowerCase() == "any") {
      request = "Any";
    }
    const r = await fetch(`https://v2.private-endpoint-on-my-domain/joke/${request}`);
    res.json(await r.json());
  } else if (base == "image") {

    let header = await req.get("x-api-key");
    if (!header)
     {res.sendStatus(401).send({
      error: "401",
      message: "Unauthorized",
      solution:
        "Kindly make sure to make request using PREMIUM x-api-key as a header. Get one Authentication key at https://api.pgamerx.com/register",
    })}
    const list = await premium.findOne({
      key: header,
    });
    if (!list)
     {res.sendStatus(401).send({
      error: "401",
      message: "Unauthorized",
      solution:
        "Kindly make sure to make request using PREMIUM x-api-key as a header. Get one Authentication key at https://api.pgamerx.com/register",
    })}
    let typee = list.type
    if (typee !== "pro") {res.sendStatus(401).send({
      error: "401",
      message: "Unauthorized",
      solution:
        "Kindly make sure to make request using PREMIUM x-api-key as a header. Get one Authentication key at https://api.pgamerx.com/register",
    })}
    if (!branch)
      return res.json([
        {
          error: "400 Error",
          message: "Bad Request",
          solution: "kindly double-check the endpoint. ",
        },
      ]);

    if (!branch)
      return res.json([
        {
          error: "400 Error",
          message: "Bad Request",
          solution: "kindly double-check the endpoint. ",
        },
      ]);
    if (!image_endpoints.includes(branch))
      return res.json([
        {
          error: "400 Error",
          message: "Bad Request",
          solution: "kindly double-check the endpoint. ",
        },
      ]);
    const img = await randomPuppy(destination.toLocaleLowerCase());
    return res.json([img]);
  } else if (base == "ai") {
    let header = await req.get("x-api-key");
    if (!header)
      {res.sendStatus(401).send({
        error: "401",
        message: "Unauthorized",
        solution:
          "Kindly make sure to make request using PREMIUM x-api-key as a header. Get one Authentication key at https://api.pgamerx.com/register",
      })}
    const list = await premium.findOne({
      key: header,
    });
    if (!list)
    {res.sendStatus(401).send({
      error: "401",
      message: "Unauthorized",
      solution:
        "Kindly make sure to make request using PREMIUM x-api-key as a header. Get one Authentication key at https://api.pgamerx.com/register",
    })}
    let typee = list.type
    if (typee !== "pro") {res.sendStatus(401).send({
      error: "401",
      message: "Unauthorized",
      solution:
        "Kindly make sure to make request using PREMIUM x-api-key as a header. Get one Authentication key at https://api.pgamerx.com/register",
    })}
    if (!branch)
      return res.json([
        {
          error: "400 Error",
          message: "Bad Request",
          solution: "kindly double-check the endpoint. ",
        },
      ]);
    if (!branch)
      return res.json([
        {
          error: "400 Error",
          message: "Bad Request",
          solution: "kindly double-check the endpoint. ",
        },
      ]);
    if (branch !== "response")
      return res.json([
        {
          error: "400 Error",
          message: "Bad Request",
          solution: "kindly double-check the endpoint. ",
        },
      ]);
    let message = req.query.message;
    let language = req.query.language;
    let type = req.query.type;
    if (!message)
      return res.json([
        {
          error: "400 Error",
          message: "Bad Request",
          solution: "kindly make sure you have provided us with the message. ",
        },
      ]);

    if (
      message.toLowerCase().includes("hate") ||
      message.toLowerCase().includes("bad") ||
      message.toLowerCase().includes("suck")
    ) {
      return res.json([
        { success: true, message: "I am Sorry", api_key: header },
      ]);
    }

    if (type == "old" || type == "unstable") {
      if (!language) {

        let ress = await translate(message, { to: 'en' })
        let lang = await ress.from.language.iso
        const history = [message]

        let replytemp = await ai(encodeURIComponent(message), history)
        let okbruhh = await translate(replytemp, { to: lang })
        let reply = okbruhh.text
        reply = reply.replace("api.affiliateplus.xyz", "India")

        return res.json([
          { success: true, message: reply, api_key: header },
        ]);
      }
      else {
        let lang = language;
        const history = [message]

        let replytemp = await ai(encodeURIComponent(message), history)
        let okbruhh = await translate(replytemp, { to: lang })
        let reply = okbruhh.text
        reply = reply.replace("api.affiliateplus.xyz", "India")

        return res.json([
          { success: true, message: reply, api_key: header },
        ]);
      }
    } else if (type == "stable" || type == "new") {
      if (!language) {
        let ress = await translate(message, { to: 'en' })
        let lang = await ress.from.language.iso
        let bot_name = req.query.bot_name ? req.query.bot_name : "RSA"
        let dev_name = req.query.bot_name ? req.query.dev_name : "PGamerX"
        let unique_id = req.query.unique_id ? req.query.unique_id : header
        let reply = await chatbot.chat({
          message: message,
          name: bot_name,
          owner: dev_name,
          user: unique_id,
          language: lang,
        });
        if (!reply) {
          return res.json([
            { success: false, message: "Stable version is facing some issues, Kindly use unstable version till that!", api_key: header },
          ]);
        }
        reply = reply.replace("api.affiliateplus.xyz", "India")

        return res.json([
          { success: true, message: reply, api_key: header },
        ]);
        return;
      } else {
        let lang = language;
        let bot_name = req.query.bot_name ? req.query.bot_name : "RSA"
        let dev_name = req.query.bot_name ? req.query.dev_name : "PGamerX"
        let unique_id = req.query.unique_id ? req.query.unique_id : header
        let reply = await chatbot.chat({
          message: message,
          name: bot_name,
          owner: dev_name,
          user: unique_id,
          language: lang,
        });
        reply = reply.replace("api.affiliateplus.xyz", "India")


        return res.json([
          { success: true, message: reply, api_key: header },
        ])


      }
    }
  }
});


app.get("/v3/ultra/:file/:file2", ultra_daily, ultra_min, async (req, res, next) => {
  let joke_endpoints = ["dev", "pun", "spooky", "any"];
  let image_endpoints = [
    "aww",
    "duck",
    "dog",
    "cat",
    "memes",
    "dankmemes",
    "wholesomememes",
    "art",
    "harrypottermemes",
    "facepalm",
    "holup",
  ];
  let bases = ["joke", "image", "ai"];
  let base = req.params.file;
  let branch = req.params.file2;
  let destination = branch

  if (base == "docs") {
    res.redirect("https://api.pgamerx.com/v3/docs")
  }
  if (!bases.includes(base))
    return res.json([
      {
        error: "400 Error",
        message: "Bad Request",
        solution: "kindly double-check the endpoint. ",
      },
    ]);
  if (base == "joke") {
    let header = await req.get("x-api-key");
    if (!header)
     {res.sendStatus(401).send({
      error: "401",
      message: "Unauthorized",
      solution:
        "Kindly make sure to make request using PREMIUM x-api-key as a header. Get one Authentication key at https://api.pgamerx.com/register",
    })}
    const list = await premium.findOne({
      key: header,
    });
    if (!list)
     {res.sendStatus(401).send({
      error: "401",
      message: "Unauthorized",
      solution:
        "Kindly make sure to make request using PREMIUM x-api-key as a header. Get one Authentication key at https://api.pgamerx.com/register",
    })}
    let typee = list.type
    if (typee !== "ultra"){res.sendStatus(401).send({
      error: "401",
      message: "Unauthorized",
      solution:
        "Kindly make sure to make request using PREMIUM x-api-key as a header. Get one Authentication key at https://api.pgamerx.com/register",
    })}
    if (!branch)
      return res.json([
        {
          error: "400 Error",
          message: "Bad Request",
          solution: "kindly double-check the endpoint. ",
        },
      ]);
    if (!joke_endpoints.includes(branch))
      return res.json([
        {
          error: "400 Error",
          message: "Bad Request",
          solution: "kindly double-check the endpoint. ",
        },
      ]);
    let request;
    if (destination.toLocaleLowerCase() == "dev") {
      request = "Programming";
    } else if (destination.toLocaleLowerCase() == "pun") {
      request = "Pun";
    } else if (destination.toLocaleLowerCase() == "spooky") {
      request = "Spooky";
    } else if (destination.toLocaleLowerCase() == "any") {
      request = "Any";
    }
    const r = await fetch(`https://v2.private-endpoint-on-my-domain/joke/${request}`);
    res.json(await r.json());
  } else if (base == "image") {

    let header = await req.get("x-api-key");
    if (!header)
    {res.sendStatus(401).send({
      error: "401",
      message: "Unauthorized",
      solution:
        "Kindly make sure to make request using PREMIUM x-api-key as a header. Get one Authentication key at https://api.pgamerx.com/register",
    })}
    const list = await premium.findOne({
      key: header,
    });
    if (!list)
    {res.sendStatus(401).send({
      error: "401",
      message: "Unauthorized",
      solution:
        "Kindly make sure to make request using PREMIUM x-api-key as a header. Get one Authentication key at https://api.pgamerx.com/register",
    })}
    let typee = list.type
    if (typee !== "ultra"){
      res.sendStatus(401).send({
        error: "401",
        message: "Unauthorized",
        solution:
          "Kindly make sure to make request using PREMIUM x-api-key as a header. Get one Authentication key at https://api.pgamerx.com/register",
      })
    }
    if (!branch)
      return res.json([
        {
          error: "400 Error",
          message: "Bad Request",
          solution: "kindly double-check the endpoint. ",
        },
      ]);

    if (!branch)
      return res.json([
        {
          error: "400 Error",
          message: "Bad Request",
          solution: "kindly double-check the endpoint. ",
        },
      ]);
    if (!image_endpoints.includes(branch))
      return res.json([
        {
          error: "400 Error",
          message: "Bad Request",
          solution: "kindly double-check the endpoint. ",
        },
      ]);
    const img = await randomPuppy(destination.toLocaleLowerCase());
    return res.json([img]);
  } else if (base == "ai") {
    let header = await req.get("x-api-key");
    if (!header){
    res.sendStatus(401).send({
      error: "401",
      message: "Unauthorized",
      solution:
        "Kindly make sure to make request using PREMIUM x-api-key as a header. Get one Authentication key at https://api.pgamerx.com/register",
    })
  }
    const list = await premium.findOne({
      key: header,
    });
    if (!list)
     {res.sendStatus(401).send({
      error: "401",
      message: "Unauthorized",
      solution:
        "Kindly make sure to make request using PREMIUM x-api-key as a header. Get one Authentication key at https://api.pgamerx.com/register",
    })}
    let typee = list.type
    if (typee !== "ultra") {res.sendStatus(401).send({
      error: "401",
      message: "Unauthorized",
      solution:
        "Kindly make sure to make request using PREMIUM x-api-key as a header. Get one Authentication key at https://api.pgamerx.com/register",
    })}
    if (!branch)
      return res.json([
        {
          error: "400 Error",
          message: "Bad Request",
          solution: "kindly double-check the endpoint. ",
        },
      ]);
    if (!branch)
      return res.json([
        {
          error: "400 Error",
          message: "Bad Request",
          solution: "kindly double-check the endpoint. ",
        },
      ]);
    if (branch !== "response")
      return res.json([
        {
          error: "400 Error",
          message: "Bad Request",
          solution: "kindly double-check the endpoint. ",
        },
      ]);
    let message = req.query.message;
    let language = req.query.language;
    let type = req.query.type;
    if (!message)
      return res.json([
        {
          error: "400 Error",
          message: "Bad Request",
          solution: "kindly make sure you have provided us with the message. ",
        },
      ]);

    if (
      message.toLowerCase().includes("hate") ||
      message.toLowerCase().includes("bad") ||
      message.toLowerCase().includes("suck")
    ) {
      return res.json([
        { success: true, message: "I am Sorry", api_key: header },
      ]);
    }

    if (type == "old" || type == "unstable") {
      if (!language) {

        let ress = await translate(message, { to: 'en' })
        let lang = await ress.from.language.iso
        const history = [message]

        let replytemp = await ai(encodeURIComponent(message), history)
        let okbruhh = await translate(replytemp, { to: lang })
        let reply = okbruhh.text
        reply = reply.replace("api.affiliateplus.xyz", "India")

        return res.json([
          { success: true, message: reply, api_key: header },
        ]);
      }
      else {
        let lang = language;
        const history = [message]

        let replytemp = await ai(encodeURIComponent(message), history)

        let okbruhh = await translate(replytemp, { to: lang })
        let reply = okbruhh.text
        reply = reply.replace("api.affiliateplus.xyz", "India")

        return res.json([
          { success: true, message: reply, api_key: header },
        ]);
      }
    } else if (type == "stable" || type == "new") {
      if (!language) {
        let ress = await translate(message, { to: 'en' })
        let lang = await ress.from.language.iso
        let bot_name = req.query.bot_name ? req.query.bot_name : "RSA"
        let dev_name = req.query.bot_name ? req.query.dev_name : "PGamerX"
        let unique_id = req.query.unique_id ? req.query.unique_id : header
        let reply = await chatbot.chat({
          message: message,
          name: bot_name,
          owner: dev_name,
          user: unique_id,
          language: lang,
        });
        if (!reply) {
          return res.json([
            { success: false, message: "Stable version is facing some issues, Kindly use unstable version till that!", api_key: header },
          ]);
        }
        reply = reply.replace("api.affiliateplus.xyz", "India")


        return res.json([
          { success: true, message: reply, api_key: header },
        ]);
        return;
      } else {
        let lang = language;
        let bot_name = req.query.bot_name ? req.query.bot_name : "RSA"
        let dev_name = req.query.bot_name ? req.query.dev_name : "PGamerX"
        let unique_id = req.query.unique_id ? req.query.unique_id : header
        let reply = await chatbot.chat({
          message: message,
          name: bot_name,
          owner: dev_name,
          user: unique_id,
          language: lang,
        });
        reply = reply.replace("api.affiliateplus.xyz", "India")

        return res.json([
          { success: true, message: reply, api_key: header },
        ])


      }
    }
  }
});



app.get("/v3/biz/:file/:file2", biz_daily, async (req, res, next) => {
  let joke_endpoints = ["dev", "pun", "spooky", "any"];
  let image_endpoints = [
    "aww",
    "duck",
    "dog",
    "cat",
    "memes",
    "dankmemes",
    "wholesomememes",
    "art",
    "harrypottermemes",
    "facepalm",
    "holup",
  ];
  let bases = ["joke", "image", "ai"];
  let base = req.params.file;
  let branch = req.params.file2;
  let destination = branch

  if (base == "docs") {
    res.redirect("https://api.pgamerx.com/v3/docs")
  }
  if (!bases.includes(base))
    return res.json([
      {
        error: "400 Error",
        message: "Bad Request",
        solution: "kindly double-check the endpoint. ",
      },
    ]);
  if (base == "joke") {
    let header = await req.get("x-api-key");
    if (!header)
     {res.sendStatus(401).send({
      error: "401",
      message: "Unauthorized",
      solution:
        "Kindly make sure to make request using PREMIUM x-api-key as a header. Get one Authentication key at https://api.pgamerx.com/register",
    })}
    const list = await premium.findOne({
      key: header,
    });
    if (!list)
     {res.sendStatus(401).send({
      error: "401",
      message: "Unauthorized",
      solution:
        "Kindly make sure to make request using PREMIUM x-api-key as a header. Get one Authentication key at https://api.pgamerx.com/register",
    })}
    let typee = list.type
    if (typee !== "biz") {res.sendStatus(401).send({
      error: "401",
      message: "Unauthorized",
      solution:
        "Kindly make sure to make request using PREMIUM x-api-key as a header. Get one Authentication key at https://api.pgamerx.com/register",
    })}
    if (!branch)
      return res.json([
        {
          error: "400 Error",
          message: "Bad Request",
          solution: "kindly double-check the endpoint. ",
        },
      ]);
    if (!joke_endpoints.includes(branch))
      return res.json([
        {
          error: "400 Error",
          message: "Bad Request",
          solution: "kindly double-check the endpoint. ",
        },
      ]);
    let request;
    if (destination.toLocaleLowerCase() == "dev") {
      request = "Programming";
    } else if (destination.toLocaleLowerCase() == "pun") {
      request = "Pun";
    } else if (destination.toLocaleLowerCase() == "spooky") {
      request = "Spooky";
    } else if (destination.toLocaleLowerCase() == "any") {
      request = "Any";
    }
    const r = await fetch(`https://v2.private-endpoint-on-my-domain/joke/${request}`);
    res.json(await r.json());
  } else if (base == "image") {

    let header = await req.get("x-api-key");
    if (!header)
      {res.sendStatus(401).send({
        error: "401",
        message: "Unauthorized",
        solution:
          "Kindly make sure to make request using PREMIUM x-api-key as a header. Get one Authentication key at https://api.pgamerx.com/register",
      })}
    const list = await premium.findOne({
      key: header,
    });
    if (!list)
      {res.sendStatus(401).send({
        error: "401",
        message: "Unauthorized",
        solution:
          "Kindly make sure to make request using PREMIUM x-api-key as a header. Get one Authentication key at https://api.pgamerx.com/register",
      })}
    let typee = list.type
    if (typee !== "biz") {res.sendStatus(401).send({
      error: "401",
      message: "Unauthorized",
      solution:
        "Kindly make sure to make request using PREMIUM x-api-key as a header. Get one Authentication key at https://api.pgamerx.com/register",
    })}
    if (!branch)
      return res.json([
        {
          error: "400 Error",
          message: "Bad Request",
          solution: "kindly double-check the endpoint. ",
        },
      ]);

    if (!branch)
      return res.json([
        {
          error: "400 Error",
          message: "Bad Request",
          solution: "kindly double-check the endpoint. ",
        },
      ]);
    if (!image_endpoints.includes(branch))
      return res.json([
        {
          error: "400 Error",
          message: "Bad Request",
          solution: "kindly double-check the endpoint. ",
        },
      ]);
    const img = await randomPuppy(destination.toLocaleLowerCase());
    return res.json([img]);
  } else if (base == "ai") {
    let header = await req.get("x-api-key");
    if (!header)
     {res.sendStatus(401).send({
      error: "401",
      message: "Unauthorized",
      solution:
        "Kindly make sure to make request using PREMIUM x-api-key as a header. Get one Authentication key at https://api.pgamerx.com/register",
    })}
    const list = await premium.findOne({
      key: header,
    });
    if (!list)
      {res.sendStatus(401).send({
        error: "401",
        message: "Unauthorized",
        solution:
          "Kindly make sure to make request using PREMIUM x-api-key as a header. Get one Authentication key at https://api.pgamerx.com/register",
      })}
    let typee = list.type
    if (typee !== "biz") {res.sendStatus(401).send({
      error: "401",
      message: "Unauthorized",
      solution:
        "Kindly make sure to make request using PREMIUM x-api-key as a header. Get one Authentication key at https://api.pgamerx.com/register",
    })}
    if (!branch)
      return res.json([
        {
          error: "400 Error",
          message: "Bad Request",
          solution: "kindly double-check the endpoint. ",
        },
      ]);
    if (!branch)
      return res.json([
        {
          error: "400 Error",
          message: "Bad Request",
          solution: "kindly double-check the endpoint. ",
        },
      ]);
    if (branch !== "response")
      return res.json([
        {
          error: "400 Error",
          message: "Bad Request",
          solution: "kindly double-check the endpoint. ",
        },
      ]);
    let message = req.query.message;
    let language = req.query.language;
    let type = req.query.type;
    if (!message)
      return res.json([
        {
          error: "400 Error",
          message: "Bad Request",
          solution: "kindly make sure you have provided us with the message. ",
        },
      ]);

    if (
      message.toLowerCase().includes("hate") ||
      message.toLowerCase().includes("bad") ||
      message.toLowerCase().includes("suck")
    ) {
      return res.json([
        { success: true, message: "I am Sorry", api_key: header },
      ]);
    }

    if (type == "old" || type == "unstable") {
      if (!language) {

        let ress = await translate(message, { to: 'en' })
        let lang = await ress.from.language.iso
        const history = [message]
        let replytemp = await ai(encodeURIComponent(message), history)
        let okbruhh = await translate(replytemp, { to: lang })
        let reply = okbruhh.text
        reply = reply.replace("api.affiliateplus.xyz", "India")

        return res.json([
          { success: true, message: reply, api_key: header },
        ]);
      }
      else {
        let lang = language;
        const history = [message]

        let replytemp = await ai(encodeURIComponent(message), history)
        let okbruhh = await translate(replytemp, { to: lang })
        let reply = okbruhh.text
        reply = reply.replace("api.affiliateplus.xyz", "India")

        return res.json([
          { success: true, message: reply, api_key: header },
        ]);
      }
    } else if (type == "stable" || type == "new") {
      if (!language) {
        let ress = await translate(message, { to: 'en' })
        let lang = await ress.from.language.iso
        let bot_name = req.query.bot_name ? req.query.bot_name : "RSA"
        let dev_name = req.query.bot_name ? req.query.dev_name : "PGamerX"
        let unique_id = req.query.unique_id ? req.query.unique_id : header
        let reply = await chatbot.chat({
          message: message,
          name: bot_name,
          owner: dev_name,
          user: unique_id,
          language: lang,
        });
        if (!reply) {
          return res.json([
            { success: false, message: "Stable version is facing some issues, Kindly use unstable version till that!", api_key: header },
          ]);
        }
        reply = reply.replace("api.affiliateplus.xyz", "India")

        return res.json([
          { success: true, message: reply, api_key: header },
        ]);
        return;
      } else {
        let lang = language;
        let bot_name = req.query.bot_name ? req.query.bot_name : "RSA"
        let dev_name = req.query.bot_name ? req.query.dev_name : "PGamerX"
        let unique_id = req.query.unique_id ? req.query.unique_id : header
        let reply = await chatbot.chat({
          message: message,
          name: bot_name,
          owner: dev_name,
          user: unique_id,
          language: lang,
        });
        reply = reply.replace("api.affiliateplus.xyz", "India")

        return res.json([
          { success: true, message: reply, api_key: header },
        ])


      }
    }
  }
});

let v4Weather = require("./routes/v4/weather")
let v4AI = require("./routes/v4/ai")
let proAI = require("./routes/premium/ai-pro")
let ultraAI = require("./routes/premium/ai-ultra")
let bizAI = require("./routes/premium/ai-biz")
let megaAI = require("./routes/premium/ai-mega")
let jokeNormal = require("./routes/v4/joke")
let imageNormal = require("./routes/v4/image")
let waifupro = require("./routes/premium/waifu-pro")
let waifuultra = require("./routes/premium/waifu-ultra")
let waifubiz = require("./routes/premium/waifu-biz")
let waifumega = require("./routes/premium/waifu-mega")

app.use("/v4/biz/waifu", waifubiz)
app.use("/v4/ultra/waifu", waifuultra)
app.use("/v4/pro/waifu", waifupro)
app.use("/v4/mega/waifu", waifumega)
app.use("/v4/ai", v4AI)
app.use("/v4/image", imageNormal)
app.use("/v4/joke", jokeNormal)
app.use("/v4/pro/ai", proAI)
app.use("/v4/ultra/ai", ultraAI)
app.use("/v4/biz/ai", bizAI)
app.use("/v4/mega/ai", megaAI)
app.use("/v4/weather", v4Weather)


app.get("*", function (req, res) {
  res.json([
    { error: "true" },
    { code: "400" },
    { message: "Bad request(Incorrect endpoint)" },
  ]);
});

