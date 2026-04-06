import { Router } from 'express';
import { mybook, register } from '../controllers/user';
import { login } from '../controllers/user';
import { logout } from '../controllers/user';
import { AuthMiddleware } from '../middleware';
export const router = Router();

router.post('/register', register);
router.post('/login', login);
router.post('/logout', logout);
router.get('/mybook', AuthMiddleware, mybook);
