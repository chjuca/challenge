import { Sequelize } from 'sequelize';

export const sequelize = new Sequelize(

  process.env.POSTGRES_DB || "challenge-back",
  process.env.POSTGRES_USER || "postgres",
  process.env.POSTGRES_PASS || "postgres",
  {
    host: process.env.POSTGRES_HOST || "localhost",
    dialect: "postgres",
    port: 5432
  }
);
