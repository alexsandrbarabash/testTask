import { Sequelize, SequelizeOptions } from 'sequelize-typescript';
import dotenv from 'dotenv'

dotenv.config()

const options: SequelizeOptions = {
  host: process.env.DB_HOST,
  dialect: 'postgres',
  models: [__dirname + '/models']
};

export const sequelize = new Sequelize(
  process.env.DB_NAME!,
  process.env.DB_USER!,
  process.env.DB_PASS!,
  options
);
