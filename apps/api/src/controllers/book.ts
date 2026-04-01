import type { Request, Response } from 'express';
import { addUser } from '../services/user';

export const register = async (req: Request, res: Response) => {
  try {
    const { firstName, lastName, read, email } = req.body;
    await addUser(firstName, lastName, read, email);
    res.send();
  } catch (err) {
    res.send('a');
  }
};
