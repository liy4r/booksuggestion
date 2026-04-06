import type { Request, Response } from 'express';
import { registerService } from '../services/user';

export const register = async (req: Request, res: Response) => {
  try {
    const { firstName, lastName, read, email } = req.body;
    await registerService(firstName, lastName, read, email);
    res.send('a');
  } catch (err) {
    res.send('error');
  }
};
