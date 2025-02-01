# Order Service Frontend Documentation

## Overview
The Order Service is an Angular-based e-commerce frontend application that provides product browsing, shopping cart management, and order processing capabilities. The application is built with Angular 12 and implements a modular architecture for better code organization and maintainability.

## Features

### 1. Product Management
- Browse product catalog
- View detailed product information 
- Filter products by:
  - Brand
  - Category
  - Price ranges
- Product search functionality

### 2. Shopping Cart
- Add products to cart
- Update product quantities
- Remove products from cart
- Clear entire cart
- View cart total
- Checkout functionality

### 3. Order Management
- View order history
- View detailed order information
- Track order status

### 4. User Authentication
- User registration
- User login/logout
- Profile management
- Token-based authentication

## Routes

### Public Routes
- `/products` - Product catalog listing
- `/products/:id` - Individual product details
- `/account/login` - User login page
- `/account/register` - User registration page

### Protected Routes (Requires Authentication)
- `/account/profile` - User profile management
- `/account/orders` - Order history listing
- `/account/orders/:id` - Individual order details
- `/cart` - Shopping cart management

## API Integration

The frontend integrates with several backend API endpoints:

### Products API
### Orders API
### Shopping Cart API

## Authentication

The application uses JWT (JSON Web Token) for authentication([1](https://github.com/SamC1832js/OrderService/blob/master/README.md)). The token is:
- Stored securely
- Included in API requests
- Validated on protected routes
- Expires after 2 hours

## Technical Details

### Development Server
- Run `ng serve` for a dev server
- Navigate to `http://localhost:4200/`
- Auto-reload enabled for development

### Build
- Run `ng build` to build the project
- Production builds are stored in `dist/` directory

### Testing
- Unit tests via Karma
- End-to-end tests available
- Test configuration in karma.conf.js

## CORS Configuration
The frontend is configured to work with the backend API with the following CORS settings([1](https://github.com/SamC1832js/OrderService/blob/master/README.md)):
- Allowed Origin: `http://localhost:4200`
- Allowed Methods: GET, POST, PUT, DELETE, OPTIONS
- Credentials: Allowed
- Headers: All allowed

## Error Handling
The application implements comprehensive error handling for:
- 400 Bad Request - Invalid input
- 401 Unauthorized - Authentication issues
- 403 Forbidden - Permission issues
- 404 Not Found - Resource not found
- 500 Internal Server Error - Server errors

## Dependencies

```12:25:package.json
  "dependencies": {
    "@angular/animations": "~12.2.0",
    "@angular/common": "~12.2.0",
    "@angular/compiler": "~12.2.0",
    "@angular/core": "~12.2.0",
    "@angular/forms": "~12.2.0",
    "@angular/platform-browser": "~12.2.0",
    "@angular/platform-browser-dynamic": "~12.2.0",
    "@angular/router": "~12.2.0",
    "order-service": "file:",
    "rxjs": "~6.6.0",
    "tslib": "^2.3.0",
    "zone.js": "~0.11.4"
  },
```


This documentation provides an overview of the Order Service frontend application's capabilities and technical implementation. For more detailed information about specific components or features, please refer to the individual component documentation or source code.
