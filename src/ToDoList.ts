import { ToDo, printTask, sortTasks } from "./ToDo";

class ToDoList {

    public title: string
    private toDos: ToDo[]
    private currentlySorted: boolean = true

    constructor (toDos: ToDo[], title: string){
        this.toDos = toDos
        this.title = title
    }

    addTask(title: string, description: string, deadline: string)
    {
        this.currentlySorted = false
        const newTask: ToDo = {'title': title, 'description': description, 'deadline': deadline, done: false}
        this.toDos.push(newTask)
    }

    deleteTask(index: number)
    {
        this.toDos.splice(index - 1, 1)
    }

    completeTask(index: number)
    {
        this.toDos[index - 1].done = true
    }

    printTasks()
    {
        if(!this.currentlySorted)
            this.toDos.sort(sortTasks)
        
        this.currentlySorted = true
        for(let i = 0; i < this.toDos.length; i++)
            printTask(this.toDos[i])
    }
}


export { ToDoList }