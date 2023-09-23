import { Sequelize } from 'sequelize';
import { config } from '../config/settings';


export const sequelize = new Sequelize(process.env.DATABASE_URL);
