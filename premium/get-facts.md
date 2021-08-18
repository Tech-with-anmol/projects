---
description: >-
  Get facts about different things using Random Stuff Api. Included in your
  premium plan only
---

# GET /facts

{% api-method method="get" host="https://api.pgamerx.com" path="/v5/premium/:plan/facts" %}
{% api-method-summary %}

{% endapi-method-summary %}

{% api-method-description %}
You can use this endpoint to get Facts about different things
{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-path-parameters %}
{% api-method-parameter name="plan" type="string" required=true %}
What plan have you purchased
{% endapi-method-parameter %}
{% endapi-method-path-parameters %}

{% api-method-headers %}
{% api-method-parameter name="Authorization" type="string" required=true %}
Your API key
{% endapi-method-parameter %}
{% endapi-method-headers %}

{% api-method-query-parameters %}
{% api-method-parameter name="type" type="string" required=false %}
What type of fact do you want? Leave blank to get a random one
{% endapi-method-parameter %}
{% endapi-method-query-parameters %}
{% endapi-method-request %}

{% api-method-response %}
{% api-method-response-example httpCode=200 %}
{% api-method-response-example-description %}

{% endapi-method-response-example-description %}

```
[
  {
    "fact": "Want to call a hairball by its scientific name? Next time, say the word bezoar"
  }
]
```
{% endapi-method-response-example %}

{% api-method-response-example httpCode=400 %}
{% api-method-response-example-description %}
Invalid type provided
{% endapi-method-response-example-description %}

```
Bad request! Invalid type. Recieved - ${input}
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
API key is missing/Plan is incorrect 
{% endapi-method-response-example-description %}

```
Premium API Key is incorrect, kindly recheck
The Premium API Key is not valid for plan
```
{% endapi-method-response-example %}
{% endapi-method-response %}
{% endapi-method-spec %}
{% endapi-method %}

### Types of fact available -

* `all (or just leave it blank)`
* `dog`
* `cat`
* `space`
* `covid`
* `computer`
* `food`
* `emoji`



