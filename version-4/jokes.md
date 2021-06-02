---
description: Get Jokes from the API
---

# Jokes

{% api-method method="get" host="https://api.pgamerx.com" path="/v4/joke/:type" %}
{% api-method-summary %}
Get Jokes
{% endapi-method-summary %}

{% api-method-description %}
This endpoint allows you to get jokes.
{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-headers %}
{% api-method-parameter name="x-api-key" type="string" required=true %}
Your API key, get one from api.pgamerx.com/register
{% endapi-method-parameter %}
{% endapi-method-headers %}

{% api-method-query-parameters %}
{% api-method-parameter name="type" type="string" required=true %}
What kind of joke you want. types available at u.pgamerx.com/types
{% endapi-method-parameter %}
{% endapi-method-query-parameters %}
{% endapi-method-request %}

{% api-method-response %}
{% api-method-response-example httpCode=200 %}
{% api-method-response-example-description %}
 Successfully retrieved.
{% endapi-method-response-example-description %}

```
{    "name": "Cake's name",    "recipe": "Cake's recipe name",    "cake": "Binary cake"}
```
{% endapi-method-response-example %}

{% api-method-response-example httpCode=401 %}
{% api-method-response-example-description %}
API Key is missing
{% endapi-method-response-example-description %}

```
Unauthorized
```
{% endapi-method-response-example %}

{% api-method-response-example httpCode=403 %}
{% api-method-response-example-description %}
Incorrect API key
{% endapi-method-response-example-description %}

```
Forbidden
```
{% endapi-method-response-example %}
{% endapi-method-response %}
{% endapi-method-spec %}
{% endapi-method %}



