"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const database_config_1 = require("./config/database.config");
const todo_routes_1 = require("./routes/todo.routes");
const PORT = process.env.PORT || 3000;
const app = express_1.default();
app.use(express_1.default.json());
app.use('/todos', todo_routes_1.router);
database_config_1.db.sync()
    .then(() => {
    console.log(`connection sucessfull!!!`);
})
    .catch((err) => {
    console.log(err);
});
app.listen(PORT, async () => {
    console.log(`Server started at port ${PORT}`);
});
