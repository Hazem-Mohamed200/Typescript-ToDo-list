"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createrUser = exports.users = void 0;
let users = [];
exports.users = users;
const createrUser = (id, age, name, phoneNo) => {
    const newUser = {
        id: id,
        age: age,
        name: name,
        phoneNo: phoneNo
    };
    users.push(newUser);
};
exports.createrUser = createrUser;
