---
description: Get AI Response with increased requests. Included in your premium plan only
---

# GET /ai

{% api-method method="get" host="https://api.pgamerx.com" path="/v5/premium/:plan/ai" %}
{% api-method-summary %}
AI Response
{% endapi-method-summary %}

{% api-method-description %}
Get AI Response
{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-path-parameters %}
{% api-method-parameter name="plan" type="string" required=true %}
What plan have you purchased?
{% endapi-method-parameter %}
{% endapi-method-path-parameters %}

{% api-method-headers %}
{% api-method-parameter name="Authorization" type="string" required=true %}
Your PREMIUM Api key
{% endapi-method-parameter %}
{% endapi-method-headers %}

{% api-method-query-parameters %}
{% api-method-parameter name="message" type="string" required=true %}
Message you want AI to respond to 
{% endapi-method-parameter %}

{% api-method-parameter name="server" type="string" required=true %}
What server you want to get response from? `main` or `backup`
{% endapi-method-parameter %}
{% endapi-method-query-parameters %}
{% endapi-method-request %}

{% api-method-response %}
{% api-method-response-example httpCode=200 %}
{% api-method-response-example-description %}
Done! Success
{% endapi-method-response-example-description %}

```text
{response: "The response", server: "main/backup", uid: 69}
```
{% endapi-method-response-example %}

{% api-method-response-example httpCode=400 %}
{% api-method-response-example-description %}
Message/Server is missing
{% endapi-method-response-example-description %}

```
Message/Server is missing
```
{% endapi-method-response-example %}

{% api-method-response-example httpCode=401 %}
{% api-method-response-example-description %}
API key is missing
{% endapi-method-response-example-description %}

```
Premium API Key is missing! Kindly get one at api.pgamerx.com/register
```
{% endapi-method-response-example %}

{% api-method-response-example httpCode=403 %}
{% api-method-response-example-description %}
API key incorrect/Plan incorrect
{% endapi-method-response-example-description %}

```
Premium API Key is incorrect, kindly recheck
The Premium API Key is not valid for plan
```
{% endapi-method-response-example %}
{% endapi-method-response %}
{% endapi-method-spec %}
{% endapi-method %}

### Customisation 

Optional Query Parameters For Customisation - 

{% page-ref page="customisation.md" %}

