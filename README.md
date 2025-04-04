# Lynx RBAC Project

A complete Role-Based Access Control (RBAC) system built with NestJS, Drizzle ORM, PostgreSQL, and Lynx UI components.

## Overview

This project implements a robust RBAC system that allows fine-grained control over user permissions across an application. It provides a comprehensive solution for authentication, authorization, and user management with real-time features, internationalization support, and detailed audit logging.

## Features

- **Authentication**
  - JWT-based authentication flow
  - Token refresh mechanism
  - Secure password handling
  
- **Authorization**
  - Role-based access control
  - Permission-based access control
  - Hierarchical roles with inheritance

- **User Management**
  - User registration and profile management
  - Role assignment
  - User status tracking

- **Real-time Updates**
  - WebSocket integration for notifications
  - Live updates for permission changes

- **Audit Logging**
  - Comprehensive logging of RBAC changes
  - Tracking of access attempts
  - Security event monitoring

- **Internationalization**
  - Multi-language support
  - Locale management
  - Translated UI and messages

## Architecture

The application follows a modern client-server architecture:

- **Backend**: NestJS API with Drizzle ORM for PostgreSQL
- **Frontend**: React application with Lynx UI components
- **Database**: PostgreSQL for data persistence
- **WebSockets**: Real-time communication channel

## Getting Started

### Prerequisites

- Node.js (v16+)
- PostgreSQL
- npm or yarn

### Backend Setup

1. Navigate to the backend directory:
   ```
   cd backend
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Copy the environment example file and configure your variables:
   ```
   cp .env.example .env
   ```

4. Set up the database:
   ```
   npm run db:migrate
   npm run db:seed
   ```

5. Start the development server:
   ```
   npm run start:dev
   ```

### Frontend Setup

1. Navigate to the frontend directory:
   ```
   cd frontend
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Copy the environment example file and configure your variables:
   ```
   cp .env.example .env
   ```

4. Start the development server:
   ```
   npm run dev
   ```

## API Documentation

The API is documented using Swagger UI. Once the backend is running, you can access the API documentation at:

```
http://localhost:3000/api/docs
```

## User Roles

The system comes with the following predefined roles:

- **Administrator**: Full system access
- **Manager**: Access to manage users and view reports
- **User**: Basic application access
- **Guest**: Limited read-only access

Each role has associated permissions that can be customized through the admin interface.

## Audit Logging

All changes to roles, permissions, and user assignments are recorded in the audit log. This provides a comprehensive trail of who changed what and when, enhancing security and accountability.

## Internationalization

The application supports multiple languages out of the box:

- English
- Spanish
- French

Additional languages can be added by creating new locale files in the appropriate directories.

## WebSocket Events

Real-time events are used for:

- Notification of permission changes
- User status updates
- System-wide announcements

## Directory Structure

The project is organized into a clear directory structure to separate concerns and enhance maintainability. Below is an overview of the files/folders structure that includes internationalization, WebSockets, audit logging, and Lynx UI Components integration:

