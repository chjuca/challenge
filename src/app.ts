import express, { Router } from 'express';
import { json } from 'express';
// @ts-ignore
import morgan from 'morgan';
// @ts-ignore
import cors from 'cors';
import { taskRouter } from './routes/taks';
import { login } from './controllers/user.controller';
import { userRouter } from './routes/user';

export const app = express();

// Middelwares
app.use(cors())
app.use(morgan('dev'));
app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({limit: '50mb'}));  

app.use('/api/tasks', taskRouter)
app.use('/api/users', userRouter)
app.use('/api/login', login)