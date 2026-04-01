import { Router } from 'express';
import { router as bookRouter } from './books';
import { router as userRouter } from './user';

export const router = Router();

router.use('/books', bookRouter);
router.use('/adduser', userRouter);