```
lynx-rbac-project/
│── backend/                     # NestJS Backend API
│   ├── src/
│   │   ├── auth/                # Authentication module
│   │   │   ├── dto/             # Data Transfer Objects for auth
│   │   │   │   ├── login.dto.ts
│   │   │   │   ├── register.dto.ts
│   │   │   │   ├── refresh-token.dto.ts
│   │   │   ├── guards/          # Auth guards
│   │   │   │   ├── jwt-auth.guard.ts
│   │   │   │   ├── roles.guard.ts
│   │   │   ├── auth.controller.ts
│   │   │   ├── auth.service.ts
│   │   │   ├── auth.module.ts
│   │   │   ├── jwt.strategy.ts
│   │   │   ├── refresh-token.strategy.ts
│   │   ├── users/               # User management module
│   │   │   ├── dto/             # DTOs for user operations
│   │   │   │   ├── create-user.dto.ts
│   │   │   │   ├── update-user.dto.ts
│   │   │   ├── users.controller.ts
│   │   │   ├── users.service.ts
│   │   │   ├── users.module.ts
│   │   │   ├── users.entity.ts  # Drizzle ORM User schema
│   │   ├── roles/               # Role management module
│   │   │   ├── dto/
│   │   │   │   ├── create-role.dto.ts
│   │   │   │   ├── update-role.dto.ts
│   │   │   ├── roles.controller.ts
│   │   │   ├── roles.service.ts
│   │   │   ├── roles.module.ts
│   │   │   ├── roles.entity.ts
│   │   │   ├── role.enum.ts     # Enum for predefined roles
│   │   ├── permissions/
│   │   │   ├── dto/
│   │   │   │   ├── create-permission.dto.ts
│   │   │   │   ├── update-permission.dto.ts
│   │   │   ├── permissions.controller.ts
│   │   │   ├── permissions.service.ts
│   │   │   ├── permissions.module.ts
│   │   │   ├── permissions.entity.ts
│   │   │   ├── permission.enum.ts
│   │   ├── middleware/
│   │   │   ├── auth.middleware.ts
│   │   │   ├── rbac.middleware.ts
│   │   ├── database/
│   │   │   ├── drizzle.config.ts
│   │   │   ├── schema/          # All DB schemas in one place
│   │   │   │   ├── index.ts     # Export all schemas
│   │   │   │   ├── relations.ts # Define relationships
│   │   │   ├── migrations/
│   │   │   ├── seed/
│   │   │   │   ├── seed.ts
│   │   │   │   ├── initial-roles.data.ts
│   │   │   │   ├── initial-permissions.data.ts
│   │   ├── audit-logs/          # Audit logging for RBAC changes
│   │   │   ├── audit-logs.controller.ts
│   │   │   ├── audit-logs.service.ts
│   │   │   ├── audit-logs.module.ts
│   │   │   ├── audit-logs.entity.ts
│   │   │   ├── audit-event.enum.ts
│   │   ├── websockets/          # WebSocket functionality
│   │   │   ├── notifications.gateway.ts
│   │   │   ├── notifications.module.ts
│   │   │   ├── dto/
│   │   │   │   ├── notification.dto.ts
│   │   ├── utils/
│   │   │   ├── logger.ts
│   │   │   ├── error-handler.ts
│   │   │   ├── validators.ts    # Custom validation helpers
│   │   ├── docs/
│   │   │   ├── swagger.ts
│   │   ├── i18n/                # Internationalization
│   │   │   ├── i18n.module.ts
│   │   │   ├── languages/
│   │   │   │   ├── en.json
│   │   │   │   ├── es.json
│   │   │   │   ├── fr.json
│   │   ├── config/              # Configuration modules
│   │   │   ├── app.config.ts
│   │   │   ├── database.config.ts
│   │   │   ├── jwt.config.ts
│   │   ├── app.module.ts
│   │   ├── main.ts
│   ├── test/
│   │   ├── integration/         # Integration tests
│   │   │   ├── auth.spec.ts
│   │   │   ├── roles.spec.ts
│   │   │   ├── permissions.spec.ts
│   │   ├── e2e/                 # End-to-end tests
│   │   │   ├── auth.e2e-spec.ts
│   │   │   ├── roles.e2e-spec.ts
│   │   ├── unit/                # Unit tests
│   │   │   ├── auth.service.spec.ts
│   │   │   ├── roles.service.spec.ts
│   ├── .env.example             # Template for environment variables
│   ├── .env                     # Environment variables (gitignored)
│   ├── nest-cli.json
│   ├── package.json
│   ├── README.md
│
│── frontend/                     # Lynx TypeScript Frontend
│   ├── src/
│   │   ├── components/
│   │   │   ├── ui/              # Reusable UI components
│   │   │   │   ├── Button/
│   │   │   │   ├── Card/
│   │   │   │   ├── Table/
│   │   │   ├── auth/            # Auth-related components
│   │   │   │   ├── LoginForm.tsx
│   │   │   │   ├── RegisterForm.tsx
│   │   │   │   ├── ResetPassword.tsx
│   │   │   ├── layout/          # Layout components
│   │   │   │   ├── Navbar.tsx
│   │   │   │   ├── Sidebar.tsx
│   │   │   │   ├── Footer.tsx
│   │   │   ├── rbac/            # RBAC-specific components
│   │   │   │   ├── RoleManager.tsx
│   │   │   │   ├── PermissionManager.tsx
│   │   │   │   ├── UserRoleAssignment.tsx
│   │   ├── hooks/
│   │   │   ├── useAuth.ts       # Authentication hooks
│   │   │   ├── useRBAC.ts       # Authorization hooks
│   │   │   ├── useWebSocket.ts  # WebSocket connection
│   │   │   ├── useAuditLogs.ts  # Access audit logs
│   │   ├── services/
│   │   │   ├── api.ts           # Base API setup
│   │   │   ├── auth.service.ts
│   │   │   ├── users.service.ts
│   │   │   ├── roles.service.ts
│   │   │   ├── permissions.service.ts
│   │   │   ├── websocket.service.ts
│   │   │   ├── audit-logs.service.ts
│   │   ├── views/
│   │   │   ├── Dashboard/       # Admin dashboard
│   │   │   ├── Users/           # User management
│   │   │   ├── Roles/           # Role management
│   │   │   ├── Permissions/     # Permission management
│   │   │   ├── AuditLogs/       # Audit logs view
│   │   │   ├── Profile/         # User profile
│   │   ├── context/
│   │   │   ├── AuthContext.tsx  # Authentication context
│   │   │   ├── RBACContext.tsx  # RBAC state and rules
│   │   │   ├── WebSocketContext.tsx # Real-time notifications
│   │   ├── utils/
│   │   │   ├── permissions.ts   # Permission checking utilities
│   │   │   ├── formatters.ts    # Date, currency formatters
│   │   │   ├── validators.ts    # Form validation helpers
│   │   ├── i18n/                # Internationalization
│   │   │   ├── i18n.ts          # i18next configuration
│   │   │   ├── locales/
│   │   │   │   ├── en/
│   │   │   │   │   ├── common.json
│   │   │   │   │   ├── auth.json
│   │   │   │   ├── es/
│   │   │   │   ├── fr/
│   │   ├── App.tsx
│   │   ├── index.tsx
│   │   ├── routes.tsx           # Route definitions with RBAC
│   ├── public/
│   │   ├── locales/             # Public translations
│   │   ├── images/
│   │   ├── favicon.ico
│   ├── lynx.config.ts           # Lynx UI configuration
│   ├── tsconfig.json
│   ├── vite.config.ts
│   ├── .env.example
│   ├── .env                     # Frontend env vars (gitignored)
│   ├── README.md
│
│── logs/
│   ├── access.log
│   ├── errors.log
│   ├── audit.log                # Specific log for permission/role changes
│
│── docs/
│   ├── api/
│   │   ├── auth.md
│   │   ├── users.md
│   │   ├── roles.md
│   │   ├── permissions.md
│   ├── roles-permissions.md
│   ├── api-specs.md
│   ├── testing-strategy.md
│   ├── i18n-guide.md            # Guide for translation management
│   ├── websocket-events.md      # Documentation for WebSocket events
│
│── .gitignore
│── package.json
│── README.md
```

