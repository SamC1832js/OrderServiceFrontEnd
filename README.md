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
<summary>Home page -> create application -> go into application edit page</summary>

```log
ApplicationSagas.tsx:644 Warning: Function components cannot be given refs. Attempts to access this ref will fail. Did you mean to use React.forwardRef()?

Check the render method of `Styled(Component)`.
    at O (https://dev.appsmith.com/static/js/bundle.js:532658:8)
    at Trigger (https://dev.appsmith.com/static/js/bundle.js:469231:92)
    at Tooltip (https://dev.appsmith.com/static/js/bundle.js:468348:32)
    at Tooltip (https://dev.appsmith.com/static/js/bundle.js:22110:24)
    at AppsmithLink (https://dev.appsmith.com/static/js/bundle.js:192979:73)
    at div
    at O (https://dev.appsmith.com/static/js/bundle.js:532658:8)
    at Box (https://dev.appsmith.com/static/js/bundle.js:9242:23)
    at Flex (https://dev.appsmith.com/static/js/bundle.js:10819:23)
    at div
    at O (https://dev.appsmith.com/static/js/bundle.js:532658:8)
    at Box (https://dev.appsmith.com/static/js/bundle.js:9242:23)
    at Flex (https://dev.appsmith.com/static/js/bundle.js:10819:23)
    at Left (https://dev.appsmith.com/static/js/bundle.js:21074:23)
    at div
    at O (https://dev.appsmith.com/static/js/bundle.js:532658:8)
    at Box (https://dev.appsmith.com/static/js/bundle.js:9242:23)
    at Flex (https://dev.appsmith.com/static/js/bundle.js:10819:23)
    at IDEHeader (https://dev.appsmith.com/static/js/bundle.js:21127:21)
    at GitContextProvider (https://dev.appsmith.com/static/js/bundle.js:149640:28)
    at GitApplicationContextProvider (https://dev.appsmith.com/static/js/bundle.js:117360:23)
    at Header (https://dev.appsmith.com/static/js/bundle.js:202966:74)
    at Route (https://dev.appsmith.com/static/js/bundle.js:509332:29)
    at Switch (https://dev.appsmith.com/static/js/bundle.js:509503:29)
    at Routes
    at Switch (https://dev.appsmith.com/static/js/bundle.js:509503:29)
    at Routes
    at AppHeader (https://dev.appsmith.com/static/js/bundle.js:131925:145)
    at C (https://dev.appsmith.com/static/js/bundle.js:509551:37)
    at Walkthrough (https://dev.appsmith.com/static/js/bundle.js:111640:24)
    at Suspense
    at Router (https://dev.appsmith.com/static/js/bundle.js:509014:30)
    at AppRouter (https://dev.appsmith.com/static/js/bundle.js:63307:76)
    at AppErrorBoundary (https://dev.appsmith.com/static/js/bundle.js:45866:145)
    at Fe (https://dev.appsmith.com/static/js/bundle.js:532578:60)
    at ThemedApp (https://dev.appsmith.com/static/js/bundle.js:171076:145)
    at ConnectFunction (https://dev.appsmith.com/static/js/bundle.js:503551:68)
    at Provider (https://dev.appsmith.com/static/js/bundle.js:503295:20)
    at FaroErrorBoundary (https://dev.appsmith.com/static/js/bundle.js:344730:145)
    at App
WorkerUtil.ts:321 Main SETUP took 46ms
WorkerUtil.ts:327  Worker SETUP took 6ms
WorkerUtil.ts:328  Transfer SETUP took 40ms
index.tsx:92 Widget registration took:  9.599999994039536 ms
3
ReducerUtils.ts:47 The return value does not contain any draft, please use 'rawReturn()' to wrap the return value to improve performance.
WorkerUtil.ts:321 Main LOAD_LIBRARIES took 23ms
WorkerUtil.ts:321 Main SET_EVALUATION_VERSION took 24ms
WorkerUtil.ts:321 Main CLEAR_CACHE took 20ms
ReducerUtils.ts:47 The return value does not contain any draft, please use 'rawReturn()' to wrap the return value to improve performance.
3
ReducerUtils.ts:47 The return value does not contain any draft, please use 'rawReturn()' to wrap the return value to improve performance.
layoutTree.ts:42 Auto Height: Tree generation time taken: 0.29999998211860657 ms
layoutTree.ts:42 Auto Height: Tree generation time taken: 0.09999999403953552 ms
containers.ts:172 Auto Height: Container Updates 
{updates: {…}}
containers.ts:187 Auto height: Container computations time taken: 0.699999988079071 ms
EvaluationsSaga.ts:701 
{action: {…}, triggeredLinting: true, triggeredEvaluation: true}
EvaluationsSaga.ts:264 
{unevalTree: {…}, configTree: {…}}
AppEditorEngine.ts:313 There was an error setting the latest git branch in local - userEmail: true, applicationId: 3465e74e-899f-4ef5-829d-ae35a814dedf, branch: null
WorkerUtil.ts:321 Main UPDATE_LINT_GLOBALS took 114ms
WorkerUtil.ts:321 Main LINT_TREE took 27ms
WorkerUtil.ts:327  Worker LINT_TREE took 4ms
WorkerUtil.ts:328  Transfer LINT_TREE took 23ms
LintingSagas.ts:127 
{lintTime: '28.40 ms'}
WorkerUtil.ts:321 Main EVAL_TREE took 32ms
WorkerUtil.ts:327  Worker EVAL_TREE took 8ms
WorkerUtil.ts:328  Transfer EVAL_TREE took 24ms
EvaluationsSaga.ts:178 
{evalMetaUpdatesLength: 0}
EvaluationsSaga.ts:182 
{jsUpdates: {…}}
EvaluationsSaga.ts:183 
{dataTree: {…}}
EvaluationsSaga.ts:186 
{timeTakenForSetupFirstTree: {…}, dependencies: {…}, inverseDependencies: {…}}
EvaluationsSaga.ts:186 
{timeTakenForEvalAndValidateFirstTree: {…}}
PostEvaluationSagas.ts:256 Tern 
{updates: Array(0)}
PostEvaluationSagas.ts:257 Tern definitions updated took  1.20
layoutTree.ts:42 Auto Height: Tree generation time taken: 0.09999999403953552 ms
widgets.ts:119 Auto Height: updates to process 
{updates: {…}}
widgets.ts:599 Auto height: Widgets to update: 
{widgetsToUpdate: {…}}
widgets.ts:666 Dynamic Height: Overall time taken:  1.4000000059604645 ms
layoutTree.ts:42 Auto Height: Tree generation time taken: 0 ms
layoutTree.ts:42 Auto Height: Tree generation time taken: 0 ms
containers.ts:172 Auto Height: Container Updates 
{updates: {…}}
containers.ts:187 Auto height: Container computations time taken: 1.0999999940395355 ms
layoutTree.ts:42 Auto Height: Tree generation time taken: 0 ms
widgets.ts:119 Auto Height: updates to process 
{updates: {…}}
widgets.ts:599 Auto height: Widgets to update: 
{widgetsToUpdate: {…}}
widgets.ts:666 Dynamic Height: Overall time taken:  0.9000000059604645 ms
```
</details>

