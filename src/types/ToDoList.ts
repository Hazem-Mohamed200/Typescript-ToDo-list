import { ToDo, printTask, sortTasks } from "./ToDo";

const allToDos: ToDo[] = []

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


        allToDos.push(task)
    }

    deleteTask(index: number)
    {
        this.toDos.splice(index - 1, 1)
    }

    changeDeadline(index: number, newDeadline: string)
    {
        this.toDos[index - 1].deadline = newDeadline
    }

    addTag(index: number, tag: string)
    {
        if(this.toDos[index - 1].tags === undefined)
            this.toDos[index - 1].tags = []

        this.toDos[index - 1].tags?.push(tag)
    }

    deleteTag(index: number, tag: string)
    {
        if(this.toDos[index - 1].tags === undefined)
            return

        let tagIndex = this.toDos[index - 1].tags?.findIndex((usedTag: string) => {return usedTag == tag})

        if(tagIndex == -1)
            return

        this.toDos[index - 1].tags?.splice((tagIndex === undefined ? 0 : tagIndex), 1)
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


export { ToDoList, allToDos }