## Step-by-Step Coding Plan

### Backend

1. **Authentication Module**
   - Add `login.dto.ts`, `register.dto.ts`, and `refresh-token.dto.ts` in `backend/src/auth/dto/`.
   - Add `jwt-auth.guard.ts` and `roles.guard.ts` in `backend/src/auth/guards/`.
   - Add `auth.controller.ts`, `auth.service.ts`, `auth.module.ts`, `jwt.strategy.ts`, and `refresh-token.strategy.ts` in `backend/src/auth/`.

2. **User Management Module**
   - Add `create-user.dto.ts` and `update-user.dto.ts` in `backend/src/users/dto/`.
   - Add `users.controller.ts`, `users.service.ts`, `users.module.ts`, and `users.entity.ts` in `backend/src/users/`.

3. **Role Management Module**
   - Add `create-role.dto.ts` and `update-role.dto.ts` in `backend/src/roles/dto/`.
   - Add `roles.controller.ts`, `roles.service.ts`, `roles.module.ts`, `roles.entity.ts`, and `role.enum.ts` in `backend/src/roles/`.

4. **Permission Management Module**
   - Add `create-permission.dto.ts` and `update-permission.dto.ts` in `backend/src/permissions/dto/`.
   - Add `permissions.controller.ts`, `permissions.service.ts`, `permissions.module.ts`, `permissions.entity.ts`, and `permission.enum.ts` in `backend/src/permissions/`.

5. **Middleware**
   - Add `auth.middleware.ts` and `rbac.middleware.ts` in `backend/src/middleware/`.

