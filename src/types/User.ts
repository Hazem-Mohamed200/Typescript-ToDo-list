import { ToDo } from "./ToDo"
import { ToDoList } from "./ToDoList"


let users:User[] = []

type User = {

    id: number
    age: number
    name: string
    phoneNo: string

    toDos?: ToDo[]
    toDoList?: ToDoList
}


const createrUser = (id: number, age: number, name:string, phoneNo: string) => {

    const newUser:User = {
        id:id,
        age:age,
        name:name,
        phoneNo:phoneNo
    }

    users.push(newUser)
}

export {User, users, createrUser}