import { Request, Response } from "express"
import { getAllUsers } from "../services/userService"

const getUsersController = (req: Request, res: Response) => {
    const users = getAllUsers()
    res.status(200).json({Message:"Success", Data:users})
}



export { getUsersController }