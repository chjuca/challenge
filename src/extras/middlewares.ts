import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken'; 
import { config } from '../config/settings';

export function validateToken(req: Request, res: Response, next: NextFunction) {
  const token = req.header('Authorization')?.split(' ')[1];

  if (!token) {
    return res.status(401).json({ msg: 'Acceso denegado. Token no proporcionado.' });
  }

  try {
    const decoded = jwt.verify(token, process.env.SECRET_KEY || config.SECRET_KEY );
    // @ts-ignore
    req.user = decoded;

    next();
  } catch (error) {
    res.status(401).json({ msg: 'Token no válido.' });
  }
};