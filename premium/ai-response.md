---
description: Get AI response in premium version
---

# AI Response

{% api-method method="get" host="https://api.pgamerx.com" path="/v4/:plan/ai" %}
{% api-method-summary %}
Get AI Response
{% endapi-method-summary %}

{% api-method-description %}
This endpoint allows you to get AI Response .
{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-path-parameters %}
{% api-method-parameter name="plan" type="string" required=true %}
Which Plan you have purchased..
{% endapi-method-parameter %}
{% endapi-method-path-parameters %}

{% api-method-headers %}
{% api-method-parameter name="x-api-key" type="string" required=true %}
Your api key 
{% endapi-method-parameter %}
{% endapi-method-headers %}

{% api-method-query-parameters %}
{% api-method-parameter name="uid" type="string" required=false %}
Unique USER ID
{% endapi-method-parameter %}

{% api-method-parameter name="server" type="string" required=true %}
Which server you want to get response from. For more info check previous page
{% endapi-method-parameter %}

{% api-method-parameter name="master" type="string" required=false %}
Name of owner of the bot
{% endapi-method-parameter %}

{% api-method-parameter name="bot" type="string" required=false %}
Name of the bot
{% endapi-method-parameter %}

{% api-method-parameter name="lanugage" type="string" %}
If you want to get AI response in a specific language.
{% endapi-method-parameter %}

{% api-method-parameter name="message" type="string" required=true %}
Message input
{% endapi-method-parameter %}
{% endapi-method-query-parameters %}
{% endapi-method-request %}

{% api-method-response %}
{% api-method-response-example httpCode=200 %}
{% api-method-response-example-description %}
successfully retrieved.
{% endapi-method-response-example-description %}

```
{message: "Some message" , response_time: "normal"}
```
{% endapi-method-response-example %}

{% api-method-response-example httpCode=401 %}
{% api-method-response-example-description %}
Your API Key is missing
{% endapi-method-response-example-description %}

```
Unauthorized
```
{% endapi-method-response-example %}

{% api-method-response-example httpCode=403 %}
{% api-method-response-example-description %}
You have not subscribed to that premium plan
{% endapi-method-response-example-description %}

```
Forbidden
```
{% endapi-method-response-example %}
{% endapi-method-response %}
{% endapi-method-spec %}
{% endapi-method %}

{% api-method method="get" host="https://api.pgamerx.com" path="/beta/ai" %}
{% api-method-summary %}

{% endapi-method-summary %}

{% api-method-description %}

{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-path-parameters %}
{% api-method-parameter name="server" type="string" required=false %}
Which server you want to get Response from. It's primary by default. More info available on previous page
{% endapi-method-parameter %}
{% endapi-method-path-parameters %}
{% endapi-method-request %}

{% api-method-response %}
{% api-method-response-example httpCode=200 %}
{% api-method-response-example-description %}

{% endapi-method-response-example-description %}

```

```
{% endapi-method-response-example %}
{% endapi-method-response %}
{% endapi-method-spec %}
{% endapi-method %}

{% api-method method="get" host="https://api.pgamerx.com" path="/beta/ai" %}
{% api-method-summary %}

{% endapi-method-summary %}

{% api-method-description %}

{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-path-parameters %}
{% api-method-parameter name="server" type="string" required=false %}
Which server you want to get Response from. It's primary by default. More info available on previous page
{% endapi-method-parameter %}
{% endapi-method-path-parameters %}
{% endapi-method-request %}

{% api-method-response %}
{% api-method-response-example httpCode=200 %}
{% api-method-response-example-description %}

{% endapi-method-response-example-description %}

```

```
{% endapi-method-response-example %}
{% endapi-method-response %}
{% endapi-method-spec %}
{% endapi-method %}

{% api-method method="get" host="https://api.pgamerx.com" path="/beta/ai" %}
{% api-method-summary %}

{% endapi-method-summary %}

{% api-method-description %}

{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-path-parameters %}
{% api-method-parameter name="server" type="string" required=false %}
Which server you want to get Response from. It's primary by default. More info available on previous page
{% endapi-method-parameter %}
{% endapi-method-path-parameters %}
{% endapi-method-request %}

{% api-method-response %}
{% api-method-response-example httpCode=200 %}
{% api-method-response-example-description %}

{% endapi-method-response-example-description %}

```

```
{% endapi-method-response-example %}
{% endapi-method-response %}
{% endapi-method-spec %}
{% endapi-method %}

{% api-method method="get" host="https://api.pgamerx.com" path="/beta/ai" %}
{% api-method-summary %}

{% endapi-method-summary %}

{% api-method-description %}

{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-path-parameters %}
{% api-method-parameter name="server" type="string" required=false %}
Which server you want to get Response from. It's primary by default. More info available on previous page
{% endapi-method-parameter %}
{% endapi-method-path-parameters %}
{% endapi-method-request %}

{% api-method-response %}
{% api-method-response-example httpCode=200 %}
{% api-method-response-example-description %}

{% endapi-method-response-example-description %}

```

```
{% endapi-method-response-example %}
{% endapi-method-response %}
{% endapi-method-spec %}
{% endapi-method %}



