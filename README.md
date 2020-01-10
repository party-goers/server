# PARTY-GOERS

You can use this application to search for events held in many city around the world

## 1. User

#### a. User Register

- **Endpoint**

  ```http
  POST /users/register
  ```

- **Body**

  username : String **(Required)**

  email : String (**Required**)

  password: String **(Required)**

- **Response**

  ```javascript
  {
      "id": "5de0471a48b33b2ec6bd94f6",
      "username": "nezuko",
      "email": "nezuko@gmail.com",
      "currency": "IDR"
  }
  ```

- **Error**

  - Error Empty Username

    ```javascript
    {
        "code": 400,
        "message": [
            "name field required to be filled"
        ]
    }
    ```

  - Error Empty Email

    ```javascript
    {
        "code": 400,
        "message": [
            "email field required to be filled"
        ]
    }
    ```

  - Errror Empty Password

    ```javascript
    {
        "code": 400,
        "message": [
            "password field required to be filled"
        ]
    }
    ```

  - Error Validation Email Unique

    ```javascript
    {
        "code": 400,
        "message": [
            "Email is already registered!"
        ]
    }
    ```



#### b. User Login

- **Endpoint**

  ```http
  POST /user/login
  ```

- **Body**

  email: String **(Required)**

  password: String **(Required)**

- **Body**

  email: String **(Required)**

  password: String **(Required)**

- **Response**

  ```javascript
  {
      "user": {
          "username": "nezuko",
          "email": "nezuko@gmail.com",
          "currency": "IDR"
      },
      "token": "access_token"
  }
  ```

- **Error**

  - Error Email Not Register in Database

    ```javascript
    {
        "code": 400,
        "message": "Your email is not registered"
    }
    ```

  - Error Password Wrong

    ```javascript
    {
        "code": 404,
        "message": "Password / Username is wrong"
    }
    ```

#### c. Google Oauth2

- **Endpoint**

  ```http
  POST /signin/google
  ```

- **Body**

  idToken: String **(Required)**

- **Response**

  ```javascript
  {
  	"user": {
  			"email": "danangbahari89@gmail.com",
  			"username": "Danang Putra",
  			"currency": "IDR"
  	},
  	"token": "access_token"
  }
  ```

  

## 2. Zomato

#### a. Search Restaurant By Keyword

- **Endpoint**

  ```http
  POST /api/zomato/search
  ```

  

- **Body**

  keywords : String **(Required)**

  

- **Headers**

  user_key : String **(Required)**

  

- **Response**

  ```javascript
  [
      {
          "R": {
              "has_menu_status": {
                  "delivery": -1,
                  "takeaway": -1
              },
              "res_id": 7403497
          },
          "apikey": "38be25d1467a11b6009b33f617bb783c",
          "id": "7403497",
          "name": "Maqui's",
          "url": "https://www.zomato.com/jakarta/maqui-s-kebayoran-lama?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1",
          "location": {
              "address": "The Bellezza Shopping Arcade, Lantai Ground, Jl. Letjen Soepeno No. 34, Kebayoran Lama, Jakarta",
              "locality": "The Bellezza Shopping Arcade, Kebayoran Lama",
              "city": "Jakarta",
              "city_id": 74,
              "latitude": "-6.2218402187",
              "longitude": "106.7823337019",
              "zipcode": "",
              "country_id": 94,
              "locality_verbose": "The Bellezza Shopping Arcade, Kebayoran Lama, Jakarta"
          },
  				.............
  		},
  ]
  ```



#### b. Reviews

- **Endpoint**

  ```http
  GET /api/zomato/reviews/:res_id
  ```

- **Params**

  res_id : String **(Required)**

  

- **Headers**

  user_key: String **(Required)**

  

