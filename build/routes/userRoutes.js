"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const userController_1 = require("../controllers/userController");
const Router = require('express').Router;
const userRoutes = Router();
userRoutes.get('/', userController_1.getUsersController);
exports.default = userRoutes;
