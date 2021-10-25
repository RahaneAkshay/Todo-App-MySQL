import { Sequelize } from "sequelize";

export const db = new Sequelize(
  'tutorial',
  'root',
  'NEW_USER_PASSWORD',
  {
      dialect:'mysql',
      port:3001
  }
);
