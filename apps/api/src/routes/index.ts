import { Router } from 'express';
import { router as bookRouter } from './books';
import { router as userRouter } from './user';
import { AuthMiddleware } from '../middleware';

export const router = Router();

router.use('/user', userRouter);
router.use('/books', bookRouter);
