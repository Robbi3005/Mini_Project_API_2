# Db merchant_services

# merchant_info

* merchant_info object
```
    {
        "id": INT,
        "password": VARCHAR(255),
        "address": VARCHAR(255),
        "join_date": DATETIME,
        "phone_number": BIGINT
    },
```

//------------------------------------------------------------------------------------- 

**GET /merchant**
----
  Returns all merchants in the system.
* **URL Params**  
  None
* **Data Params**  
  None
* **Headers**  
  Content-Type: application/json  
* **Success Response:**  
* **Code:** 200  
  **Content:**  
```
{
  merchant: [
           {<merchant_object>},
           {<merchant_object>},
           {<merchant_object>},
           {<merchant_object>},
           {<merchant_object>}
         ]
}
```

//-------------------------------------------------------------------------------------

**GET /merchant/jwt**
----
  Returns all merchants in the system.
* **URL Params**  
  None
* **Data Params**  
  None
* **Headers**  
 Authorization: Bearer `<Auth Token>`
* **Success Response:**  
* **Code:** 200  
  **Content:**  
```
{
  merchant: [
           {<merchant_object>},
           {<merchant_object>},
           {<merchant_object>},
           {<merchant_object>},
           {<merchant_object>}
         ]
}
```

//-------------------------------------------------------------------------------------

**GET /merchant/:id**
----
  Returns the specified merchant.
* **URL Params**  
  *Required:* `id=[integer]`
* **Data Params**  
  None
* **Headers**  
  Content-Type: application/json  
* **Success Response:** 
* **Code:** 200  
  **Content:** 
```
    {
        "id": INT,
        "password": VARCHAR(255),
        "address": VARCHAR(255),
        "join_date": DATETIME,
        "phone_number": BIGINT
    },
```
* **Error Response:**  
  * **Code:** 400 
  **Content:** `{Internal Server Error }`

//-------------------------------------------------------------------------------------

**GET /merchant/jwt/:id**
----
  Returns the specified merchant.
* **URL Params**  
  *Required:* `id=[integer]`
* **Data Params**  
  None
* **Headers**  
  Content-Type: application/json  
  Authentication: Basic Token
* **Success Response:** 
* **Code:** 200  
  **Content:**
```
    {
        "id": INT,
        "password": VARCHAR(255),
        "address": VARCHAR(255),
        "join_date": DATETIME,
        "phone_number": BIGINT
    },
```
* **Error Response:**  
  * **Code:** 400 
  **Content:** `{Internal Server Error }` 
OR
* **Code:** 401  
  **Content:** `{ Unauthorized }`

//-------------------------------------------------------------------------------------

**POST /merchant**
----
  Creates a new merchant and returns the new object.
* **URL Params**  
  None
* **Headers**  
  Content-Type: application/json  
* **Success Response:**  
* **Code:** 200  
  **Content:**  `{ <merchant_object> }` 
OR
* **Code:** 404  
  **Content:**  `{ id is required }`
OR
* **Code:** 400  
  **Content:**  `{ id already exist }`

//-------------------------------------------------------------------------------------

**POST /merchant/jwt**
----
  Creates a new merchant and returns the new object.
* **URL Params**  
  None
* **Headers**  
  Content-Type: application/json
  Authentication: Basic Token
* **Success Response:**  
* **Code:** 200  
  **Content:**  `{ <merchant_object> }` 
OR
* **Code:** 404  
  **Content:**  `{ id is required }`
OR
* **Code:** 400  
  **Content:**  `{ id already exist }`
or
  * **Code:** 401  
  **Content:** `{ Unauthorized }`  

//-------------------------------------------------------------------------------------

**PUT /merchant/:id**
----
  Update a specfic merchant.
* **URL Params**  
    *Required:* `id=[integer]`
* **Headers**  
  Content-Type: application/json  
* **Success Response:**  
* **Code:** 200  
  **Content:**  `{ <merchant_object> }` 
OR
* **Code:** 400  
  **Content:**  `{ Internal Server Error }`

//-------------------------------------------------------------------------------------

**PUT /merchant/jwt/:id**
----
  Update a specfic merchant.
* **URL Params**  
    *Required:* `id=[integer]`
* **Headers**  
  Content-Type: application/json
  Authentication: Basic Token
* **Success Response:**  
* **Code:** 200  
  **Content:**  `{ <merchant_object> }` 
OR
* **Code:** 400  
  **Content:**  `{ Internal Server Error }`
OR
* **Code:** 401  
  **Content:** `{ Unauthorized }`

//-------------------------------------------------------------------------------------

**DELETE /merchant/:id**
----
  Deletes the specified merchant.
* **URL Params**  
  *Required:* `id=[integer]`
* **Data Params**  
  None
* **Headers**  
  Content-Type: application/json  
* **Success Response:** 
  * **Code:** 200
  * **Content:** `{Merchant deleted at id ${req.params.id}}` 
* **Error Response:**  
  * **Code:** 400
  **Content:** `{Internal Server Error}`

//-------------------------------------------------------------------------------------

**DELETE /merchant/jwt/:id**
----
  Deletes the specified merchant.
* **URL Params**  
  *Required:* `id=[integer]`
* **Data Params**  
  None
* **Headers**  
  Content-Type: application/json
  Authentication: Basic Token
* **Success Response:** 
  * **Code:** 200
  * **Content:** `{Merchant deleted at id ${req.params.id}}` 
* **Error Response:**  
  * **Code:** 400
  **Content:** `{Internal Server Error}`
OR
* **Code:** 401  
  **Content:** `{ Unauthorized }`

//-------------------------------------------------------------------------------------

#merchant_info
* merchant_info object
```
    {
        "id": INT,
        "password": VARCHAR(255),
        "address": VARCHAR(255),
        "join_date": DATETIME,
        "phone_number": BIGINT
    },
```

//-------------------------------------------------------------------------------------