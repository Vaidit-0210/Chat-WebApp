# ChatWebApp - MERN Stack

> A full-stack, real-time chat application built with the MERN stack (MongoDB, Express, React, Node.js) and Socket.io for instant messaging capabilities.

---

## ✨ Features

-   **User Authentication:** Secure sign-up and login with JWT (JSON Web Tokens).
-   **Real-time Messaging:** Send and receive text messages and images instantly using Socket.io.
-   **User Presence:** See which users are currently online.
-   **Profile Management:** Users can update their profile pictures.
-   **Theme Customization:** Multiple themes available for the user interface.
-   **Responsive UI:** Optimized for both desktop and mobile devices.

---

## 🛠️ Technology Stack

-   **Frontend:** `React.js`, `Vite`, `Tailwind CSS`, `Daisy UI`, `React Router DOM`, `Axios`, `Zustand`, `Socket.io-client`
-   **Backend:** `Node.js`, `Express.js`, `MongoDB` (via `Mongoose`), `Socket.io`, `bcryptjs`, `jsonwebtoken`, `dotenv`, `cookie-parser`, `cloudinary`, `nodemon`
-   **Database:** `MongoDB Atlas`

---

## 🚀 Getting Started

This project is structured as a monorepo with distinct `frontend` and `backend` directories.

### Prerequisites

Ensure you have the following installed on your machine:

-   **Node.js (v18.x or later):** [https://nodejs.org/](https://nodejs.org/)
-   **npm:** Comes with Node.js
-   **Git:** [https://git-scm.com/](https://git-scm.com/)

### Quick Start

1.  **Clone the repository:**
    ```bash
    git clone [your-repository-url]
    cd [project-name]
    ```

2.  **Install Root Dependencies:**
    This command will install common dependencies (if any) and prepares for nested installs.
    ```bash
    npm install
    ```

3.  **Setup the Backend:**
    Navigate to the `backend` directory and follow the instructions in its `README.md` file.
    ```bash
    cd backend
    ```
    *(See `backend/README.md` for detailed steps)*

4.  **Setup the Frontend:**
    Navigate to the `frontend` directory and follow the instructions in its `README.md` file.
    ```bash
    cd frontend
    ```
    *(See `frontend/README.md` for detailed steps)*

---

# 🏛️ Project Architecture

This document provides a detailed overview of the project structure and the purpose of each directory.

---

## ## Root Directory

The root directory contains the two main parts of the application: the `frontend` and the `backend`. It also holds configuration files that are essential for the entire project.

/
├── frontend/         # React Frontend Application
├── backend/          # Node.js/Express Backend API
├── .gitignore        # Files and folders to be ignored by Git
├── package.json      # Root scripts for building and starting the project
└── README.md         # Main project overview

---

## ## Frontend (`/frontend`)

The frontend is a modern React application built with Vite. It's responsible for all user interface elements and client-side logic.

frontend/
├── public/           # Static assets (icons, images)
├── src/              # Main source code
│   ├── components/   # Reusable React components (e.g., Sidebar, MessageInput)
│   ├── lib/          # Helper libraries (e.g., configured Axios instance)
│   ├── pages/        # Page components (e.g., HomePage, LoginPage)
│   └── store/        # Zustand state management stores (e.g., authStore, chatStore)
├── .env              # Environment variables (e.g., VITE_BASE_URL)
└── README.md         # Instructions specific to the frontend

---

## ## Backend (`/backend`)

The backend is a Node.js server using the Express framework. It handles the REST API, manages the database connection, and powers real-time communication with Socket.io.

backend/
├── controllers/      # Business logic for routes
├── middleware/       # Express middleware (e.g., authentication check)
├── models/           # Mongoose schemas for the database
├── routes/           # API route definitions
├── lib/              # Socket.io configuration and helper functions
├── seeds/            # Scripts to populate the database with initial data
├── .env              # Server-side environment variables and secrets
└── README.md         # Instructions specific to the backend

## 🤝 Contributing

Contributions are welcome! If you have suggestions for improving the project, please fork the repo and create a pull request, or open an issue with the "enhancement" tag.

1.  Fork the Project
2.  Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3.  Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4.  Push to the Branch (`git push origin feature/AmazingFeature`)
5.  Open a Pull Request

---

## 📄 License

This project is licensed under the MIT License. See the `LICENSE` file for details 