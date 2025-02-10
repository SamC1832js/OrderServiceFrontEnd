# Order Service Frontend Documentation


http://order-service-client.s3-website.us-east-2.amazonaws.com/products
deployed on AWS S3
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


```markdown
**Console Logs Summary**

### 1. Initial Load & Application Creation
```log
loader.tsx:32 Warning: componentWillMount has been renamed...
ReducerUtils.ts:47 The return value does not contain any draft...
ApplicationSagas.tsx:644 Warning: Function components cannot be given refs...
WorkerUtil.ts:321 Main SETUP took 49ms
WorkerUtil.ts:327  Worker SETUP took 3ms
WorkerUtil.ts:328  Transfer SETUP took 46ms
index.tsx:92 Widget registration took: 8.400000005960464 ms
// ... other initialization logs ...
```

<details>
<summary>Full Initialization Logs</summary>

```log
loader.tsx:32 Warning: componentWillMount has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.
* Rename componentWillMount to UNSAFE_componentWillMount to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run `npx react-codemod rename-unsafe-lifecycles` in your project source folder.

ReducerUtils.ts:47 The return value does not contain any draft, please use 'rawReturn()' to wrap the return value to improve performance.
WorkerUtil.ts:321 Main SETUP took 49ms
WorkerUtil.ts:327  Worker SETUP took 3ms
WorkerUtil.ts:328  Transfer SETUP took 46ms
index.tsx:92 Widget registration took: 8.400000005960464 ms
ApplicationSagas.tsx:644 Warning: Function components cannot be given refs. Attempts to access this ref will fail. Did you mean to use React.forwardRef()?

Check the render method of `Styled(Component)`.
    at O (https://dev.appsmith.com/static/js/bundle.js:532658:8)
    at Trigger (https://dev.appsmith.com/static/js/bundle.js:469231:92)
    // ... full component stack trace ...
WorkerUtil.ts:321 Main LOAD_LIBRARIES took 23ms
WorkerUtil.ts:327  Worker LOAD_LIBRARIES took 1ms
WorkerUtil.ts:328  Transfer LOAD_LIBRARIES took 22ms
WorkerUtil.ts:321 Main SET_EVALUATION_VERSION took 23ms
WorkerUtil.ts:321 Main CLEAR_CACHE took 19ms
// ... remaining initialization logs ...
```
</details>

---

### 2. Table Widget Creation
```log
EvaluationsSaga.ts:701 {action: {…}, triggeredLinting: true, triggeredEvaluation: true}
index.ts:33 SyntaxError: Unexpected token (1:0) (at acorn.mjs:3640:1)
```

<details>
<summary>Full Table Widget Logs</summary>

```log
{action: {…}, triggeredLinting: true, triggeredEvaluation: true}action: {type: 'UPDATE_LAYOUT', payload: {…}, @@redux-saga/SAGA_ACTION: true}triggeredEvaluation: truetriggeredLinting: true[[Prototype]]: Object
EvaluationsSaga.ts:264 {unevalTree: {…}, configTree: {…}}configTree: {MainContainer: {…}, Table1: {…}}unevalTree: {MainContainer: {…}, Table1: {…}, appsmith: {…}}[[Prototype]]: Object

index.ts:33 SyntaxError: Unexpected token (1:0) (at acorn.mjs:3640:1)
    at __webpack_modules__../packages/ast/node_modules/acorn/dist/acorn.mjs.pp$4.raise (acorn.mjs:3640:1)
    at __webpack_modules__../packages/ast/node_modules/acorn/dist/acorn.mjs.pp$9.unexpected (acorn.mjs:766:1)
    // ... full error stack trace ...
    at LazyCodeEditorStateMachine.handleStateChange (index.tsx:160:1)
    at LazyCodeEditorStateMachine.transition (index.tsx:105:1)
    at idleCallbackId.window.requestIdleCallback.timeout (index.tsx:142:1)

WorkerUtil.ts:321 Main EVAL_TREE took 116ms
WorkerUtil.ts:327  Worker EVAL_TREE took 51ms
WorkerUtil.ts:328  Transfer EVAL_TREE took 65ms
// ... remaining table widget logs ...
```
</details>

---

### 3. Data Source Selection
```log
react-dom.development.js:67 Warning: validateDOMNesting(...): <p> cannot appear as descendant of <p>
```

<details>
<summary>Full Data Source Selection Logs</summary>

```log
react-dom.development.js:67 Warning: validateDOMNesting(...): <p> cannot appear as a descendant of <p>.
    at p
    at O (https://dev.appsmith.com/static/js/bundle.js:532658:8)
    at p
    at O (https://dev.appsmith.com/static/js/bundle.js:532658:8)
    at Trigger (https://dev.appsmith.com/static/js/bundle.js:469231:92)
    at Tooltip (https://dev.appsmith.com/static/js/bundle.js:468348:32)
    // ... full component stack trace ...
    at TransitionGroup (https://dev.appsmith.com/static/js/bundle.js:331033:30)
    at PanelStack (https://dev.appsmith.com/static/js/bundle.js:321257:43)
    at O (https://dev.appsmith.com/static/js/bundle.js:532658:8)
    at div
    at PropertyPane (https://dev.appsmith.com/static/js/src_utils_editor_EditorUtils_ts-data_ima…g_xml_3Csvg_width_2748_27_height_2748_27_xmlns_2-f1a7a1.chunk.js:125941:81)
    // ... remaining component hierarchy ...
```
</details>

---

### 4. Environment Access Error
```log
Data Panel Error: You do not have access to this environment. Please contact your workspace administrator to gain access
```

---

**Key Errors Summary**
1. **React Lifecycle Warnings**  
   - `componentWillMount` deprecation warning  
   - Function component ref error

2. **Linting Performance Issues**  
   - `rawReturn()` recommendation in ReducerUtils

3. **Syntax Error**  
   - Unexpected token error when creating table widget  
   ```log
   index.ts:33 SyntaxError: Unexpected token (1:0) (at acorn.mjs:3640:1)

4. **DOM Validation Warnings**  
   - `<p>` inside `<p>` nesting warning  
   - Missing aria-label in Switch component

5. **Environment Access Error**  
   ```log
   You do not have access to this environment. Please contact your workspace administrator to gain access
   ```

6. **Performance Metrics**  
   - Worker setup times  
   - Tree generation and evaluation times  
   - Linting process durations

**Recommendations for GitHub Issue:**
1. Focus on the SyntaxError and environment access error as primary issues
2. Include React warnings as secondary information
3. Note the performance metrics as potential optimization areas
4. Mention the DOM validation warnings as code quality issues
```

This format organizes the logs by context while keeping the main issue thread readable. The collapsible sections allow maintainers to dive into details if needed. The key errors summary at the end helps maintainers quickly identify priority areas.