- **Response**

  ```javascript
  {
      "reviews_count": 30,
      "reviews_start": 0,
      "reviews_shown": 5,
      "user_reviews": [
          {
              "review": {
                  "rating": 5,
                  "review_text": "I've been here for dinner and had a flavourful chicken roll. Texture, flavour and quantity were spot on. This is a great place to have some Mördern food in a nice environment.",
                  "id": 42572909,
                  "rating_color": "305D02",
                  "review_time_friendly": "7 months ago",
                  "rating_text": "Insane!",
                  "timestamp": 1555312259,
                  "likes": 0,
                  ....................
                  },
                  "comments_count": 0
              }
          }
  ```



#### c. Detail Restaurant

- **Endpoint**

  ```http
  GET /api/zomato/restaurant/:res_id
  ```

  

- **Params**

  res_id: String **(Required)**

  

- **Headers**

  user_key: String **(Required)**

  

- **Response**

  ```javascript
  {
      "R": {
          "has_menu_status": {
              "delivery": -1,
              "takeaway": -1
          },
          "res_id": 16507624
      },
      "apikey": "38be25d1467a11b6009b33f617bb783c",
      "id": "16507624",
      "name": "Vinohradský pivovar",
      "url": "https://www.zomato.com/praha/vinohradský-pivovar-vinohrady-praha-10?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1",
      "location": {
          "address": "Korunní 106, Vinohrady, Praha 10",
          "locality": "Vinohrady",
          "city": "Praha 10",
          "city_id": 84,
          "latitude": "50.0753000000",
          "longitude": "14.4574240000",
          "zipcode": "101 00",
          "country_id": 54,
          "locality_verbose": "Vinohrady, Praha 10"
      }
      ....
  }
  ```



#### d. Daily Menu

- **Endpoint**

  ```http
  GET /api/zomato/dailymenu/:res_id
  ```

- **Params**

  res_id : String **(Required)**

  

- **Headers**

  user_key: String **(Required)**

  

- **Response**

  ```javascript
  {
      "daily_menus": [
          {
              "daily_menu": {
                  "daily_menu_id": "17178053",
                  "start_date": "2019-11-29 00:00:00",
                  "name": "Polévky",
                  "dishes": [
                      {
                          "dish": {
                              "dish_id": "634207002",
                              "name": "Bramboračka s hříbky",
                              "price": "45 Kč"
                          }
                      }
                  ]
              }
          },
          .......
        }
  ```

  

#### e. Location

- **Endpoint**

  ```http
  GET /api/zomato/locations/:keyword
  ```

  

- **Params**

  keyword: String **(Required)**

  

- **Headers**

  user_key: String **(Required)**

  

- **Response**

  ```javascript
  {
      "location_suggestions": [
          {
              "entity_type": "subzone",
              "entity_id": 162118,
              "title": "Taman Medan, Selangor",
              "latitude": 3.073052,
              "longitude": 101.637513,
              "city_id": 11080,
              "city_name": "Selangor",
              "country_id": 123,
              "country_name": "Malaysia"
          }
      ],
      "status": "success",
      "has_more": 0,
      "has_total": 0,
      "user_has_addresses": true
  }
  ```



#### f. Location Details

- **Endpoint**

  ```http
  GET /api/zomato/location_details/:entity_type/:entity_id
  ```

- **Params**

  entity_type: String **(Required)**

  entity_id : Number **(Required)**

  

- **Headers**

  user_key: String **(Required)**

  

- **Response**

  ```javascript
  {
      "popularity": "4.97",
      "nightlife_index": "4.23",
      "nearby_res": [
          "18676453",
          "18478836",
          "18665235",
          "7410695",
          "7419154",
          "18534498",
          "18445561",
          "18571667",
          "7424424"
      ],
      "top_cuisines": [
          "Indonesian",
          "Coffee",
          "Western",
          "Desserts",
          "Jawa"
      ],
      ....
  }
  ```

  

#### g. Geocode Location

- **Endpoint**

  ```http
  GET /api/zomato/geocode/:lat/:lon
  ```

- **Params**

  latitude : String **(Required)**

  longitude: String **(Required)**

  

