# Users API Documentation

## Overview

This document provides an overview of the users API endpoints available in the Lynx RBAC Project. The users API is responsible for handling user management, including user creation, retrieval, update, and deletion.

## Endpoints

### Create User

- **URL**: `/users`
- **Method**: `POST`
- **Description**: Creates a new user.
- **Request Body**:
  ```json
  {
    "username": "string",
    "password": "string",
    "email": "string",
    "roles": ["string"]
  }
  ```
- **Response**:
  ```json
  {
    "id": "string",
    "username": "string",
    "email": "string",
    "roles": ["string"]
  }
  ```

### Get All Users

- **URL**: `/users`
- **Method**: `GET`
- **Description**: Retrieves a list of all users.
- **Response**:
  ```json
  [
    {
      "id": "string",
      "username": "string",
      "email": "string",
      "roles": ["string"]
    }
  ]
  ```

### Get User by ID

- **URL**: `/users/:id`
- **Method**: `GET`
- **Description**: Retrieves a user by their ID.
- **Response**:
  ```json
  {
    "id": "string",
    "username": "string",
    "email": "string",
    "roles": ["string"]
  }
  ```

### Update User

- **URL**: `/users/:id`
- **Method**: `PUT`
- **Description**: Updates a user's information.
- **Request Body**:
  ```json
  {
    "username": "string",
    "email": "string",
    "roles": ["string"]
  }
  ```
- **Response**:
  ```json
  {
    "id": "string",
    "username": "string",
    "email": "string",
    "roles": ["string"]
  }
  ```

### Delete User

- **URL**: `/users/:id`
- **Method**: `DELETE`
- **Description**: Deletes a user by their ID.
- **Response**:
  ```json
  {
    "message": "User deleted successfully"
  }
  ```

## Error Handling

The users API returns appropriate HTTP status codes and error messages for different error scenarios. Common error responses include:

- **404 Not Found**: User not found.
- **400 Bad Request**: Missing or invalid request parameters.
