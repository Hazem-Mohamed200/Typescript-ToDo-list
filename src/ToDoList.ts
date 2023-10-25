import { ToDo, printTask, sortTasks } from "./ToDo";

class ToDoList {

    public title: string
    private toDos: ToDo[]
    private fixed: boolean = true

    constructor (toDos: ToDo[], title: string){
        this.toDos = toDos
        this.title = title
        this.fixList()
    }

    private fixList(){
        this.toDos.sort(sortTasks)
        for(let i = 0; i < this.toDos.length; i++){
            this.toDos[i].id = i + 1
        }
    }

    addTask(task: ToDo)
    {
        this.fixed = false
        this.toDos.push(task)
    }

    deleteTask(index: number)
    {
        this.toDos.splice(index - 1, 1)
    }

    changeDeadline(index: number, newDeadline: string)
    {
        this.toDos[index].deadline = newDeadline
    }

    completeTask(index: number)
    {
        this.fixed = false
        this.toDos[index - 1].done = true
    }

    printTasks()
    {
        if(!this.fixed)
            this.fixList()
        
        this.fixed = true
        for(let i = 0; i < this.toDos.length; i++)
            printTask(this.toDos[i])
        
        console.log()
        console.log()
    }
}


export { ToDoList }