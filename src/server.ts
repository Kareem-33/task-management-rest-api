import express from 'express';
import dotenv from 'dotenv';

import tasksRouter from './routes/task.routes';

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

app.use("/v1/tasks", tasksRouter)

app.listen(PORT, () => {
  console.log(`The server is running on port: ${PORT}`);
});