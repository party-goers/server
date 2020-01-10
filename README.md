# PARTY-GOERS

You can use this application to search for events held in many city around the world

## 1. User

#### a. User Login - Google Oauth2

- **Endpoint**

  ```http
  POST /users/googleSignIn
  ```

- **Headers**

  id_token: String **(Required)**

  

- **Response**

```javascript
{
    "message": "login success",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVlMTgxOGIzMjNmYzQxNGZiODRjMjZmZSIsImlhdCI6MTU3ODYzODQ1NH0.RN2XpUvLh7iXneGskGkKhMynb6cu8KLQSHO3-sjKnCk",
    "user": {
        "username": "zen chou",
        "email": "zenchouu@gmail.com"
    }
}
```



- **Error**

  - Error Empty Token

    ```javascript
    {
        "status": 406,
        "message": "token not provided"
    }
    ```
    

#### b. User Login - GitHub Login

- **Endpoint**

  ```http
  POST /user/login
  ```

- **Body**

  venueName: String **(Required)**

  lat: String  **(Required)**

  long: String **(Required)**

- **Response**

  ```javascript
  {
      "placeId": "ChIJyxMqeAKLaS4R9u7R1xkzRyw"
  }
  ```
  
- **Error**

  - Error venueName / lat / long is empty

    ```javascript
    {
        "status": 500,
        "message": "Cannot read property 'place_id' of undefined"
    }
    ```

    


## 2. Google Map

#### a. Find Place Id

- **Endpoint**

  ```http
  POST /googleMap/
  ```

  

- **Body**

  venueName: String **(Required)**

  lat: String  **(Required)**

  long: String **(Required)**

  

- **Response**

  ```javascript
  {
      "placeId": "ChIJyxMqeAKLaS4R9u7R1xkzRyw"
  }
  ```
  



## 3. OpenWeather

#### a. Find Weather Forecast

- **Endpoint**

  ```http
  GET /weather/:cityname/:date
  ```

  

- **Body**

  cityName: String **(Required)**

  date: Date  **(Required)**

  

- **Response**

  ```javascript
  {
      "weather": "sunny"
  }
  ```

  

- **Error city not found**

```javascript
{
    "weather": "city name not found"
}
```





## 4. SongKick

#### a. Find Weather Forecast

- **Endpoint**

  ```http
  GET /song-kick/events/city/:location
  ```

  

- **req.params**

  req.params.location : String  **(Required)**

  

