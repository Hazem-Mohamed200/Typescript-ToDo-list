import { ToDo } from "./ToDo"
import { ToDoList } from "./ToDoList"

type User = {

    id: number
    age: number
    name: string
    phoneNo: string

    toDos?: ToDo[]
    toDoList?: ToDoList
}


export { User }