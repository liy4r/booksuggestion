import type { Request, Response } from 'express';
import { loginService, registerService } from '../services/user';

export const register = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  if (!email || !password) {
    res.status(400).json({ message: 'Email and password required!!' });
  }
  try {
    await registerService(email, password);
    res.send('Success');
  } catch (err) {
    res.send('error');
  }
};

export const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  if (!email || !password) {
    res.status(400).json({ message: 'Email and password required!!' });
  }
  try {
    const authToken = await loginService(email, password);
    res.json({ message: 'Success', data: { authToken } });
  } catch (e: any) {
    res.status(400).send({ message: e.message });
  }
};
