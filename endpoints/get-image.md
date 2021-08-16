---
description: Get Information about COVID-19 Cases of the whole world or a specific country
---

# GET /covid

{% api-method method="get" host="https://api.pgamerx.com" path="/v5/covid" %}
{% api-method-summary %}
Covid Data
{% endapi-method-summary %}

{% api-method-description %}
Get Information about COVID-19 using this endpoint
{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-headers %}
{% api-method-parameter name="Authorization" type="string" required=true %}
API key which you can get from api.pgamerx.com/register
{% endapi-method-parameter %}
{% endapi-method-headers %}

{% api-method-query-parameters %}
{% api-method-parameter name="country" type="string" required=false %}
Country. Can be left behind so as to get info about the world as a collective group
{% endapi-method-parameter %}
{% endapi-method-query-parameters %}
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



