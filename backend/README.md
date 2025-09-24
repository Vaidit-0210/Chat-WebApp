# Chat WebApp - Backend (API)

This directory contains the source code for the backend server, built with **Node.js** and **Express.js**. It provides the REST API endpoints and handles real-time communication using **Socket.io**.

---

## ▶️ Getting Started

Follow these instructions to get the backend server running locally.

### Prerequisites

-   **Node.js (v18.x or later):** [https://nodejs.org/](https://nodejs.org/)
-   **npm:** Comes with Node.js
-   **MongoDB:** A running instance of MongoDB (preferably MongoDB Atlas for cloud hosting).

### Installation & Setup

1.  **Navigate to the backend directory:**
    ```bash
    cd backend
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Set up environment variables:**
    Create a `.env` file in this directory.
    ```env
    # MongoDB Connection String (e.g., from MongoDB Atlas)
    MONGO_URI=your_mongodb_connection_string_here

    # Port for the server to run on
    PORT=5001

    # JSON Web Token Secret Key (use a strong, random string)
    JWT_SECRET=your_super_secret_jwt_key_here

    # Cloudinary API Configuration for image uploads
    CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
    CLOUDINARY_API_KEY=your_cloudinary_api_key
    CLOUDINARY_API_SECRET=your_cloudinary_api_secret

    # Node Environment (e.g., development, production)
    NODE_ENV=development
    ```
    *Replace placeholder values with your actual credentials.*

4.  **Seed the Database (Optional but Recommended):**
    The project includes a script to populate your database with sample users.
    ```bash
    node src/seeds/user.seed.js
    ```
    *This will add ~15 users to your MongoDB instance.*

5.  **Run the development server:**
    ```bash
    npm run dev
    ```
    The API server should now be running on `http://localhost:5001`.

---

## ⚙️ Key Backend Technologies

-   **Node.js & Express.js:** The core framework for building the API.
-   **MongoDB & Mongoose:** Database and ODM (Object Data Modeling) for interacting with MongoDB.
-   **Socket.io:** Enables real-time, bidirectional communication between web clients and the server for chat functionality and online presence.
-   **bcryptjs:** For hashing and comparing passwords securely.
-   **jsonwebtoken (JWT):** For user authentication and authorization.
-   **dotenv:** For loading environment variables from a `.env` file.
-   **cookie-parser:** Middleware to parse incoming cookie headers.
-   **cloudinary:** A cloud-based image and video management service used for storing user profile pictures and message images.
-   **nodemon:** A utility that monitors for any changes in your source and automatically restarts your server (for development).

---

## 📋 API Endpoints

The API is structured around user authentication and real-time messaging. All endpoints are prefixed with `/api`.

### Authentication Endpoints (`/api/auth`)

-   `POST /api/auth/signup`: Register a new user.
-   `POST /api/auth/login`: Authenticate a user and receive a JWT cookie.
-   `POST /api/auth/logout`: Clear the user's session by removing the JWT cookie.
-   `PUT /api/auth/update-profile`: Update a user's profile information (e.g., profile picture). **(Protected Route)**
-   `GET /api/auth/check`: Check if the user is authenticated and return user details. **(Protected Route)**

### Message Endpoints (`/api/messages`)

-   `GET /api/messages/users`: Retrieve a list of all users available for chat (excluding the authenticated user). **(Protected Route)**
-   `GET /api/messages/:id`: Get the message history between the authenticated user and a specific user (`:id`). **(Protected Route)**
-   `POST /api/messages/send/:id`: Send a new message (text or image) to a specific user (`:id`). **(Protected Route)**

---
