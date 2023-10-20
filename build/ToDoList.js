"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ToDoList = void 0;
const ToDo_1 = require("./ToDo");
class ToDoList {
    constructor(toDos, title) {
        this.currentlySorted = true;
        this.toDos = toDos;
        this.title = title;
    }
    addTask(title, description, deadline) {
        this.currentlySorted = false;
        const newTask = { 'title': title, 'description': description, 'deadline': deadline, done: false };
        this.toDos.push(newTask);
    }
    deleteTask(index) {
        this.toDos.splice(index - 1, 1);
    }
    completeTask(index) {
        this.toDos[index - 1].done = true;
    }
    printTasks() {
        if (!this.currentlySorted)
            this.toDos.sort(ToDo_1.sortTasks);
        this.currentlySorted = true;
        for (let i = 0; i < this.toDos.length; i++)
            (0, ToDo_1.printTask)(this.toDos[i]);
    }
}
exports.ToDoList = ToDoList;
