# Task Manager Application

A modern and efficient task management application combining a **React** frontend with a **Node.js** and **Express** backend. Manage your tasks seamlessly with features like creation, editing, deletion, filtering, pagination, and status tracking.

---

## Table of Contents

- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Running the Application](#running-the-application)
- [Folder Structure](#folder-structure)
- [Screenshots](#screenshots)
- [Contributing](#contributing)
- [License](#license)

---

## Features

- **Task Management:** Create, edit, and delete tasks effortlessly.
- **Status Tracking:** Mark tasks as completed or pending.
- **Filtering Options:** View tasks by status (completed, pending, or all).
- **Pagination:** Efficiently navigate through large task lists.
- **User Feedback:** Real-time success and error messages.

---

## Prerequisites

Before setting up the project, ensure your system meets the following requirements:

- [Node.js](https://nodejs.org/) (v14 or higher)
- [MongoDB](https://www.mongodb.com/) (Local or remote instance)
- [Git](https://git-scm.com/) (Version control tool)

---

## Installation

### Step 1: Clone the Repository

```bash
git clone https://github.com/deepanshu-agg/task-manager.git
cd task-manager
```

### Step 2: Install Dependencies

Install all necessary dependencies for both the backend and frontend:

```bash
npm install
```

### Step 3: Configure Environment Variables

Create a `.env` file inside the `backend` directory and define the following variables:

```env
PORT=5000
MONGO_URI=mongodb://localhost:27017/taskmanager
```

> Replace `MONGO_URI` with your remote MongoDB connection string if applicable.

---

## Running the Application

### Start the Application

Launch both the frontend and backend with a single command using `concurrently`:

```bash
npm start
```

- Backend: [http://localhost:5000](http://localhost:5000)
- Frontend: [http://localhost:3000](http://localhost:3000)

---

## Folder Structure

```plaintext
task-manager/
├── backend/              # Node.js backend
│   ├── models/           # Task schema definitions
│   ├── routes/           # API endpoints
│   ├── controllers/      # Request handling logic
│   ├── app.js            # App setup and middleware
│   └── server.js         # Server entry point
├── frontend/             # React frontend
│   ├── src/
│   │   ├── components/   # Reusable components (TaskForm, TaskList, etc.)
│   │   ├── App.js        # Main application file
│   │   ├── api.js        # API service for HTTP requests
│   │   └── index.js      # React entry point
├── package.json          # Root package.json with combined scripts
├── README.md             # Documentation
```

---

## Screenshots

### Task Management Dashboard

<div align="center">
  <img src="https://github.com/user-attachments/assets/dffc8b37-f4a7-4792-9b17-10831114c773" alt="Task List" width="400">
  <img src="https://github.com/user-attachments/assets/3f80ca02-934d-4813-9cfe-eea4216eff1a" alt="Task Creation" width="400">
</div>
<div align="center">
  <img src="https://github.com/user-attachments/assets/536ec754-4ec9-4af6-884c-4f53479e84d2" alt="Pagination" width="400">
  <img src="https://github.com/user-attachments/assets/d9898e4d-3b82-4510-9c28-a04136dd6d8f" alt="Filter Tasks" width="400">
</div>

---

## Contributing

We welcome contributions from the community! Here’s how you can contribute:

1. **Fork the repository**
2. **Create a new branch** for your feature or fix:

   ```bash
   git checkout -b feature/your-feature-name
   ```

3. **Commit your changes** with a meaningful message:

   ```bash
   git commit -m "Add detailed description of your change"
   ```

4. **Push to your branch**:

   ```bash
   git push origin feature/your-feature-name
   ```

5. **Open a pull request** and describe your changes.

---

## License

This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for details.

---

