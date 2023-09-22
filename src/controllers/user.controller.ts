import { Request, Response } from "express";
import jwt from 'jsonwebtoken';
import User from "../models/user";

const secretKey = 'challenge';

export async function login(req: Request, res: Response) {
    const { email, password } = req.body;
  
    try {
      const user = await User.findOne({ where: { email } });
  
      if (!user || user.password !== password) {
        return res.status(401).json({ msg: 'Credenciales inválidas. Por favor, verifica tu correo y contraseña.' });
      }
  
      const token = jwt.sign({ id: user.id, email: user.email }, secretKey, { expiresIn: '1h' });
  
      res.json({ token });
    } catch (error) {
      console.error(error);
      res.status(500).json({ msg: 'Error interno del servidor.' });
    }
}
  
  
  