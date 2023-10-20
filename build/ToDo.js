"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sortTasks = exports.printTask = void 0;
const sortTasks = (task1, task2) => {
    // Sorts the tasks by completion first, if there is a tie sorts the tasks by deadline
    const task1Status = task1.done;
    const task2Status = task2.done;
    const task1Deadline = task1.deadline;
    const task2Deadline = task2.deadline;
    if (task1Status == task2Status) {
        if (task1Deadline < task2Deadline)
            return -1;
        else if (task1Deadline > task2Deadline)
            return 1;
        else
            return 0;
    }
    else if (task1Status == true)
        return 1;
    else
        return -1;
};
exports.sortTasks = sortTasks;
function printTask(task) {
    console.log(`ID: ${task.id}`);
    console.log(task.title);
    console.log(task.description);
    let status = (task.done ? 'Completed' : 'Not Completed');
    console.log(`Status: ${status}`);
    console.log(`Deadline: ${task.deadline}`);
    console.log('--------------------------------------------');
}
exports.printTask = printTask;
