import express, { Express, Request, Response } from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import { connectDB } from './config/dbConfig';
import router from './routes';
dotenv.config();

const app: Express = express();

// Middleware
app.use(cors());
app.use(express.json());

// Constants
const PORT: string | number = process.env.PORT || 5000;

// MongoDB connection
connectDB();

// Routes
app.use((err: any, req: Request, res: Response, next: Function) => {
  res.status(err.status || 500).send({
      message: err.message || 'Internal Server Error',
  });
});


// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
