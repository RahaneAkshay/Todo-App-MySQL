import { Model,  DataTypes } from "sequelize";
import { db } from "../config/database.config";

interface TodoAttributes {
  id: number;
  title: string;
  completed: boolean;
  
}

export class Todo extends Model<TodoAttributes> {}

Todo.init({
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        allowNull:false,
        autoIncrement:true
    },

    title:{
        type:DataTypes.STRING,
        allowNull:false
    },
    completed:{
        type:DataTypes.BOOLEAN,
        defaultValue:false
    }
},{
      sequelize:db,
      tableName:'todos',
      timestamps:false
})