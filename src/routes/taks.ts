import Router from 'express';
import { createTask, getAllTasks, getAllTasksByState, updateTaskState } from '../controllers/task.controller';
import { validateToken } from '../extras/middlewares';

export const taskRouter = Router();

taskRouter.get('/', validateToken, getAllTasks)
taskRouter.get('/state', validateToken, getAllTasksByState)
taskRouter.post('/:user_id', validateToken, createTask)
taskRouter.put('/:id', validateToken, updateTaskState)
