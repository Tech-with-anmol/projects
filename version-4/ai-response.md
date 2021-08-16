---
description: Get AI Based response from the API for free
---

# AI Response



{% api-method method="get" host="https://api.pgamerx.com" path="/v4/ai" %}
{% api-method-summary %}
Get AI Response
{% endapi-method-summary %}

{% api-method-description %}
This endpoint allows you to get AI Response
{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-path-parameters %}
{% api-method-parameter name="server" type="string" required=false %}
Which server you want to get Response from. It's primary by default. More info available on previous page
{% endapi-method-parameter %}

{% api-method-parameter name="master" type="string" required=false %}
Name of the guy who made the bot\(optional\)
{% endapi-method-parameter %}

{% api-method-parameter name="bot" type="string" required=false %}
Name of the bot\(optional\)
{% endapi-method-parameter %}

{% api-method-parameter name="language" type="string" required=false %}
Which language you want the bot to reply in \(optional\)
{% endapi-method-parameter %}

{% api-method-parameter name="message" type="string" required=true %}
The message you want to say to the AI
{% endapi-method-parameter %}

{% api-method-parameter name="uid" type="string" %}
A unique USER ID which you can use to offer more personalised experience to your user \(optional\)
{% endapi-method-parameter %}
{% endapi-method-path-parameters %}

{% api-method-headers %}
{% api-method-parameter name="x-api-key" type="string" required=true %}
This is the API key which you need to get at api.pgamerx.com/register.
{% endapi-method-parameter %}
{% endapi-method-headers %}
{% endapi-method-request %}

{% api-method-response %}
{% api-method-response-example httpCode=200 %}
{% api-method-response-example-description %}
Successfully retrieved.
{% endapi-method-response-example-description %}

```
{message: "Some Message" , "response_time" : "normal"}
```
{% endapi-method-response-example %}

{% api-method-response-example httpCode=401 %}
{% api-method-response-example-description %}
This means you are missing the API key
{% endapi-method-response-example-description %}

```
Unauthorized
```
{% endapi-method-response-example %}

{% api-method-response-example httpCode=403 %}
{% api-method-response-example-description %}
This means your API key is incorrect
{% endapi-method-response-example-description %}

```
Forbidden
```
{% endapi-method-response-example %}
{% endapi-method-response %}
{% endapi-method-spec %}
{% endapi-method %}

