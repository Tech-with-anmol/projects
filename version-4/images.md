---
description: Get Images from the API
---

# Images

{% api-method method="get" host="https://api.pgamerx.com" path="/v4/image/" %}
{% api-method-summary %}
Get Image Based Response
{% endapi-method-summary %}

{% api-method-description %}
This endpoint allows you to get Images.
{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-headers %}
{% api-method-parameter name="x-api-key" type="string" required=true %}
Your API Key. Get one for free at api.pgamerx.com/register
{% endapi-method-parameter %}
{% endapi-method-headers %}

{% api-method-query-parameters %}
{% api-method-parameter name="type" type="string" required=true %}
What kind of image you want. Types available at u.pgamerx.com/types
{% endapi-method-parameter %}
{% endapi-method-query-parameters %}
{% endapi-method-request %}

{% api-method-response %}
{% api-method-response-example httpCode=200 %}
{% api-method-response-example-description %}
Successfully retrieved.
{% endapi-method-response-example-description %}

```
[
  "http://imgur.com/XSl0TH6.jpg"
]
```
{% endapi-method-response-example %}

{% api-method-response-example httpCode=401 %}
{% api-method-response-example-description %}
You are missing an API key
{% endapi-method-response-example-description %}

```
Unauthorized
```
{% endapi-method-response-example %}

{% api-method-response-example httpCode=403 %}
{% api-method-response-example-description %}
API Key is incorrect
{% endapi-method-response-example-description %}

```
Forbidden
```
{% endapi-method-response-example %}
{% endapi-method-response %}
{% endapi-method-spec %}
{% endapi-method %}