- **Headers**

  user_key: String **(Required)**

  

- **Response**

  ```javascript
  {
      "location": {
          "entity_type": "subzone",
          "entity_id": 172944,
          "title": "Baramati Locality",
          "latitude": "18.1841000000",
          "longitude": "74.6108000000",
          "city_id": 11488,
          "city_name": "Baramati",
          "country_id": 1,
          "country_name": "India"
      },
      "popularity": {
          "status": "failed",
          "message": "Coordinates missing",
          "nightlife_index": 0,
          "popularity": 0
      },
      "link": "https://www.zomato.com/baramati/baramati-locality-restaurants",
      "nearby_restaurants": []
  }
  ```



#### h. Establishment

- **Endpoint**

  ```http
  GET /api/zomato/establishments/:city_id
  ```

- **Params**

  city_id: Number **(Required)**

  

- **Headers**

  user_key: String **(Required)**

  

- **Response**

  ```http
  {
      "establishments": [
          {
              "establishment": {
                  "id": 21,
                  "name": "Quick Bites"
              }
          },
          {
              "establishment": {
                  "id": 23,
                  "name": "Dessert Parlour"
              }
          },
          .....
  }
  ```



#### i. Cuisines Food

- **Endpoint**

  ```http
  GET /api/zomato/cuisines/:city_id
  ```

- **Params**

  city_id: String **(Required)**

  

- **Headers**

  user_key: String **(Required)**

  

- **Response**

  ```http
  {
      "cuisines": [
          {
              "cuisine": {
                  "cuisine_id": 237,
                  "cuisine_name": "Aceh"
              }
          },
          {
              "cuisine": {
                  "cuisine_id": 1,
                  "cuisine_name": "American"
              }
          },
          .....
  }
  ```



#### j. Collections Food

- **Endpoint**

  ```http
  GET /api/zomato/collections/:city_id
  ```

- **Params**

  city_id: Number **(Required)**

  

- **Headers**

  user_key : String **(Required)**

  

- **Response**

  ```javascript
  {
      "collections": [
          {
              "collection": {
                  "collection_id": 1,
                  "res_count": 30,
                  "image_url": "https://b.zmtcdn.com/data/collections/a32c1beb2b53fb7f0c75f4690703fbd9_1566980831.jpg",
                  "url": "https://www.zomato.com/jakarta/top-restaurants?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1",
                  "title": "Trending in Jakarta",
                  "description": "Most-loved & highly-reviewed restaurants, by and for Jakartans!",
                  "share_url": "http://www.zoma.to/c-74/1"
              }
          },
          ....
  }
  ```



#### k. Search Cities

- **Endpoint**

  ```http
  GET /api/zomato/cities/:city
  ```

- **Params**

  city: String **(Required)**

  

- **Headers**

  user_key : String **(Required)**

  

- **Response**

  ```javascript
  {
      "location_suggestions": [
          {
              "id": 74,
              "name": "Jakarta",
              "country_id": 94,
              "country_name": "Indonesia",
              "country_flag_url": "https://b.zmtcdn.com/images/countries/flags/country_94.png",
              "should_experiment_with": 0,
              "has_go_out_tab": 0,
              "discovery_enabled": 0,
              "has_new_ad_format": 1,
              "is_state": 0,
              "state_id": 0,
              "state_name": "",
              "state_code": ""
          }
      ],
      "status": "success",
      "has_more": 0,
      "has_total": 0,
      "user_has_addresses": true
  }
  ```



#### l. Food Categories

- **Endpoint**

  ```http
  GET /api/zomato/categories
  ```

  

- **Headers**

  user_key : String **(Required)**

  

- **Response**

  ```javascript
  {
      "categories": [
          {
              "categories": {
                  "id": 1,
                  "name": "Delivery"
              }
          },
          {
              "categories": {
                  "id": 2,
                  "name": "Dine-out"
              }
          },
          .....
  }
  ```

