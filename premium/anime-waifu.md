---
description: Get your favourite Waifu using RSA (SFW)
---

# Anime/Waifu

{% api-method method="get" host="https://api.pgamerx.com" path="/v4/:plan/waifu/:type" %}
{% api-method-summary %}
Get Waifu
{% endapi-method-summary %}

{% api-method-description %}
This endpoint allows you to get WAIFU pics \(SFW\)
{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-path-parameters %}
{% api-method-parameter name="type" type="string" required=true %}
What type of Waifu you want, types available on u.pgamerx.com/types
{% endapi-method-parameter %}

{% api-method-parameter name="plan" type="string" required=true %}
What plan have you purchased.
{% endapi-method-parameter %}
{% endapi-method-path-parameters %}

{% api-method-headers %}
{% api-method-parameter name="x-api-key" type="string" required=true %}
Your API key
{% endapi-method-parameter %}
{% endapi-method-headers %}
{% endapi-method-request %}

{% api-method-response %}
{% api-method-response-example httpCode=200 %}
{% api-method-response-example-description %}
Waifu successfully retrieved.
{% endapi-method-response-example-description %}

```
{url : "image-url"}
```
{% endapi-method-response-example %}

{% api-method-response-example httpCode=401 %}
{% api-method-response-example-description %}
API key is missing
{% endapi-method-response-example-description %}

```
Unauthorized
```
{% endapi-method-response-example %}

{% api-method-response-example httpCode=403 %}
{% api-method-response-example-description %}
API key is incorrect/Wrong plan
{% endapi-method-response-example-description %}

```
Forbidden
```
{% endapi-method-response-example %}
{% endapi-method-response %}
{% endapi-method-spec %}
{% endapi-method %}