- **Response**

  ```javascript
  {
      {
    resultsPage: {
      status: 'ok',
      results: { event: [Array] },
      perPage: 50,
      page: 1,
      totalEntries: 5
    }
  }
  [
    {
      id: 39366041,
      displayName: 'Avhath at Duck Down Pizza Party (January 9, 2020)',       
      type: 'Concert',
      uri: 'http://www.songkick.com/concerts/39366041-avhath-at-duck-down-pizza-party?utm_source=59389&utm_medium=partner',
      status: 'ok',
      popularity: 0.000012,
      start: {
        date: '2020-01-09',
        datetime: '2020-01-09T21:00:00+0700',
        time: '21:00:00'
      },
      performance: [ [Object] ],
      ageRestriction: null,
      flaggedAsEnded: false,
      venue: {
        id: 4355529,
        displayName: 'Duck Down Pizza Party',
        uri: 'http://www.songkick.com/venues/4355529-duck-down-pizza-party?utm_source=59389&utm_medium=partner',
        metroArea: [Object],
        lat: null,
        lng: null
      },
      location: { city: 'Jakarta, Indonesia', lat: -6.17444, lng: 106.829 }   
    },
    {
      id: 39356395,
      displayName: 'Freedom of 48: ETERNAL 2020',
      type: 'Festival',
      uri: 'http://www.songkick.com/festivals/3282229-freedom-of-48-eternal/id/39356395-freedom-of-48-eternal-2020?utm_source=59389&utm_medium=partner',  
      status: 'ok',
      popularity: 0.001648,
      start: { date: '2020-01-11', datetime: null, time: null },
      performance: [ [Object], [Object], [Object], [Object], [Object], [Object] ],
      ageRestriction: null,
      flaggedAsEnded: false,
      venue: {
        id: 4369616,
        displayName: 'Lapangan Museum Purna Bhakti TMII',
        uri: 'http://www.songkick.com/venues/4369616-lapangan-museum-purna-bhakti-tmii?utm_source=59389&utm_medium=partner',
        metroArea: [Object],
        lat: -6.30061,
        lng: 106.88934
      },
      location: { city: 'Jakarta, Indonesia', lat: -6.30061, lng: 106.88934 },    end: { date: '2020-01-11', time: null, datetime: null },
      series: { displayName: 'Freedom of 48: ETERNAL' }
    },
    {
      id: 39328270,
      displayName: 'The Rise of Art 2020',
      type: 'Festival',
      uri: 'http://www.songkick.com/festivals/3278322-rise-of-art/id/39328270-the-rise-of-art-2020?utm_source=59389&utm_medium=partner',
      status: 'ok',
      popularity: 0.001437,
      start: { date: '2020-01-12', datetime: null, time: null },
      performance: [ [Object] ],
      ageRestriction: null,
      flaggedAsEnded: false,
      venue: {
        id: 4367406,
        displayName: 'Metland School',
        uri: 'http://www.songkick.com/venues/4367406-metland-school?utm_source=59389&utm_medium=partner',
        metroArea: [Object],
        lat: null,
        lng: null
      },
      location: { city: 'Cileungsi, Indonesia', lat: -6.40597, lng: 106.995 },    end: { date: '2020-01-12', time: null, datetime: null },
      series: { displayName: 'The Rise of Art' }
    },
    {
      id: 39364916,
      displayName: 'Yoshimoto Shinnenkai 2020',
      type: 'Festival',
      uri: 'http://www.songkick.com/festivals/3286897-yoshimoto-shinnenkai/id/39364916-yoshimoto-shinnenkai-2020?utm_source=59389&utm_medium=partner',    
      status: 'ok',
      popularity: 0.000058,
      start: { date: '2020-01-12', datetime: null, time: null },
      performance: [ [Object], [Object] ],
      ageRestriction: null,
      flaggedAsEnded: false,
      venue: {
        id: 3789744,
        displayName: 'AEON Mall Jakarta Garden City',
        uri: 'http://www.songkick.com/venues/3789744-aeon-mall-jakarta-garden-city?utm_source=59389&utm_medium=partner',
        metroArea: [Object],
        lat: null,
        lng: null
      },
      location: { city: 'Jakarta, Indonesia', lat: -6.17444, lng: 106.829 },  
      end: { date: '2020-01-12', time: null, datetime: null },
      series: { displayName: 'Yoshimoto Shinnenkai' }
    },
    {
      id: 39291171,
      displayName: 'Eric Nam at Soehanna Hall - The Energy (January 13, 2020)',
      type: 'Concert',
      uri: 'http://www.songkick.com/concerts/39291171-eric-nam-at-soehanna-hall-the-energy?utm_source=59389&utm_medium=partner',
      status: 'ok',
      popularity: 0.007897,
      start: { date: '2020-01-13', datetime: null, time: null },
      performance: [ [Object] ],
      ageRestriction: null,
      flaggedAsEnded: false,
      venue: {
        id: 2452579,
        displayName: 'Soehanna Hall - The Energy',
        uri: 'http://www.songkick.com/venues/2452579-soehanna-hall-the-energy?utm_source=59389&utm_medium=partner',
        metroArea: [Object],
        lat: -6.21154,
        lng: 106.84517
      },
      location: { city: 'Jakarta, Indonesia', lat: -6.21154, lng: 106.84517 } 
    }
  ]
  }
  ```

  

- **Error city not found**

```javascript
{
    "status": 500,
    "message": "Location not found"
}
```

