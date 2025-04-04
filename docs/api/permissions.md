# Permissions API Documentation

## Overview

This document provides an overview of the permissions API endpoints available in the Lynx RBAC Project. The permissions API is responsible for handling permission management, including permission creation, retrieval, update, and deletion.

## Endpoints

### Create Permission

- **URL**: `/permissions`
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

### Get All Permissions

- **URL**: `/permissions`
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

### Get Permission by ID

- **URL**: `/permissions/:id`
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

### Update Permission

- **URL**: `/permissions/:id`
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

### Delete Permission

- **URL**: `/permissions/:id`
- **Method**: `DELETE`
- **Description**: Deletes a permission by its ID.
- **Response**:
  ```json
  {
    "message": "Permission deleted successfully"
  }
  ```

## Error Handling

The permissions API returns appropriate HTTP status codes and error messages for different error scenarios. Common error responses include:

- **404 Not Found**: Permission not found.
- **400 Bad Request**: Missing or invalid request parameters.
