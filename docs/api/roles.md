# Roles API Documentation

## Overview

This document provides an overview of the roles API endpoints available in the Lynx RBAC Project. The roles API is responsible for handling role management, including role creation, retrieval, update, and deletion.

## Endpoints

### Create Role

- **URL**: `/roles`
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

### Get All Roles

- **URL**: `/roles`
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

### Get Role by ID

- **URL**: `/roles/:id`
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

### Update Role

- **URL**: `/roles/:id`
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

### Delete Role

- **URL**: `/roles/:id`
- **Method**: `DELETE`
- **Description**: Deletes a role by its ID.
- **Response**:
  ```json
  {
    "message": "Role deleted successfully"
  }
  ```

## Error Handling

The roles API returns appropriate HTTP status codes and error messages for different error scenarios. Common error responses include:

- **404 Not Found**: Role not found.
- **400 Bad Request**: Missing or invalid request parameters.
