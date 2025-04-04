# API Specifications

## Overview

This document provides a comprehensive overview of the API specifications for the Lynx RBAC Project. It includes details about the available endpoints, request and response formats, and error handling.

## Authentication API

### Endpoints

- **Login**: `/auth/login`
  - **Method**: `POST`
  - **Description**: Authenticates a user and returns a JWT token.
  - **Request Body**:
    ```json
    {
      "username": "string",
      "password": "string"
    }
    ```
  - **Response**:
    ```json
    {
      "access_token": "string"
    }
    ```

- **Refresh Token**: `/auth/refresh-token`
  - **Method**: `POST`
  - **Description**: Refreshes the JWT token.
  - **Request Headers**:
    - `Authorization`: `Bearer <access_token>`
  - **Request Body**:
    ```json
    {
      "refresh_token": "string"
    }
    ```
  - **Response**:
    ```json
    {
      "access_token": "string"
    }
    ```

## Users API

### Endpoints

- **Create User**: `/users`
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

- **Get All Users**: `/users`
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

- **Get User by ID**: `/users/:id`
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

- **Update User**: `/users/:id`
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

- **Delete User**: `/users/:id`
  - **Method**: `DELETE`
  - **Description**: Deletes a user by their ID.
  - **Response**:
    ```json
    {
      "message": "User deleted successfully"
    }
    ```

## Roles API

### Endpoints

- **Create Role**: `/roles`
  - **Method**: `POST`
  - **Description**: Creates a new role.
  - **Request Body**:
    ```json
    {
      "name": "string",
      "permissions": ["string"]
    }
    ```
  - **Response**:
    ```json
    {
      "id": "string",
      "name": "string",
      "permissions": ["string"]
    }
    ```

- **Get All Roles**: `/roles`
  - **Method**: `GET`
  - **Description**: Retrieves a list of all roles.
  - **Response**:
    ```json
    [
      {
        "id": "string",
        "name": "string",
        "permissions": ["string"]
      }
    ]
    ```

- **Get Role by ID**: `/roles/:id`
  - **Method**: `GET`
  - **Description**: Retrieves a role by its ID.
  - **Response**:
    ```json
    {
      "id": "string",
      "name": "string",
      "permissions": ["string"]
    }
    ```

- **Update Role**: `/roles/:id`
  - **Method**: `PUT`
  - **Description**: Updates a role's information.
  - **Request Body**:
    ```json
    {
      "name": "string",
      "permissions": ["string"]
    }
    ```
  - **Response**:
    ```json
    {
      "id": "string",
      "name": "string",
      "permissions": ["string"]
    }
    ```

- **Delete Role**: `/roles/:id`
  - **Method**: `DELETE`
  - **Description**: Deletes a role by its ID.
  - **Response**:
    ```json
    {
      "message": "Role deleted successfully"
    }
    ```

## Permissions API

### Endpoints

- **Create Permission**: `/permissions`
  - **Method**: `POST`
  - **Description**: Creates a new permission.
  - **Request Body**:
    ```json
    {
      "name": "string",
      "description": "string"
    }
    ```
  - **Response**:
    ```json
    {
      "id": "string",
      "name": "string",
      "description": "string"
    }
    ```

- **Get All Permissions**: `/permissions`
  - **Method**: `GET`
  - **Description**: Retrieves a list of all permissions.
  - **Response**:
    ```json
    [
      {
        "id": "string",
        "name": "string",
        "description": "string"
      }
    ]
    ```

- **Get Permission by ID**: `/permissions/:id`
  - **Method**: `GET`
  - **Description**: Retrieves a permission by its ID.
  - **Response**:
    ```json
    {
      "id": "string",
      "name": "string",
      "description": "string"
    }
    ```

- **Update Permission**: `/permissions/:id`
  - **Method**: `PUT`
  - **Description**: Updates a permission's information.
  - **Request Body**:
    ```json
    {
      "name": "string",
      "description": "string"
    }
    ```
  - **Response**:
    ```json
    {
      "id": "string",
      "name": "string",
      "description": "string"
    }
    ```

- **Delete Permission**: `/permissions/:id`
  - **Method**: `DELETE`
  - **Description**: Deletes a permission by its ID.
  - **Response**:
    ```json
    {
      "message": "Permission deleted successfully"
    }
    ```

## Error Handling

The API returns appropriate HTTP status codes and error messages for different error scenarios. Common error responses include:

- **400 Bad Request**: Missing or invalid request parameters.
- **401 Unauthorized**: Invalid credentials or token.
- **404 Not Found**: Resource not found.
