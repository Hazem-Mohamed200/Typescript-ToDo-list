import { ToDoList } from "../types/ToDoList";
import { User } from "../types/User";

let users:User[] = []
let usersMap:Map<number, number> = new Map<number, number>

const createUser = async(id: number, age: number, name:string, phoneNo: string) => {
    
    const newUser:User = {
        id:id,
        age:age,
        name:name,
        phoneNo:phoneNo,
        toDos: [],
        toDoList: new ToDoList([], 'ToDo List')
    }

    if(usersMap.has(newUser.id))
        return false
    
    usersMap.set(newUser.id, users.length)
    users.push(newUser)
    return true
}

const getAllUsers = () => {
    return users
}

const getUserByID  = async(id:number) => {
    
    if(!usersMap.has(id))
        return null;
    else
        return users[usersMap.get(id)!]
}



export { getAllUsers, getUserByID, createUser }