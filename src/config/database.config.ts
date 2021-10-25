import { Sequelize } from "sequelize";

export const sequelize = new Sequelize("mysql://root:NEW_USER_PASSWORD@localhost:3301/tutorial");
