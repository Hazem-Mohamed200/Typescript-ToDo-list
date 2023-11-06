"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUsersController = void 0;
const userService_1 = require("../services/userService");
const getUsersController = (req, res) => {
    const users = (0, userService_1.getAllUsers)();
    res.status(200).json({ Message: "Success", Data: users });
};
exports.getUsersController = getUsersController;
