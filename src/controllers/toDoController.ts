import mongodb from "mongodb"
import { Request, Response } from "express"
import { getUserByID } from "../services/userService"
import { getAllToDos, createToDo } from "../services/toDoService"

const getToDosController = async (req: Request, res: Response) => {
    const toDos = await getAllToDos()
    res.status(200).json({Message:"Success", Data:toDos})
}


const getUserToDosController = async (req: Request, res: Response) => {
    const user = await getUserByID(req.params.id)

    if(user === null)
        res.status(404).json({Message: "User Not Found"})

    const userToDos = user!.toDos
    res.status(200).json({Message: "Success", Data: userToDos})
}


const createToDoController = async (req: Request, res: Response) => {

    const {userID, done, deadline, title, description} = req.body
    
    const user = await getUserByID(userID)

    if(user === null)
        res.status(404).json({Message: "User Not Found"})

    const task = {
        userID: userID,
        done: done,
        deadline: deadline,
        title: title,
        description: description
    }

    await createToDo(task)
    res.status(200).json({Message: `ToDo added to User: ${user!._id}`})
}



export { getToDosController, createToDoController, getUserToDosController }