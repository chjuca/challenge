import Router from 'express';
import { createUser } from '../controllers/user.controller';

export const taskRouter = Router();

taskRouter.post('/', createUser)
