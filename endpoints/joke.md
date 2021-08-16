# GET /joke/

{% api-method method="get" host="https://api.pgamerx.com" path="/v5/joke" %}
{% api-method-summary %}
Joke
{% endapi-method-summary %}

{% api-method-description %}
Get funny Jokes
{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-headers %}
{% api-method-parameter name="Authorization" type="string" required=true %}
Here you provide the API key you got after registering at api.pgamerx.com/register
{% endapi-method-parameter %}
{% endapi-method-headers %}

{% api-method-query-parameters %}
{% api-method-parameter name="type" type="string" required=true %}
What type of Joke do you want?
{% endapi-method-parameter %}

{% api-method-parameter name="blacklist" type="string" required=false %}
Can be used for Blacklisting specific types of joke. you can select multiple flags with the help of commas. For eg - `?blacklist=nsfw,sexist.....`
{% endapi-method-parameter %}
{% endapi-method-query-parameters %}
{% endapi-method-request %}

{% api-method-response %}
{% api-method-response-example httpCode=200 %}
{% api-method-response-example-description %}
Done! Success
{% endapi-method-response-example-description %}

```
{
  "error": false,
  "category": "Programming",
  "type": "single",
  "joke": "A man is smoking a cigarette and blowing smoke rings into the air. His girlfriend becomes irritated with the smoke and says \"Can't you see the warning on the cigarette pack? Smoking is hazardous to your health!\" to which the man replies, \"I am a programmer.  We don't worry about warnings; we only worry about errors.\"",
  "flags": {
    "nsfw": false,
    "religious": false,
    "political": false,
    "racist": false,
    "sexist": false,
    "explicit": false
  },
  "id": 38,
  "safe": true,
  "lang": "en"
}
```
{% endapi-method-response-example %}

{% api-method-response-example httpCode=400 %}
{% api-method-response-example-description %}
Type is missing or type is incorrect or Flags are incorrect\(if provided\)
{% endapi-method-response-example-description %}

```
No Type Provided
Invalid Type Provided
Invalid Flags Provided

```
{% endapi-method-response-example %}

{% api-method-response-example httpCode=401 %}
{% api-method-response-example-description %}

{% endapi-method-response-example-description %}

```
API Key is missing! Kindly get one at api.pgamerx.com/register
```
{% endapi-method-response-example %}

{% api-method-response-example httpCode=403 %}
{% api-method-response-example-description %}
Incorrect API key
{% endapi-method-response-example-description %}

```
Forbidden! API Key is incorrect, kindly recheck
```
{% endapi-method-response-example %}
{% endapi-method-response %}
{% endapi-method-spec %}
{% endapi-method %}

Available Types = `["any", "dark", "pun", "spooky", "christmas", "Programming", "misc"]`

Available Flags for Blacklisting - `["nsfw","religious","political","racist","sexist","explicit"]`

