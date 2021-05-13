import fetch from "node-fetch"

fetch(`https://api.pgamerx.com/joke/any`, {
        method: 'GET',
        headers: { 'x-api-key': 'your-api-key' },
    })
    .then(res => res.json())
    .then(json => console.log(json));
