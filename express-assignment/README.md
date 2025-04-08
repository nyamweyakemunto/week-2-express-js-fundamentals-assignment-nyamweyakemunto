# Express.js Assignment

A simple Express.js application demonstrating routes, middleware, and RESTful API implementation.

## Setup

1. Clone the repository
2. Install dependencies:
   ```sh
   npm install
3.  Create a .env file in the root directory with    your environment variable.
4. Start the server 
   node index.js
5. API Endpoints
Users
GET /api/users - Get all users

GET /api/users/:id - Get a single user

POST /api/users - Create a new user

PUT /api/users/:id - Update a user

DELETE /api/users/:id - Delete a user

Products
GET /api/products - Get all products (optional minPrice query parameter)

GET /api/products/:id - Get a single product

POST /api/products - Create a new product

PUT /api/products/:id - Update a product

DELETE /api/products/:id - Delete a product

Testing
Use Postman or cURL to test the endpoints. Example requests:

sh
Copy
# Get all users
curl http://localhost:3000/api/users

# Create a new user
curl -X POST -H "Content-Type: application/json" -d '{"name":"New User","email":"new@example.com"}' http://localhost:3000/api/users

# Get products over $500
curl http://localhost:3000/api/products?minPrice=500
Copy

## 9. Testing the Application
You can test the endpoints using cURL or Postman:

Get all users:

sh
Copy
curl http://localhost:3000/api/users
Create a new user:

sh
Copy
curl -X POST -H "Content-Type: application/json" -d '{"name":"New User","email":"new@example.com"}' http://localhost:3000/api/users
Get products over $500:

sh
Copy
curl http://localhost:3000/api/products?minPrice=500

Key Features Implemented
RESTful API Design: Proper use of HTTP methods and status codes

Middleware: Custom logger and error handling middleware

Route Separation: Clean separation of routes and controllers

Error Handling: Comprehensive error handling with proper status codes

Environment Configuration: Using dotenv for environment variables

Query Parameters: Support for filtering products by price

Request Validation: Basic validation in controllers