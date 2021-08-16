---
description: >-
  Get AI based response using Random-Stuff-API. Included in your Free as well as
  Premium Plan
---

# GET /ai

{% api-method method="get" host="https://api.pgamerx.com" path="/v5/ai" %}
{% api-method-summary %}
AI response
{% endapi-method-summary %}

{% api-method-description %}
Get AI-Based Response
{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-headers %}
{% api-method-parameter name="Authorization" type="string" required=true %}
Your api key derived from api.pgamerx.com/register
{% endapi-method-parameter %}
{% endapi-method-headers %}

{% api-method-query-parameters %}
{% api-method-parameter name="message" type="string" required=true %}
The message you want bot to respond to 
{% endapi-method-parameter %}
{% endapi-method-query-parameters %}
{% endapi-method-request %}

{% api-method-response %}
{% api-method-response-example httpCode=200 %}
{% api-method-response-example-description %}
Done! Success 
{% endapi-method-response-example-description %}

```
{response: "The response", server: "main/backup", uid: 69}
```
{% endapi-method-response-example %}

{% api-method-response-example httpCode=400 %}
{% api-method-response-example-description %}
You did not provide Message or Server
{% endapi-method-response-example-description %}

```text
Message/Server is missing
```
{% endapi-method-response-example %}

{% api-method-response-example httpCode=401 %}
{% api-method-response-example-description %}
Your API key is missing
{% endapi-method-response-example-description %}

```
API Key is missing! Kindly get one at api.pgamerx.com/register
```
{% endapi-method-response-example %}

{% api-method-response-example httpCode=403 %}
{% api-method-response-example-description %}
API key is incorrect
{% endapi-method-response-example-description %}

```
Forbidden! API Key is incorrect, kindly recheck
```
{% endapi-method-response-example %}
{% endapi-method-response %}
{% endapi-method-spec %}
{% endapi-method %}

### Customisation 

Optional Query Parameters For Customisation - 

| Paremeter | Type | Default Value |
| :--- | :--- | :--- |
| bot\_name | String | Random Stuff Api |
| bot\_gender | String | male |
| bot\_master | String | PGamerX |
| bot\_age | String | 19 |
| bot\_company | String | PGamerX Studio |
| bot\_location | String | India |
| bot\_email | String | admin@pgamerx.com |
| bot\_build | String | Public |
| bot\_birth\_year | String | 2002 |
| bot\_birth\_date | String | 1st January, 2002 |
| bot\_birth\_place | String | India |
| bot\_favorite\_color | String | Blue |
| bot\_favorite\_book | String | Harry Potter |
| bot\_favorite\_band | String | Imagine Doggos |
| bot\_favorite\_artist | String | Eminem |
| bot\_favorite\_actress | String | Emma Watson |
| bot\_favorite\_actor | String | Jim Carrey |

