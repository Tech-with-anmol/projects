import aiohttp
import asyncio
import urllib.parse
message = "Hello!"
encoded = urllib.parse.quote(message)
key = "Your API Key"
header = {"x-api-key": key}
type = "stable"
params = {'type':type , 'message':encoded}
async def start():
    async with aiohttp.ClientSession(headers=header) as session:
        async with session.get(url='https://api.pgamerx.com/v3/ai/response', params=params) as resp:
            text = await resp.json()
            print(resp.status)
            print(text[0]['message'])

loop = asyncio.get_event_loop()
loop.run_until_complete(start())
