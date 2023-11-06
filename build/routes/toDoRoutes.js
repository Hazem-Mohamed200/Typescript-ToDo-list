"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const toDoController_1 = require("../controllers/toDoController");
const Router = require('express').Router;
const toDoRoutes = Router();
toDoRoutes.get('/', toDoController_1.getToDosController);
exports.default = toDoRoutes;
