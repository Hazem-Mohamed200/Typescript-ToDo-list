import { ToDo } from "../types/ToDo"
import { User } from "../types/User"
import userModel from "../models/userModel"
import toDoModel from "../models/todoModel"


const getAllToDos = async() => {
    const todos = await toDoModel.find({})
    return todos
}

const createToDo = async(task: ToDo) => {
    
    try{
        const todo = await toDoModel.create(task)
        const newUser = await userModel.findByIdAndUpdate(task.userID, {$push: {toDos: todo._id}})
        return todo
    }catch(err){
        console.log("Error: " + err)
        return null;
    }
}

export { getAllToDos, createToDo }