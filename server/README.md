# MERN LMS Server

This is the backend server for a Learning Management System (LMS) built using the MERN stack (MongoDB, Express.js, React, Node.js). It provides APIs for user authentication, course management for instructors, and course access for students.

## Features

- User authentication (register, login, check auth)
- Instructor functionalities: create and manage courses, upload media
- Student functionalities: view courses, purchase courses, track progress, manage orders
- Payment integration with PayPal
- File uploads with Cloudinary
- JWT-based authentication

## Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   cd server
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Create a `.env` file in the root directory with the following variables:
   ```
   PORT=5000
   MONGO_URI=<your-mongodb-atlas-connection-string>
   JWT_SECRET=<your-jwt-secret>
   CLIENT_URL=<your-client-url>
   CLOUDINARY_CLOUD_NAME=<your-cloudinary-cloud-name>
   CLOUDINARY_API_KEY=<your-cloudinary-api-key>
   CLOUDINARY_API_SECRET=<your-cloudinary-api-secret>
   PAYPAL_CLIENT_ID=<your-paypal-client-id>
   PAYPAL_CLIENT_SECRET=<your-paypal-client-secret>
   ```

4. Ensure MongoDB Atlas is set up and your IP is whitelisted.

## Running the Server

- Development mode:
  ```
  npm run dev
  ```

- Production mode:
  ```
  npm start
  ```

The server will run on `http://localhost:5000` by default.

## API Endpoints

### Authentication Routes
- `POST /auth/register` - Register a new user
- `POST /auth/login` - Login user
- `GET /auth/check-auth` - Check authentication status (requires auth)

### Instructor Routes
- `GET /instructor/course` - Get all courses by instructor
- `POST /instructor/course` - Create a new course
- `PUT /instructor/course/:id` - Update a course
- `DELETE /instructor/course/:id` - Delete a course
- `POST /media/upload` - Upload media files

### Student Routes
- `GET /student/course` - Get all courses
- `GET /student/course/:id` - Get course details
- `POST /student/order` - Create an order
- `GET /student/order` - Get user orders
- `GET /student/courses-bought` - Get purchased courses
- `GET /student/course-progress/:id` - Get course progress
- `POST /student/course-progress/mark-lecture-viewed` - Mark lecture as viewed

## Testing with Postman

1. Open Postman and create a new collection named "MERN LMS API".

2. **Register a user:**
   - Method: POST
   - URL: `http://localhost:5000/auth/register`
   - Body (raw JSON):
     ```json
     {
       "userName": "testuser",
       "userEmail": "test@example.com",
       "password": "password123",
       "role": "student"
     }
     ```

3. **Login:**
   - Method: POST
   - URL: `http://localhost:5000/auth/login`
   - Body (raw JSON):
     ```json
     {
       "userEmail": "test@example.com",
       "password": "password123"
     }
     ```
   - Save the `accessToken` from the response for authenticated requests.

4. **Check authentication:**
   - Method: GET
   - URL: `http://localhost:5000/auth/check-auth`
   - Headers:
     - Key: `Authorization`
     - Value: `Bearer <your_access_token>`

5. For other endpoints, use the appropriate HTTP method and URL from the API Endpoints section above. Add the `Authorization: Bearer <your_access_token>` header for protected routes.

Ensure the server is running (`npm run dev`) and MongoDB is connected before testing. Check console logs for any errors.
