# Task Management REST API

A professional REST API built with Node.js, Express, TypeScript, MongoDB, and Mongoose for managing tasks.

This project was developed as a Backend API project using RESTful architecture principles.

---

# Features

* Create tasks
* Get all tasks
* Get task by ID
* Update tasks
* Delete tasks
* MongoDB database integration
* Environment variables using dotenv
* TypeScript support
* Request validation
* Error handling
* RESTful API structure

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
└── server.ts
```

---

# Installation

## Clone the repository

```bash
git clone https://github.com/your-username/full-stack-intern-project-2.git
```

## Navigate to the project folder

```bash
cd full-stack-intern-project-2
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

---

# Running the Project

## Development Mode

```bash
npm run dev
```

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

### Success Response

```json
{
  "success": true,
  "message": "Tasks fetched successfully",
  "data": []
}
```

---

## Get Task By ID

```http
GET /v1/tasks/:id
```

### Success Response

```json
{
  "success": true,
  "message": "Task fetched successfully",
  "data": {
    "_id": "task_id",
    "title": "Learn Express",
    "description": "Build REST API"
  }
}
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

### Success Response

```json
{
  "success": true,
  "message": "Task created successfully",
  "data": {}
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
  "title": "Updated Task Title"
}
```

---

## Delete Task

```http
DELETE /v1/tasks/:id
```

---

# Validation & Error Handling

The API includes:

* Required field validation
* MongoDB ObjectId validation
* Proper HTTP status codes
* Internal server error handling

### Status Codes

| Status Code | Description           |
| ----------- | --------------------- |
| 200         | Success               |
| 201         | Resource Created      |
| 400         | Bad Request           |
| 404         | Not Found             |
| 500         | Internal Server Error |

---

# Task Model

```ts
{
  title: string;
  description?: string;
}
```

Mongoose timestamps are enabled automatically.

---

# Scripts

## Start development server

```bash
npm run dev
```

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