---


### 2. Table Widget Creation
```log
EvaluationsSaga.ts:701 {action: {…}, triggeredLinting: true, triggeredEvaluation: true}
index.ts:33 SyntaxError: Unexpected token (1:0) (at acorn.mjs:3640:1)
```

<details>
<summary>Create table widget and focus on the table widget</summary>

```log
ReducerUtils.ts:47 The return value does not contain any draft, please use 'rawReturn()' to wrap the return value to improve performance.
EvaluationsSaga.ts:701 
{action: {…}, triggeredLinting: true, triggeredEvaluation: true}
EvaluationsSaga.ts:264 
{unevalTree: {…}, configTree: {…}}
layoutTree.ts:42 Auto Height: Tree generation time taken: 0.29999998211860657 ms
WidgetAdditionSagas.ts:436 add child computations took 10.599999994039536 ms
layoutTree.ts:42 Auto Height: Tree generation time taken: 0.09999999403953552 ms
containers.ts:172 Auto Height: Container Updates 
{updates: {…}}
containers.ts:187 Auto height: Container computations time taken: 0.7999999821186066 ms
WorkerUtil.ts:321 Main EVAL_TREE took 147ms
WorkerUtil.ts:327  Worker EVAL_TREE took 51ms
WorkerUtil.ts:328  Transfer EVAL_TREE took 96ms
EvaluationsSaga.ts:178 
{evalMetaUpdatesLength: 3}
EvaluationsSaga.ts:182 
{jsUpdates: {…}}
EvaluationsSaga.ts:183 
{dataTree: {…}}
EvaluationsSaga.ts:186 
{diffCalcDeps: '34.30', updateChangedDependencies: '1.60 ms'}
EvaluationsSaga.ts:186 
{sortedDependencies: Array(53), inverseDependencies: {…}, updatedDependencies: {…}, evaluationOrder: Array(63)}
EvaluationsSaga.ts:186 
{timeTakenForSetupUpdateTree: {…}}
EvaluationsSaga.ts:186 
{differences: Array(3), translatedDiffs: Array(3)}
EvaluationsSaga.ts:186 
{timeTakenForEvalAndValidateSubTree: {…}}
EvaluationsSaga.ts:186 
{log: 'replay updating', updateTime: '1.199999988079071 ms'}
PostEvaluationSagas.ts:256 Tern 
{updates: Array(3)}
PostEvaluationSagas.ts:257 Tern definitions updated took  1.00
WorkerUtil.ts:321 Main LINT_TREE took 355ms
WorkerUtil.ts:327  Worker LINT_TREE took 103ms
WorkerUtil.ts:328  Transfer LINT_TREE took 252ms
LintingSagas.ts:127 
{lintTime: '372.90 ms'}
layoutTree.ts:42 Auto Height: Tree generation time taken: 0.09999999403953552 ms
widgets.ts:119 Auto Height: updates to process 
{updates: {…}}
widgets.ts:599 Auto height: Widgets to update: 
{widgetsToUpdate: {…}}
widgets.ts:666 Dynamic Height: Overall time taken:  1.199999988079071 ms
13
Switch.tsx:22 If you do not provide children, you must specify an aria-label for accessibility
index.ts:33 SyntaxError: Unexpected token (1:0) (at acorn.mjs:3640:1)
    at PeekOverlayExpressionIdentifier.updateScript (index.ts:27:1)
    at new PeekOverlayExpressionIdentifier (index.ts:18:1)
    at new CodeEditor (index.tsx:325:1)
    at index.tsx:193:1
    at index.tsx:110:1
    at Array.forEach (<anonymous>)
    at LazyCodeEditorStateMachine._callee$ (index.tsx:110:1)
    at LazyCodeEditorStateMachine.handleStateChange (index.tsx:160:1)
    at LazyCodeEditorStateMachine.transition (index.tsx:105:1)
    at idleCallbackId.window.requestIdleCallback.timeout (index.tsx:142:1)

```
</details>

