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



