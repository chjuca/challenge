import { Sequelize } from 'sequelize';
import { config } from '../config/settings';

export const sequelize = new Sequelize(

  process.env.POSTGRES_DB || config.POSTGRES_DB,
  process.env.POSTGRES_USER || config.POSTGRES_USER,
  process.env.POSTGRES_PASS || config.POSTGRES_PASS,
  {
    host: process.env.POSTGRES_HOST || config.POSTGRES_HOST,
    dialect: "postgres",
    port: 5432,
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false // <<<<<<< YOU NEED THIS
      }
    },
  }
);
