"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const todo_model_1 = require("../model/todo.model");
exports.router = express_1.Router();
exports.router.post("/create", async (req, res) => {
    try {
        console.log(req.body);
        const result = await todo_model_1.Todo.create(req.body);
        res.status(200).send(result);
    }
    catch (err) {
        res.status(400).send(err);
    }
});
exports.router.get("/fetch", async (req, res) => {
    try {
        const result = await todo_model_1.Todo.findAll();
        console.log(result);
        res.status(200).send(result);
    }
    catch (err) {
        console.log(err);
        res.status(400).send(err);
    }
});
exports.router.patch("/update/:id", async (req, res) => {
    try {
        const id = Number(req.params.id);
        const result = await todo_model_1.Todo.update(req.body, { where: { id } });
        res.status(200).send(result);
    }
    catch (err) {
        console.log(err);
        res.status(400).send(err);
    }
});
exports.router.delete("/delete/:id", async (req, res) => {
    try {
        const id = Number(req.params.id);
        const result = await todo_model_1.Todo.destroy({ where: { id } });
        console.log(result);
        res.sendStatus(200).send(result);
    }
    catch (err) {
        console.log(err);
        res.status(400).send(err);
    }
});
