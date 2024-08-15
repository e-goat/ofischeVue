import mysql from 'mysql2/promise';
import "dotenv/config"
import { Sequelize } from '@sequelize/core';
import { MySqlDialect } from '@sequelize/mysql';

export const sequelize = new Sequelize({
  dialect: MySqlDialect,
  database: process.env.DB_NAME,
  user: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  host: process.env.DB_HOST,
  port: 3306,
});

export async function establishDatabaseConnection() {
    try {
      await sequelize.authenticate();
      console.log('Connection has been established successfully.');
    } catch (error) {
      console.error('Unable to connect to the database:', error);
    }
}