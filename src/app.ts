import express, { Router } from 'express';
import { json } from 'express';
// @ts-ignore
import morgan from 'morgan';
// @ts-ignore
import cors from 'cors';

export const app = express();

// Middelwares
app.use(cors())
app.use(morgan('dev'));
