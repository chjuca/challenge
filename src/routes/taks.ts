import Router from 'express';
import { createTask, getAllTasks, getAllTasksByState, updateTaskState } from '../controllers/task.controller';

export const taskRouter = Router();

taskRouter.get('/', getAllTasks)
taskRouter.get('/state', getAllTasksByState)
taskRouter.post('/:user_id', createTask)
taskRouter.put('/:id', updateTaskState)
