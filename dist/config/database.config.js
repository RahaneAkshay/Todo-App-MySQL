"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.db = void 0;
const sequelize_1 = require("sequelize");
exports.db = new sequelize_1.Sequelize('tutorial', 'root', 'NEW_USER_PASSWORD', {
    dialect: 'mysql',
    port: 3001
});
