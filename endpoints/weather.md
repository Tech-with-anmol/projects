# GET /weather

{% api-method method="get" host="https://api.pgamerx.com" path="/v5/weather" %}
{% api-method-summary %}
Weather
{% endapi-method-summary %}

{% api-method-description %}
Get Weather information about any place
{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-path-parameters %}
{% api-method-parameter name="city" type="string" required=true %}
The city you want the information about
{% endapi-method-parameter %}
{% endapi-method-path-parameters %}

{% api-method-headers %}
{% api-method-parameter name="Authorization" type="string" required=true %}
Your api key derived from api.pgamerx.com/register
{% endapi-method-parameter %}
{% endapi-method-headers %}
{% endapi-method-request %}

{% api-method-response %}
{% api-method-response-example httpCode=200 %}
{% api-method-response-example-description %}
Done! Success
{% endapi-method-response-example-description %}

```
[
  {
    "location": {
      "name": "Amritsar, India",
      "lat": "31.638",
      "long": "74.868",
      "timezone": "5.5",
      "alert": "",
      "degreetype": "C",
      "imagerelativeurl": "http://blob.weather.microsoft.com/static/weather4/en-us/"
    },
    "current": {
      "temperature": "33",
      "skycode": "21",
      "skytext": "Haze",
      "date": "2021-08-16",
      "observationtime": "12:00:00",
      "observationpoint": "Amritsar, India",
      "feelslike": "38",
      "humidity": "56",
      "winddisplay": "4 km/h West",
      "day": "Monday",
      "shortday": "Mon",
      "windspeed": "4 km/h",
      "imageUrl": "http://blob.weather.microsoft.com/static/weather4/en-us/law/21.gif"
    },
    "forecast": [
      {
        "low": "27",
        "high": "32",
        "skycodeday": "31",
        "skytextday": "Clear",
        "date": "2021-08-15",
        "day": "Sunday",
        "shortday": "Sun",
        "precip": ""
      },
      {
        "low": "27",
        "high": "33",
        "skycodeday": "34",
        "skytextday": "Mostly Sunny",
        "date": "2021-08-16",
        "day": "Monday",
        "shortday": "Mon",
        "precip": "0"
      },
      {
        "low": "28",
        "high": "34",
        "skycodeday": "32",
        "skytextday": "Sunny",
        "date": "2021-08-17",
        "day": "Tuesday",
        "shortday": "Tue",
        "precip": "0"
      },
      {
        "low": "28",
        "high": "34",
        "skycodeday": "32",
        "skytextday": "Sunny",
        "date": "2021-08-18",
        "day": "Wednesday",
        "shortday": "Wed",
        "precip": "10"
      },
      {
        "low": "27",
        "high": "33",
        "skycodeday": "34",
        "skytextday": "Mostly Sunny",
        "date": "2021-08-19",
        "day": "Thursday",
        "shortday": "Thu",
        "precip": "30"
      }
    ]
  },
  {
    "location": {
      "name": "Amritsar district, India",
      "lat": "31.583",
      "long": "74.983",
      "timezone": "5.5",
      "alert": "",
      "degreetype": "C",
      "imagerelativeurl": "http://blob.weather.microsoft.com/static/weather4/en-us/"
    },
    "current": {
      "temperature": "33",
      "skycode": "21",
      "skytext": "Haze",
      "date": "2021-08-16",
      "observationtime": "12:00:00",
      "observationpoint": "Amritsar district, India",
      "feelslike": "38",
      "humidity": "56",
      "winddisplay": "4 km/h West",
      "day": "Monday",
      "shortday": "Mon",
      "windspeed": "4 km/h",
      "imageUrl": "http://blob.weather.microsoft.com/static/weather4/en-us/law/21.gif"
    },
    "forecast": [
      {
        "low": "27",
        "high": "32",
        "skycodeday": "31",
        "skytextday": "Clear",
        "date": "2021-08-15",
        "day": "Sunday",
        "shortday": "Sun",
        "precip": ""
      },
      {
        "low": "27",
        "high": "33",
        "skycodeday": "34",
        "skytextday": "Mostly Sunny",
        "date": "2021-08-16",
        "day": "Monday",
        "shortday": "Mon",
        "precip": "0"
      },
      {
        "low": "28",
        "high": "34",
        "skycodeday": "32",
        "skytextday": "Sunny",
        "date": "2021-08-17",
        "day": "Tuesday",
        "shortday": "Tue",
        "precip": "0"
      },
      {
        "low": "28",
        "high": "34",
        "skycodeday": "32",
        "skytextday": "Sunny",
        "date": "2021-08-18",
        "day": "Wednesday",
        "shortday": "Wed",
        "precip": "10"
      },
      {
        "low": "27",
        "high": "33",
        "skycodeday": "34",
        "skytextday": "Mostly Sunny",
        "date": "2021-08-19",
        "day": "Thursday",
        "shortday": "Thu",
        "precip": "40"
      }
    ]
  }
]
```
{% endapi-method-response-example %}

{% api-method-response-example httpCode=400 %}
{% api-method-response-example-description %}
Invalid City or Missing City
{% endapi-method-response-example-description %}

```
Invalid/Missing city
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

{% endapi-method-response-example-description %}

```
Forbidden! API Key is incorrect, kindly recheck
```
{% endapi-method-response-example %}

{% api-method-response-example httpCode=500 %}
{% api-method-response-example-description %}
Some error
{% endapi-method-response-example-description %}

```
Hmm. Something happened
```
{% endapi-method-response-example %}
{% endapi-method-response %}
{% endapi-method-spec %}
{% endapi-method %}

