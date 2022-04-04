# Db merchant_services

# product_info

* product_info object
```
    {
        "id": INT,
        "name": VARCHAR(255),
        "merchant_id": INT,
        "quantity": INT,
        "price": INT
    },
```

**GET /product**
----
  Returns all product in the system.
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
  product: [
           {<product_object>},
           {<product_object>},
           {<product_object>},
           {<product_object>}
         ]
}
```

//-------------------------------------------------------------------------------------

**GET /product/jwt**
----
  Returns all products in the system.
* **URL Params**  
  None
* **Data Params**  
  None
* **Headers**  
  Authentication: Basic Token
* **Success Response:**  
* **Code:** 200  
  **Content:**  
```
{
  product: [
           {<product_object>},
           {<product_object>},
           {<product_object>},
           {<product_object>}
         ]
}
```

//-------------------------------------------------------------------------------------

**GET /product/:id**
----
  Returns the specified product.
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

**GET /product/jwt/:id**
----
  Returns the specified product.
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

**POST /product**
----
  Creates a new product and returns the new object.
* **URL Params**  
  None
* **Headers**  
  Content-Type: application/json  
* **Success Response:**  
* **Code:** 200  
  **Content:**  `{ <product_object> }` 
OR
* **Code:** 404  
  **Content:**  `{ id is required }`
OR
* **Code:** 400  
  **Content:**  `{ id already exist }`

//-------------------------------------------------------------------------------------

**POST /product/jwt**
----
  Creates a new product and returns the new object.
* **URL Params**  
  None
* **Headers**  
  Content-Type: application/json
  Authentication: Basic Token
* **Success Response:**  
* **Code:** 200  
  **Content:**  `{ <product_object> }` 
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

**PUT /product/:id**
----
  Update a specfic product.
* **URL Params**  
    *Required:* `id=[integer]`
* **Headers**  
  Content-Type: application/json  
* **Success Response:**  
* **Code:** 200  
  **Content:**  `{ <product_object> }` 
OR
* **Code:** 400  
  **Content:**  `{ Internal Server Error }`

//-------------------------------------------------------------------------------------

**PUT /product/jwt/:id**
----
  Update a specfic product.
* **URL Params**  
    *Required:* `id=[integer]`
* **Headers**  
  Content-Type: application/json
  Authentication: Basic Token
* **Success Response:**  
* **Code:** 200  
  **Content:**  `{ <product_object> }` 
OR
* **Code:** 400  
  **Content:**  `{ Internal Server Error }`
OR
* **Code:** 401  
  **Content:** `{ Unauthorized }`

//-------------------------------------------------------------------------------------

**DELETE /product/:id**
----
  Deletes the specified product.
* **URL Params**  
  *Required:* `id=[integer]`
* **Data Params**  
  None
* **Headers**  
  Content-Type: application/json  
* **Success Response:** 
  * **Code:** 200
  * **Content:** `{product deleted at id ${req.params.id}}` 
* **Error Response:**  
  * **Code:** 400
  **Content:** `{Internal Server Error}`

//-------------------------------------------------------------------------------------

**DELETE /product/jwt/:id**
----
  Deletes the specified product.
* **URL Params**  
  *Required:* `id=[integer]`
* **Data Params**  
  None
* **Headers**  
  Content-Type: application/json
  Authentication: Basic Token
* **Success Response:** 
  * **Code:** 200
  * **Content:** `{product deleted at id ${req.params.id}}` 
* **Error Response:**  
  * **Code:** 400
  **Content:** `{Internal Server Error}`
OR
* **Code:** 401  
  **Content:** `{ Unauthorized }`

//-------------------------------------------------------------------------------------