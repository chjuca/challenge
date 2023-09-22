import { Request, Response } from "express";
import jwt from 'jsonwebtoken';
import User, { UserInterface } from "../models/user";

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
  

export async function createUser(req: Request, res: Response) {
  const { email, password} = req.body

  const user: UserInterface = {email, password}

  try{
      const newUser = await createUserDB(user);
      return res.status(200).json({
              ok: true,
              data: newUser
          })
  } catch(e){
      console.log(e)
      return res.status(500).json({
          ok: false,
          data: []
      })
  }
}  


async function createUserDB(user: UserInterface): Promise<User>{
  const {email, password} = user
  const newUser = await User.create({
      email, 
      password
    });

  return newUser;
}
  
  