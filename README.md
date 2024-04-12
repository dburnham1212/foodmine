## Lessons
1. Introduction to the course
2. Install development tools
3. Create Angular App
  1. Create projects folder
  2. Insall @angular/cli
  3. Create App as frontend
4. Add Header
  1. Generate component
  2. Add Html
  3. Add CSS
5. List Foods
  1. Create Foot model
  2. Create data.ts
    1. Add sample foods
  3. Add image assets
  4. Create Food service
  5. Create Home component
    1. Add ts
    2. Add html
    3. Add css
6. Search
  1. Add method to Food service
  2. Add search route
  3. Show search result in Home component
  4. Generate search component
    1. Add to home component
    2. Add ts
    3. Add html
    4. Add css
7. Tags Bar
  1. Create Tag model
  2. Add sample tags to data.ts
  3. Foor service
    1. Add get all tags method
    2. Add get all foods by tag method
  4. Add tags route
  5. Show tag result in Home component
  6. Generate Tags component
    1. Add to home component
    2. Add ts
    3. Add html
    4. Add css
8. Food Page
  1. Add method to food service
  2. Generate Food Page content
    1. Add Route
    2. Add ts
    3. Add html
    4. Add css
9. Cart page
  1. Create CartItem Model
  2. Create Cart Model
  3. Generate Cart service
  4. Add to Cart Button in Food Page
  5. Generate Cart Page component
    1. Add Route
    2. Add ts
    3. Add html
    4. Add css
10. Not Found!
  1. Generate Component
    1. Add ts
    2. Add html
    3. Add css
  2. Add to pages
    1. Home Page
    2. Food Page
    3. Cart Page
11. Connect To Backend
  1. Create backend folder
  2. npm init
  3. npm install typescript
  4. Create tsconfig.json
  5. Create .gitignore
  6. Copy data.ts to backend/src
  8. Create server.ts
    1. install @types
    2. Add Apis
  9. npm install nodemon ts-node --save-dev
  10. Add urs.ts to frontend
  11. Add HttpClient modul
  12. Update food service
12. Login Page
  1. Generate Component
    1. Add to routes
    2. Add ts
    3. Add html
      1. Import Reactive Forms Module
    4. Add css
  2. Add Login Api
    1. Use json
    2. Add jsonwebtoken
    3. Test Using Postman
  3. Generate User Service
    1. Generate user model
    2. Add user subject
    3. Add login method
      1. Add user urls
      2. Generate user login interface
      3. Add ngx-toastr
        1. Import Module
        2. Import BrowserAnimationsModule
        3. Add styles to angular.json
      4. Add to header
    1. Add local storage methods
    2. Add logout method
      1. Add to header 
13. Make Components for login page
  1. Input Container
  2. Input Validation
  3. Text Input
  4. Default Button
14. Connect Login API To MongoDB Atlas
  1. Moving apis to routers
  2. Create MongoDB Atlas
  3. Create .env file
  4. Install
    1. mongoose
    2. dotenv
    3. bcryptjs
    4. jsonwebtoken
    5. express-async-handler
  5. Connect to MongoDB Atlas
  6. Use MongoDB instead of data.ts in apis
15. Register User
  1. Add Register api
  2. Add Register service method
  3. Add Register Link
  4. Add Register Component
16. Loading!
  1. Add Image
  2. Add Component
  3. Add Service
  4. Add Interceptor
17. Checkout Page
  1. Create Order Model
  2. Create Checkout Page Component
    1. Add to router
  3. Add user to user service
  4. Add cart to cart service
  5. Create order items list component
  6. Adding map to checkout page
    1. Add Leaflet npm package
        1. Add @type/leaflet
        2. Add Css to angular.json
      2. Add AddresLatLng to Order Model
      3. Create Map Component
        1. Add to checkout page
        2. Add ts
          1. Change app-map selector to map
        3. Add html
        4. Add css
      4. Add Auth Guard
  7. Save Order
    1. Add Order Model
    2. Add Order Status Enum
    3. Add Auth Middleware
    4. Add Order Router
      1. Add create API
    5. Add Order Urls to urls.ts
    6. Add Order Service
      1. Add create method
    8. Add Auth Interceptor