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

## 📂 Project Structure

/
├── frontend/         # Contains the React Frontend Application
│   ├── public/
│   ├── src/
│   └── README.md   # Frontend specific README
│
├── backend/         # Contains the Node.js/Express Backend API
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── seeds/
│   ├── lib/
│   └── README.md   # Backend specific README
│
├── .gitignore      # Specifies untracked files Git should ignore
├── package.json    # Root package for build/start scripts
└── README.md       # This file (Main project README)

---

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