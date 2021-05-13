import aiohttp
import asyncio
key = "Your API Key"
header = {"x-api-key": key}
async def start():
    async with aiohttp.ClientSession(headers=header) as session:
        async with session.get(url='https://api.pgamerx.com/v3/joke/any') as resp:
            text = await resp.json()
            print(resp.status)
            print(text)

loop = asyncio.get_event_loop()
loop.run_until_complete(start())
