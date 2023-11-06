"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getToDosController = void 0;
const toDoService_1 = require("../services/toDoService");
const getToDosController = (req, res) => {
    const toDos = (0, toDoService_1.getAllToDos)();
    res.status(200).json({ Message: "Success", Data: toDos });
};
exports.getToDosController = getToDosController;
