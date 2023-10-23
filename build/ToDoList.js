import { printTask, sortTasks } from "./ToDo";
class ToDoList {
    constructor(toDos, title) {
        this.fixed = true;
        this.toDos = toDos;
        this.title = title;
        this.fixList();
    }
    fixList() {
        this.toDos.sort(sortTasks);
        for (let i = 0; i < this.toDos.length; i++) {
            this.toDos[i].id = i + 1;
        }
    }
    addTask(task) {
        this.fixed = false;
        this.toDos.push(task);
    }
    deleteTask(index) {
        this.toDos.splice(index - 1, 1);
    }
    completeTask(index) {
        this.fixed = false;
        this.toDos[index - 1].done = true;
    }
    printTasks() {
        if (!this.fixed)
            this.fixList();
        this.fixed = true;
        for (let i = 0; i < this.toDos.length; i++)
            printTask(this.toDos[i]);
        console.log();
        console.log();
    }
}
export { ToDoList };
