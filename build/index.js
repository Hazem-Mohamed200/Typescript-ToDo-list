"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ToDoList_1 = require("./ToDoList");
const task1 = { 'title': 'TASK A', 'description': 'This is task A', 'deadline': '2023/10/20', 'done': false };
const task2 = { 'title': 'TASK B', 'description': 'This is task B', 'deadline': '2023/05/16', 'done': false };
const task3 = { 'title': 'TASK C', 'description': 'This is task C', 'deadline': '2023/10/20', 'done': false };
const task4 = { 'title': 'TASK D', 'description': 'This is task D', 'deadline': '2024/12/31', 'done': false };
const task5 = { 'title': 'TASK E', 'description': 'This is task E', 'deadline': '2023/01/01', 'done': false };
const tasks = [task1, task2, task3, task4, task5];
const toDoList = new ToDoList_1.ToDoList(tasks, 'ToDoList A');
toDoList.printTasks();
toDoList.completeTask(4);
toDoList.printTasks();
toDoList.deleteTask(5);
toDoList.printTasks();
const newTask = { 'title': 'TASK F', 'description': 'This is the new task', 'deadline': '0001/01/01', 'done': false };
toDoList.addTask(newTask);
toDoList.printTasks();
