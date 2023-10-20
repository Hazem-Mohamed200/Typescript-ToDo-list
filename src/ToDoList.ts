import { ToDo } from "./ToDo";

class ToDoList {

    public title: string
    private toDos: ToDo[]

    constructor (toDos: ToDo[], title: string){
        this.toDos = toDos
        this.title = title
    }

    addTask(title: string, description: string, deadline: string)
    {
        
    }

    deleteTask(id: number)
    {

    }

    completeTask(id: number)
    {

    }

    printTasks()
    {

    }
}


export { ToDoList }