import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

const secretKey = 'challenge'; 

export function validateToken(req: Request, res: Response, next: NextFunction) {
  const token = req.header('Authorization')?.split(' ')[1];

  if (!token) {
    return res.status(401).json({ msg: 'Acceso denegado. Token no proporcionado.' });
  }

  try {
    const decoded = jwt.verify(token, secretKey);
    // @ts-ignore
    req.user = decoded;

    next();
  } catch (error) {
    res.status(401).json({ msg: 'Token no válido.' });
  }
};