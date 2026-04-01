import { Router } from 'express';
import { register } from '../controllers/book';

export const router = Router();

router.get('/user', register);
