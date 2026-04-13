import { Router } from 'express';
import { mybook, register } from '../../user/controllers/user';
import { login } from '../../user/controllers/user';
import { logout } from '../../user/controllers/user';
import { AuthMiddleware } from '../../middleware';
export const router = Router();

router.post('/register', register);
router.post('/login', login);
router.post('/logout', logout);
router.get('/mybook', AuthMiddleware, mybook);
