# Backend API Documentation

This document provides information on the available API routes in the backend.

---

## User Routes

### Register User

- **Endpoint:**  
  `POST /user/register`

- **Description:**  
  This route registers a new user. It validates the request data, hashes the user's password, creates a new user record in the database, and returns an authentication token along with user information.

- **Request Format:**

  **Headers:**  
  `Content-Type: application/json`

  **Body:**
  ```json
  {
      "fullname": {
          "firstname": "John",
          "lastname": "Doe"
      },
      "email": "johndoe@example.com",
      "password": "password123"
  }
  ```
  - fullname.firstname (string, required): Minimum 3 characters.
  - fullname.lastname (string, optional)
  - email (string, required): Must be a valid email address.
  - password (string, required): Minimum 6 characters.


- **Response Format:**
  ```json
  {
      "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2ODEzNDFjYmViNDM1ZjU0ZjcxMzcxY2UiLCJpYXQiOjE3NDYwOTI0OTF9.6pnIDUG0sUHhf0s7x7F8icjZXSVhiPPY6xcOrnhtmhY",
      "user": {
          "fullname": {
              "firstname": "hello1",
              "lastname": "hello2"
          },
          "email": "hello2@gmail.com",
          "password": "$2b$10$01GsoFdfKcEJ1uIT/G2Mtu3FV265G5lUrRPFMdLMZ/wowBV/gX0Km",
          "_id": "681341cbeb435f54f71371ce",
          "__v": 0
      }
  }
  ```
### Login User

- **Endpoint:**  
  `POST /user/login`

- **Description:**  
  This route logs in an existing user. It validates the request data, verifies the user's credentials, and returns a JWT token along with the user information if authentication is successful.

- **Request Format:**

  **Headers:**  
  `Content-Type: application/json`

  **Body:**
  ```json
   {
    "email": "johndoe@example.com",
    "password": "password123"
    }
  ```
  
  - email (string, required): Must be a valid email address.
  - password (string, required): Minimum 6 characters.


- **Response Format:**
  ```json
  {
      "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2ODEzNDFjYmViNDM1ZjU0ZjcxMzcxY2UiLCJpYXQiOjE3NDYwOTI0OTF9.6pnIDUG0sUHhf0s7x7F8icjZXSVhiPPY6xcOrnhtmhY",
      "user": {
          "fullname": {
              "firstname": "hello1",
              "lastname": "hello2"
          },
          "email": "hello2@gmail.com",
          "password": "$2b$10$01GsoFdfKcEJ1uIT/G2Mtu3FV265G5lUrRPFMdLMZ/wowBV/gX0Km",
          "_id": "681341cbeb435f54f71371ce",
          "__v": 0
      }
  }
  ```


### Get User Profile

- **Endpoint:**  
  `GET /user/profile`

- **Description:**  
  This route returns the profile information of the authenticated user. It requires a valid authentication token.

- **Request Format:**

  **Headers:**  
  `Authorization: Bearer <token>`  
  or  
  `Cookie: token=<token>`

- **Response Format:**
  ```json
  {
      "fullname": {
          "firstname": "hello1",
          "lastname": "hello2"
      },
      "email": "hello2@gmail.com",
      "_id": "681341cbeb435f54f71371ce",
      "__v": 0
  }
  ```

### Logout User

- **Endpoint:**  
  `GET /user/logout`

- **Description:**  
  This route logs out the current user by clearing the authentication token cookie and adding the token to a blocklist. It requires a valid authentication token.

- **Request Format:**

  **Headers:**  
  `Authorization: Bearer <token>`  
  or  
  `Cookie: token=<token>`

- **Response Format:**
  ```json
  {
      "message": "logged out"
  }
  ```

## Captain Routes

### Register Captain

- **Endpoint:**  
  `POST /captain/register`

- **Description:**  
  This route registers a new captain. It validates the request data, hashes the captain's password, creates a new captain record in the database, and returns an authentication token along with captain information.

- **Request Format:**

  **Headers:**  
  `Content-Type: application/json`

  **Body:**
  ```json
  {
      "fullname": {
          "firstname": "John",
          "lastname": "Doe"
      },
      "email": "johndoe@example.com",
      "password": "password123",
      "vehicle": {
          "color": "black",
          "plate": "ABC123",
          "capacity": 4,
          "vehicleType": "car"
      }
  }
  ```
  - fullname.firstname (string, required): Minimum 3 characters
  - fullname.lastname (string, optional)
  - email (string, required): Must be a valid email address
  - password (string, required): Minimum 6 characters
  - vehicle.color (string, required): Minimum 3 characters
  - vehicle.plate (string, required): Minimum 3 characters
  - vehicle.capacity (number, required): Minimum 1
  - vehicle.vehicleType (string, required): Must be one of: 'car', 'motorcycle', 'auto'

- **Response Format:**
  ```json
  {
      "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
      "captain": {
          "fullname": {
              "firstname": "John",
              "lastname": "Doe"
          },
          "email": "johndoe@example.com",
          "vehicle": {
              "color": "black",
              "plate": "ABC123",
              "capacity": 4,
              "vehicleType": "car"
          },
          "status": "inactive",
          "_id": "681341cbeb435f54f71371ce",
          "__v": 0
      }
  }
  ```

### Login Captain

- **Endpoint:**  
  `POST /captain/login`

- **Description:**  
  This route logs in an existing captain. It validates the request data, verifies the captain's credentials, and returns a JWT token along with the captain information if authentication is successful.

- **Request Format:**

  **Headers:**  
  `Content-Type: application/json`

  **Body:**
  ```json
  {
      "email": "johndoe@example.com",
      "password": "password123"
  }
  ```
  - email (string, required): Must be a valid email address
  - password (string, required): Minimum 6 characters

- **Response Format:**
  ```json
  {
      "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
      "captain": {
          "fullname": {
              "firstname": "John",
              "lastname": "Doe"
          },
          "email": "johndoe@example.com",
          "vehicle": {
              "color": "black",
              "plate": "ABC123",
              "capacity": 4,
              "vehicleType": "car"
          },
          "status": "inactive",
          "_id": "681341cbeb435f54f71371ce",
          "__v": 0
      }
  }
  ```

### Get Captain Profile

- **Endpoint:**  
  `GET /captain/profile`

- **Description:**  
  This route returns the profile information of the authenticated captain. It requires a valid authentication token.

- **Request Format:**

  **Headers:**  
  `Authorization: Bearer <token>`  
  or  
  `Cookie: token=<token>`

- **Response Format:**
  ```json
  {
      "captain": {
          "fullname": {
              "firstname": "John",
              "lastname": "Doe"
          },
          "email": "johndoe@example.com",
          "vehicle": {
              "color": "black",
              "plate": "ABC123",
              "capacity": 4,
              "vehicleType": "car"
          },
          "status": "inactive",
          "_id": "681341cbeb435f54f71371ce",
          "__v": 0
      }
  }
  ```

### Logout Captain

- **Endpoint:**  
  `GET /captain/logout`

- **Description:**  
  This route logs out the current captain by clearing the authentication token cookie and adding the token to a blocklist. It requires a valid authentication token.

- **Request Format:**

  **Headers:**  
  `Authorization: Bearer <token>`  
  or  
  `Cookie: token=<token>`

- **Response Format:**
  ```json
  {
      "message": "Logout successfully"
  }
  ```

