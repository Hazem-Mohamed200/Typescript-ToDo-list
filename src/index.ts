export {}
import { exit } from "process";
import { ToDo } from "./ToDo";
import { ToDoList } from "./ToDoList";
import * as readline from  'readline';


console.log('\t\tBasic To-Do List')
const query: string = "What do you want to do?:\n1- Add task\n2- Delete task\n3- Print all tasks\n4- Exit\n"

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

async function mainLoop(){

    return new Promise<void>(async(resolve, reject) => rl.question(query, (answer) => {
        switch(answer){
            case '1':
                //TODO ADD TASK PROMPT
                console.log('Adding task')
                break
            case '2':
                // TODO DELETE TASK PROMPT
                console.log('Deleteing task')
                break
            case '3':
                // TODO PRINT TASKS PROMPT
                console.log('Printing tasks')
                break
            case '4':
                process.exit(1)
            default:
                console.log('Invalid choice!')
        }

        resolve();
    }))
}


(async () => {
    while(1){
        await mainLoop()
    }
})()