# Chat WebApp - Frontend (Client)

This directory contains the source code for the frontend-side application, built with **React.js** and **Vite**. It interacts with the backend API to provide a real-time chat experience.

---

## ▶️ Getting Started

Follow these instructions to get a copy of the frontend running on your local machine for development and testing purposes.

### Prerequisites

-   **Node.js (v18.x or later):** [https://nodejs.org/](https://nodejs.org/)
-   **npm:** Comes with Node.js

### Installation & Setup

1.  **Navigate to the frontend directory:**
    ```bash
    cd frontend
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Set up environment variables:**
    Create a `.env` file in this directory.
    This project uses `Vite` for the frontend, so environment variables should be prefixed with `VITE_`.

    ```env
    # The URL of your backend API server (for development)
    # In production, this will be dynamically determined.
    VITE_BASE_URL=http://localhost:5001
    ```
    *Note: The tutorial uses `REACT_APP_API_URL` but for a Vite project, it should be `VITE_BASE_URL`.*

4.  **Run the development server:**
    ```bash
    npm run dev
    ```
    The application should now be running on `http://localhost:5173`.

---

## ⚙️ Key Frontend Technologies

-   **React.js:** For building the user interface.
-   **Vite:** A fast build tool that significantly improves the frontend development experience.
-   **Tailwind CSS & Daisy UI:** For rapid and customizable styling.
-   **React Router DOM:** For client-side routing.
-   **Axios:** For making HTTP requests to the backend API.
-   **Zustand:** A lightweight state management solution.
-   **Socket.io-client:** For establishing and managing real-time WebSocket connections with the server.

---

## 📜 Available Scripts

In this directory, you can run:

-   `npm run dev`: Runs the app in development mode.
-   `npm run build`: Builds the app for production to the `dist` folder.
-   `npm run lint`: Lints the project files.
-   `npm run preview`: Serves the `dist` folder locally for production preview.