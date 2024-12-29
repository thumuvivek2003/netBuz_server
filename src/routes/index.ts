import express from 'express';
import userRouter from './userRoutes';
import authMiddleware from '../middleware/authMiddleware';
const router = express.Router();
router.use('/users', userRouter);

export default router;
