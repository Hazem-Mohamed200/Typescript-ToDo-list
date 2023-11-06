"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllUsers = void 0;
const User_1 = require("../types/User");
const getAllUsers = () => {
    (0, User_1.createrUser)(1, 21, 'Hazem', '07775000');
    return User_1.users;
};
exports.getAllUsers = getAllUsers;