---

### 3. Data Source Selection
```log
react-dom.development.js:67 Warning: validateDOMNesting(...): <p> cannot appear as descendant of <p>
```

<details>
<summary>Press Connect data within table widget -> select datasource -> predefined Users or Movies</summary>

```log
If you do not provide children, you must specify an aria-label for accessibility
$d2c8e2b0480f3f34$export$cbe85ee05b554577 @ useToggle.ts:63
$b418ec0c85c52f27$export$d853f7095ae95f88 @ useSwitch.ts:42
Switch @ Switch.tsx:22
renderWithHooks @ react-dom.development.js:14985
updateFunctionComponent @ react-dom.development.js:17356
beginWork @ react-dom.development.js:19063
beginWork$1 @ react-dom.development.js:23940
performUnitOfWork @ react-dom.development.js:22776
workLoopSync @ react-dom.development.js:22707
renderRootSync @ react-dom.development.js:22670
performSyncWorkOnRoot @ react-dom.development.js:22293
(anonymous) @ react-dom.development.js:11327
unstable_runWithPriority @ scheduler.development.js:468
runWithPriority$1 @ react-dom.development.js:11276
flushSyncCallbackQueueImpl @ react-dom.development.js:11322
flushSyncCallbackQueue @ react-dom.development.js:11309
discreteUpdates$1 @ react-dom.development.js:22420
discreteUpdates @ react-dom.development.js:3756
dispatchDiscreteEvent @ react-dom.development.js:5889
invokeTask @ zone.js:400
runTask @ zone.js:159
invokeTask @ zone.js:483
invokeTask @ zone.js:1138
globalCallback @ zone.js:1169
globalZoneAwareCallback @ zone.js:1202
react-dom.development.js:67 Warning: validateDOMNesting(...): <p> cannot appear as a descendant of <p>.
    at p
    at O (https://dev.appsmith.com/static/js/bundle.js:532658:8)
    at p
    at O (https://dev.appsmith.com/static/js/bundle.js:532658:8)
    at Trigger (https://dev.appsmith.com/static/js/bundle.js:469231:92)
    at Tooltip (https://dev.appsmith.com/static/js/bundle.js:468348:32)
    at Tooltip (https://dev.appsmith.com/static/js/bundle.js:22110:24)
    at div
    at O (https://dev.appsmith.com/static/js/bundle.js:532658:8)
    at div
    at O (https://dev.appsmith.com/static/js/bundle.js:532658:8)
    at TableOrSpreadsheetDropdown (https://dev.appsmith.com/static/js/src_utils_editor_EditorUtils_ts-data_image_svg_xml_3Csvg_width_2748_27_height_2748_27_xmlns_2-f1a7a1.chunk.js:36260:108)
    at CommonControls
    at div
    at O (https://dev.appsmith.com/static/js/bundle.js:532658:8)
    at WidgetQueryGeneratorForm (https://dev.appsmith.com/static/js/src_utils_editor_EditorUtils_ts-data_image_svg_xml_3Csvg_width_2748_27_height_2748_27_xmlns_2-f1a7a1.chunk.js:39065:75)
    at OneClickBindingControl (https://dev.appsmith.com/static/js/src_utils_editor_EditorUtils_ts-data_image_svg_xml_3Csvg_width_2748_27_height_2748_27_xmlns_2-f1a7a1.chunk.js:47749:145)
    at div
    at AnalyticsHOC (https://dev.appsmith.com/static/js/src_utils_editor_EditorUtils_ts-data_image_svg_xml_3Csvg_width_2748_27_height_2748_27_xmlns_2-f1a7a1.chunk.js:127334:147)
    at div
    at O (https://dev.appsmith.com/static/js/bundle.js:532658:8)
    at https://dev.appsmith.com/static/js/src_utils_editor_EditorUtils_ts-data_image_svg_xml_3Csvg_width_2748_27_height_2748_27_xmlns_2-f1a7a1.chunk.js:123167:75
    at div
    at div
    at div
    at Collapse (https://dev.appsmith.com/static/js/bundle.js:314987:43)
    at div
    at O (https://dev.appsmith.com/static/js/bundle.js:532658:8)
    at https://dev.appsmith.com/static/js/src_utils_editor_EditorUtils_ts-data_image_svg_xml_3Csvg_width_2748_27_height_2748_27_xmlns_2-f1a7a1.chunk.js:125695:74
    at PropertyControlsGenerator (https://dev.appsmith.com/static/js/src_utils_editor_EditorUtils_ts-data_image_svg_xml_3Csvg_width_2748_27_height_2748_27_xmlns_2-f1a7a1.chunk.js:124069:77)
    at div
    at https://dev.appsmith.com/static/js/bundle.js:380261:25
    at $921a889cee6df7e8$export$99c2b779aa4e8b8b (https://dev.appsmith.com/static/js/bundle.js:380079:23)
    at https://dev.appsmith.com/static/js/bundle.js:380942:27
    at O (https://dev.appsmith.com/static/js/bundle.js:532658:8)
    at TabPanel (https://dev.appsmith.com/static/js/bundle.js:20335:25)
    at div
    at https://dev.appsmith.com/static/js/bundle.js:380261:25
    at Provider (https://dev.appsmith.com/static/js/bundle.js:376182:25)
    at https://dev.appsmith.com/static/js/bundle.js:380818:27
    at O (https://dev.appsmith.com/static/js/bundle.js:532658:8)
    at Tabs (https://dev.appsmith.com/static/js/bundle.js:20269:25)
    at O (https://dev.appsmith.com/static/js/bundle.js:532658:8)
    at PropertyPaneTab (https://dev.appsmith.com/static/js/src_utils_editor_EditorUtils_ts-data_image_svg_xml_3Csvg_width_2748_27_height_2748_27_xmlns_2-f1a7a1.chunk.js:124843:74)
    at div
    at div
    at PropertyPaneView (https://dev.appsmith.com/static/js/src_utils_editor_EditorUtils_ts-data_image_svg_xml_3Csvg_width_2748_27_height_2748_27_xmlns_2-f1a7a1.chunk.js:125280:74)
    at div
    at PanelView (https://dev.appsmith.com/static/js/bundle.js:321411:43)
    at Transition (https://dev.appsmith.com/static/js/bundle.js:330536:30)
    at CSSTransition (https://dev.appsmith.com/static/js/bundle.js:330011:35)
    at div
    at TransitionGroup (https://dev.appsmith.com/static/js/bundle.js:331033:30)
    at PanelStack (https://dev.appsmith.com/static/js/bundle.js:321257:43)
    at O (https://dev.appsmith.com/static/js/bundle.js:532658:8)
    at div
    at PropertyPane (https://dev.appsmith.com/static/js/src_utils_editor_EditorUtils_ts-data_image_svg_xml_3Csvg_width_2748_27_height_2748_27_xmlns_2-f1a7a1.chunk.js:125941:81)
    at div
    at div
    at div
    at https://dev.appsmith.com/static/js/src_utils_editor_EditorUtils_ts-data_image_svg_xml_3Csvg_width_2748_27_height_2748_27_xmlns_2-f1a7a1.chunk.js:33861:65
    at Profiler (https://dev.appsmith.com/static/js/bundle.js:396858:24)
    at profiler(PropertyPaneSidebar)
    at PropertyPaneWrapper
    at Route (https://dev.appsmith.com/static/js/bundle.js:509332:29)
    at sentryRoute(Route)
    at RightPane (https://dev.appsmith.com/static/js/editor.chunk.js:20899:83)
    at div
    at O (https://dev.appsmith.com/static/js/bundle.js:532658:8)
    at div
    at O (https://dev.appsmith.com/static/js/bundle.js:532658:8)
    at div
    at O (https://dev.appsmith.com/static/js/bundle.js:532658:8)
    at EditorWrapperContainer (https://dev.appsmith.com/static/js/editor.chunk.js:22844:23)
    at https://dev.appsmith.com/static/js/editor.chunk.js:19111:114
    at IDE (https://dev.appsmith.com/static/js/editor.chunk.js:21146:86)
    at div
    at HotkeysTargetClass (https://dev.appsmith.com/static/js/bundle.js:319138:45)
    at ConnectFunction (https://dev.appsmith.com/static/js/bundle.js:503551:68)
    at HotKeysHOC (https://dev.appsmith.com/static/js/editor.chunk.js:14404:93)
    at GitContextProvider (https://dev.appsmith.com/static/js/bundle.js:149640:28)
    at GitApplicationContextProvider (https://dev.appsmith.com/static/js/bundle.js:117360:23)
    at div
    at Fe (https://dev.appsmith.com/static/js/bundle.js:532578:60)
    at Editor (https://dev.appsmith.com/static/js/editor.chunk.js:27466:145)
    at Profiler (https://dev.appsmith.com/static/js/bundle.js:396858:24)
    at profiler(Editor)
    at ConnectFunction (https://dev.appsmith.com/static/js/bundle.js:503551:68)
    at C (https://dev.appsmith.com/static/js/bundle.js:509551:37)
    at EditorLoader (https://dev.appsmith.com/static/js/bundle.js:207867:145)
    at ConnectFunction (https://dev.appsmith.com/static/js/bundle.js:503551:68)
    at Route (https://dev.appsmith.com/static/js/bundle.js:509332:29)
    at sentryRoute(Route)
    at Switch (https://dev.appsmith.com/static/js/bundle.js:509503:29)
    at Routes (https://dev.appsmith.com/static/js/bundle.js:63103:71)
    at Walkthrough (https://dev.appsmith.com/static/js/bundle.js:111640:24)
    at Suspense
    at Router (https://dev.appsmith.com/static/js/bundle.js:509014:30)
    at AppRouter (https://dev.appsmith.com/static/js/bundle.js:63307:76)
    at AppErrorBoundary (https://dev.appsmith.com/static/js/bundle.js:45866:145)
    at Fe (https://dev.appsmith.com/static/js/bundle.js:532578:60)
    at ThemedApp (https://dev.appsmith.com/static/js/bundle.js:171076:145)
    at ConnectFunction (https://dev.appsmith.com/static/js/bundle.js:503551:68)
    at Provider (https://dev.appsmith.com/static/js/bundle.js:503295:20)
    at FaroErrorBoundary (https://dev.appsmith.com/static/js/bundle.js:344730:145)
    at App
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

