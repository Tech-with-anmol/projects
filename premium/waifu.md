---
description: Get Waifu pictures (Safe for work). Included in your premium plan only
---

# GET /waifu

{% api-method method="get" host="https://api.pgamerx.com" path="/v5/premium/:plan/waifu" %}
{% api-method-summary %}
Waifu Pictures
{% endapi-method-summary %}

{% api-method-description %}
Get waifu pictures
{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-path-parameters %}
{% api-method-parameter name="plan" type="string" required=true %}
What premium plan you purchased
{% endapi-method-parameter %}
{% endapi-method-path-parameters %}

{% api-method-headers %}
{% api-method-parameter name="Authorization" type="string" required=true %}
Your PREMIUM api key
{% endapi-method-parameter %}
{% endapi-method-headers %}

{% api-method-query-parameters %}
{% api-method-parameter name="type" type="string" required=true %}
What type of Waifu Picture you want?
{% endapi-method-parameter %}
{% endapi-method-query-parameters %}
{% endapi-method-request %}

{% api-method-response %}
{% api-method-response-example httpCode=200 %}
{% api-method-response-example-description %}
Done! Success
{% endapi-method-response-example-description %}

```
[
  {
    "url": "https://i.waifu.pics/4d8jVu4.jpg"
  }
]
```
{% endapi-method-response-example %}

{% api-method-response-example httpCode=400 %}
{% api-method-response-example-description %}
Type is missing
{% endapi-method-response-example-description %}

```
What type of waifu pic do you want?
```
{% endapi-method-response-example %}

{% api-method-response-example httpCode=401 %}
{% api-method-response-example-description %}
API key is missing
{% endapi-method-response-example-description %}

```
Premium API key is missing.
```
{% endapi-method-response-example %}

{% api-method-response-example httpCode=403 %}
{% api-method-response-example-description %}
API doesn't exist/Plan aren't the same
{% endapi-method-response-example-description %}

```
Premium API Key is incorrect, kindly recheck
The Premium API Key is not valid for plan
```
{% endapi-method-response-example %}
{% endapi-method-response %}
{% endapi-method-spec %}
{% endapi-method %}

### What types are available?

1. `waifu`
2. `neko`
3. `shinobu`
4. `megumin`
5. `bully`
6. `cuddle`

