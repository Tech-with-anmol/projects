import fetch from "node-fetch"
let message = "Some message"
let encoded = encodeURIComponent(message)
fetch(`https://api.pgamerx.com/ai/response?message=${encoded}&type=stable`, {
        method: 'GET',
        headers: { 'x-api-key': 'your-api-key' },
    })
    .then(res => res.json())
    .then(json => console.log(json));
