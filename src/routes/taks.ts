import Router from 'express';
import { getAllTasks } from '../controllers/task.controller';

export const taskRouter = Router();

taskRouter.get('/', getAllTasks)
