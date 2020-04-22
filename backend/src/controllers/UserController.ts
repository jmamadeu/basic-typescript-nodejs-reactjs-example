import { Request, Response } from 'express';
import EmailService from '../services/EmailService';

const users = [
  { name: 'João Amadeu', email: 'j.amadeu@gmail.com' },
  { name: 'Mateus Aalexandre', email: 'mateus@gmail.com' },
];

export default {
  async index(req: Request, res: Response) {
    return res.json(users);
  },

  async store(req: Request, res: Response) {
    EmailService.sendMail({
      to: { email: 'jmamadeu@gmail.com', name: 'Mateus Aalexandre' },
      message: { body: 'Esse é o código', subject: 'Bem vindo ao sistema' },
    });

    return res.json({ message: 'User created' });
  },
};
