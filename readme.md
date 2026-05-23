# Full Stack Task Management API

A professional RESTful Task Management API built with Node.js, Express, TypeScript, MongoDB, and Mongoose as part of Full Stack Development Internship Projects 2 & 3.

---

# Features

* Create tasks
* Get all tasks
* Get task by ID
* Update tasks
* Delete tasks
* Filter tasks by completion status
* Sort tasks by creation date
* MongoDB database integration
* Environment variables using dotenv
* TypeScript support
* Request validation
* MongoDB ObjectId validation
* Error handling
* RESTful API architecture
* Modular project structure
* Mongoose schema validation
* Timestamps support

---

# Technologies Used

* Node.js
* Express.js
* TypeScript
* MongoDB
* Mongoose
* Dotenv

---

# Project Structure

```bash
src/
│
├── controllers/
│   └── task.controller.ts
│
├── models/
│   └── task.model.ts
│
├── routes/
│   └── task.routes.ts
│
├── utils/
│   └── db.ts
│
└── server.ts
```

---

# Installation

## Clone the repository

```bash
git clone https://github.com/your-username/full-stack-task-management-api.git
```

## Navigate into the project

```bash
cd full-stack-task-management-api
```

## Install dependencies

```bash
npm install
```

---

# Environment Variables

Create a `.env` file in the root directory:

```env
PORT=3535

MONGO_URI=your_mongodb_connection_string
```

Replace `your_mongodb_connection_string` with your MongoDB Atlas connection URI.

---

# Scripts

## Run development server

```bash
npm run dev
```

Runs the project in development mode using tsx.

---

## Build project

```bash
npm run build
```

Compiles TypeScript files into JavaScript.

---

## Start production server

```bash
npm start
```

Runs the compiled JavaScript files from the `dist` folder.

---

# Running the Project

The server will run on:

```bash
http://localhost:3535
```

---

# API Base URL

```bash
/v1/tasks
```

---

# API Endpoints

## Get All Tasks

```http
GET /v1/tasks
```

### Query Parameters

| Parameter       | Description          |
| --------------- | -------------------- |
| completed=true  | Get completed tasks  |
| completed=false | Get incomplete tasks |
| sort=newest     | Sort by newest first |
| sort=oldest     | Sort by oldest first |

### Example

```http
GET /v1/tasks?completed=true&sort=newest
```

---

## Get Task By ID

```http
GET /v1/tasks/:id
```

---

## Create Task

```http
POST /v1/tasks
```

### Request Body

```json
{
  "title": "Learn MongoDB",
  "description": "Practice CRUD operations"
}
```

---

## Update Task

```http
PUT /v1/tasks/:id
```

### Request Body

```json
{
  "title": "Updated Task Title",
  "completed": true
}
```

---

## Delete Task

```http
DELETE /v1/tasks/:id
```

---

# Task Schema

```ts
{
  title: String,
  description: String,
  completed: Boolean,
  createdAt: Date,
  updatedAt: Date
}
```

---

# Validation & Error Handling

The API includes:

* Required field validation
* Mongoose schema validation
* MongoDB ObjectId validation
* Proper HTTP status codes
* Internal server error handling

### Status Codes Used

| Status Code | Description           |
| ----------- | --------------------- |
| 200         | Success               |
| 201         | Resource Created      |
| 400         | Bad Request           |
| 404         | Not Found             |
| 500         | Internal Server Error |

---

# Database Connection

MongoDB connection is handled separately inside:

```bash
src/utils/db.ts
```

using Mongoose and environment variables.

---

# Dependencies

Main packages used in this project:

* express
* mongoose
* dotenv
* tsx
* typescript

---

# Author

Kareem Refaat

---

# License

This project is licensed under the ISC License.
