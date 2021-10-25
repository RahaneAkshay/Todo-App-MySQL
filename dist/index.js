"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var database_config_1 = require("./config/database.config");
var PORT = process.env.PORT || 3000;
var app = express_1.default();
app.use(express_1.default.json());
database_config_1.db.sync()
    .then(function () {
    console.log("connect to database");
})
    .catch(function (err) {
    console.log(err);
});
app.listen(PORT, function () {
    console.log("Server started at port " + PORT);
});
