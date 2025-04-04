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
  - User creation, deletion, and modification
  - User role assignment
  - User permission assignment
  
- **Logging**
  - Access logs
  - Error logs
  - Audit logs
  
- **Internationalization**
  - Multi-language support
  - Language switcher
  
- **WebSockets**
  - Real-time notifications
  - Real-time updates
  
## Setup Instructions
  
### Prerequisites
  
- Node.js (>=14.x)
- PostgreSQL
  
### Backend Setup
  
1. Clone the repository:
  
   ```bash
   git clone https://github.com/githubnext/workspace-blank.git
   cd workspace-blank/backend
   ```
  
2. Install dependencies:
  
   ```bash
   npm install
   ```
  
3. Set up environment variables:
  
   ```bash
   cp .env.example .env
   ```
  
4. Run the database migrations:
  
   ```bash
   npm run migrate
   ```
  
5. Start the backend server:
  
   ```bash
   npm run start:dev
   ```
  
### Frontend Setup
  
1. Navigate to the frontend directory:
  
   ```bash
   cd ../frontend
   ```
  
2. Install dependencies:
  
   ```bash
   npm install
   ```
  
3. Set up environment variables:
  
   ```bash
   cp .env.example .env
   ```
  
4. Start the frontend server:
  
   ```bash
   npm start
   ```
  
## Usage Instructions
  
1. Open your browser and navigate to `http://localhost:3000`.
2. Log in with your credentials.
3. Use the application to manage users, roles, and permissions.
  
## Contribution Guidelines
  
1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes.
4. Commit your changes (`git commit -am 'Add new feature'`).
5. Push to the branch (`git push origin feature-branch`).
6. Create a new Pull Request.
  
## License
  
This project is licensed under the MIT License.