6. **Database**
   - Add `drizzle.config.ts` in `backend/src/database/`.
   - Add `index.ts` and `relations.ts` in `backend/src/database/schema/`.
   - Add `seed.ts`, `initial-roles.data.ts`, and `initial-permissions.data.ts` in `backend/src/database/seed/`.

7. **Audit Logs**
   - Add `audit-logs.controller.ts`, `audit-logs.service.ts`, `audit-logs.module.ts`, `audit-logs.entity.ts`, and `audit-event.enum.ts` in `backend/src/audit-logs/`.

8. **WebSockets**
   - Add `notifications.gateway.ts`, `notifications.module.ts`, and `notification.dto.ts` in `backend/src/websockets/`.

9. **Utilities**
   - Add `logger.ts`, `error-handler.ts`, and `validators.ts` in `backend/src/utils/`.

10. **Documentation**
    - Add `swagger.ts` in `backend/src/docs/`.

11. **Internationalization**
    - Add `i18n.module.ts` in `backend/src/i18n/`.
    - Add `en.json`, `es.json`, and `fr.json` in `backend/src/i18n/languages/`.

12. **Configuration**
    - Add `app.config.ts`, `database.config.ts`, and `jwt.config.ts` in `backend/src/config/`.

13. **Main Application**
    - Add `app.module.ts` and `main.ts` in `backend/src/`.

14. **Testing**
    - Add `auth.spec.ts`, `roles.spec.ts`, and `permissions.spec.ts` in `backend/test/integration/`.
    - Add `auth.e2e-spec.ts` and `roles.e2e-spec.ts` in `backend/test/e2e/`.
    - Add `auth.service.spec.ts` and `roles.service.spec.ts` in `backend/test/unit/`.

### Frontend

1. **Components**
   - Add `Button/`, `Card/`, and `Table/` in `frontend/src/components/ui/`.
   - Add `LoginForm.tsx`, `RegisterForm.tsx`, and `ResetPassword.tsx` in `frontend/src/components/auth/`.
   - Add `Navbar.tsx`, `Sidebar.tsx`, and `Footer.tsx` in `frontend/src/components/layout/`.
   - Add `RoleManager.tsx`, `PermissionManager.tsx`, and `UserRoleAssignment.tsx` in `frontend/src/components/rbac/`.

2. **Hooks**
   - Add `useAuth.ts`, `useRBAC.ts`, `useWebSocket.ts`, and `useAuditLogs.ts` in `frontend/src/hooks/`.

3. **Services**
   - Add `api.ts`, `auth.service.ts`, `users.service.ts`, `roles.service.ts`, `permissions.service.ts`, `websocket.service.ts`, and `audit-logs.service.ts` in `frontend/src/services/`.

4. **Views**
   - Add `Dashboard/`, `Users/`, `Roles/`, `Permissions/`, `AuditLogs/`, and `Profile/` in `frontend/src/views/`.

5. **Context**
   - Add `AuthContext.tsx`, `RBACContext.tsx`, and `WebSocketContext.tsx` in `frontend/src/context/`.

6. **Utilities**
   - Add `permissions.ts`, `formatters.ts`, and `validators.ts` in `frontend/src/utils/`.

7. **Internationalization**
   - Add `i18n.ts` in `frontend/src/i18n/`.
   - Add `common.json` and `auth.json` in `frontend/src/i18n/locales/en/`.
   - Add `es/` and `fr/` in `frontend/src/i18n/locales/`.

8. **Main Application**
   - Add `App.tsx`, `index.tsx`, and `routes.tsx` in `frontend/src/`.

9. **Public Assets**
   - Add `locales/`, `images/`, and `favicon.ico` in `frontend/public/`.

10. **Configuration**
    - Add `lynx.config.ts`, `tsconfig.json`, and `vite.config.ts` in `frontend/`.

11. **Environment Variables**
    - Add `.env.example` and `.env` in `frontend/`.

### Logs

1. **Log Files**
   - Add `access.log`, `errors.log`, and `audit.log` in `logs/`.

### Documentation

1. **API Documentation**
   - Add `auth.md`, `users.md`, `roles.md`, and `permissions.md` in `docs/api/`.

2. **General Documentation**
   - Add `roles-permissions.md`, `api-specs.md`, `testing-strategy.md`, `i18n-guide.md`, and `websocket-events.md` in `docs/`.

### Root Directory

1. **Configuration Files**
   - Add `.gitignore`, `package.json`, and `README.md` in the root directory.
