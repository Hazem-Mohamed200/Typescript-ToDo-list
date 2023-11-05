import { Request, Response } from "express"
import { getAllToDos } from "../services/toDoService"

const getToDosController = (req: Request, res: Response) => {
    const toDos = getAllToDos()
    res.status(200).json({Message:"Success", Data:toDos})
}



export { getToDosController }