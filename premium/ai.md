---
description: Get AI Response with increased requests
---

# GET /ai

{% api-method method="get" host="https://api.pgamerx.com" path="/v5/premium/:plan/ai" %}
{% api-method-summary %}
Get AI Response
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
{% api-method-parameter name="Authroization" type="string" required=true %}
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

{% endapi-method-response-example-description %}

```

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

