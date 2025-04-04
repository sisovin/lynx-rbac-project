# Authentication API Documentation

## Overview

This document provides an overview of the authentication API endpoints available in the Lynx RBAC Project. The authentication API is responsible for handling user authentication, including login and token refresh.

## Endpoints

### Login

- **URL**: `/auth/login`
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

### Refresh Token

- **URL**: `/auth/refresh-token`
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

## Error Handling

The authentication API returns appropriate HTTP status codes and error messages for different error scenarios. Common error responses include:

- **401 Unauthorized**: Invalid credentials or token.
- **400 Bad Request**: Missing or invalid request parameters.
