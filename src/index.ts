import express, { Express, Request, Response } from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app: Express = express();

// Middleware
app.use(cors());
app.use(express.json()); // For parsing application/json

// Constants
const PORT: string | number = process.env.PORT || 5000;
const MONGO_URI: string = process.env.MONGO_URI || 'your_default_mongodb_uri';

// MongoDB connection
// mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() => console.log('MongoDB connected successfully'))
//   .catch(err => console.error('MongoDB connection error:', err));

// Routes
app.get('/', (req: Request, res: Response) => {
  res.send('Hello from Express and TypeScript!');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
