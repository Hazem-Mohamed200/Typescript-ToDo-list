import { ToDo } from "../types/ToDo"
import { User } from "../types/User"
import { allToDos } from "../types/ToDoList"



const getAllToDos = async()=>{
    return allToDos
}

const createToDo = async(user:User, task:ToDo) => {
    user.toDoList.addTask(task)
    user.toDos.push(task)
}


const getUserToDos = async(user:User) => {
    return user.toDos
}

export { getAllToDos, getUserToDos, createToDo }