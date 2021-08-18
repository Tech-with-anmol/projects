---
description: Get Images of any types. Included in your Free as well as Premium Plan
---

# GET /image

{% api-method method="get" host="https://api.pgamerx.com" path="/v5/image" %}
{% api-method-summary %}
Image
{% endapi-method-summary %}

{% api-method-description %}
Get images of different type.
{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-headers %}
{% api-method-parameter name="Authorization" type="string" required=true %}
Your API key.
{% endapi-method-parameter %}
{% endapi-method-headers %}

{% api-method-query-parameters %}
{% api-method-parameter name="type" type="string" required=true %}
What type of image do you want
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
  "http://imgur.com/XSl0TH6.jpg"
]
```
{% endapi-method-response-example %}

{% api-method-response-example httpCode=400 %}
{% api-method-response-example-description %}
type of image needed is missing
{% endapi-method-response-example-description %}

```
Type is missing
```
{% endapi-method-response-example %}

{% api-method-response-example httpCode=401 %}
{% api-method-response-example-description %}
API key is missing
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

## Types available -

1. `aww`
2. `duck`
3. `dog`
4. `cat`
5. `memes`
6. `dankmemes`
7. `holup`
8. `art`
9. `harrypottermemes`
10. `facepalm`

### 



