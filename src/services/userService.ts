import { ToDoList } from "../types/ToDoList";
import { User } from "../types/User";

let users:Map<number, User> = new Map<number, User>

const createUser = async(id: number, age: number, name:string, phoneNo: string) => {
    
    const newUser:User = {
        id:id,
        age:age,
        name:name,
        phoneNo:phoneNo,
        toDos: [],
        toDoList: new ToDoList([], 'ToDo List')
    }

    if(users.has(newUser.id))
        return false
    
    users.set(newUser.id, newUser)
    return true
}

const getAllUsers = () => {
    
    const allUsers: User[] = []
    users.forEach((value: User)=>{allUsers.push(value)})
    return allUsers
}

const getUserByID  = async(id:number) => {
    
    if(!users.has(id))
        return null;
    else
        return users.get(id)!
}

const deleteUser = async(id: number) => {
    if(!users.has(id))
        return false;

    users.delete(id)
    
    return true
}


export { getAllUsers, getUserByID, createUser, deleteUser }