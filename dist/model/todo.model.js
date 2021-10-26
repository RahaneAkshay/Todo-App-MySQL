"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Todo = void 0;
const sequelize_1 = require("sequelize");
const database_config_1 = require("../config/database.config");
class Todo extends sequelize_1.Model {
}
exports.Todo = Todo;
Todo.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    title: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    completed: {
        type: sequelize_1.DataTypes.BOOLEAN,
        defaultValue: false
    }
}, {
    sequelize: database_config_1.db,
    tableName: 'todos',
    timestamps: false
});
