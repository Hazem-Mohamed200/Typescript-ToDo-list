import { Request, Response } from "express"
import { getAllUsers, getUserByID, createUser, deleteUser } from "../services/userService"


const validateNumber = (reqParam: string) =>{

    if(reqParam == undefined)
        return false
    for(let i = 0; i < reqParam.length; i++)
    {
        if(!(reqParam[i] >= '0' && reqParam[i] <= '9'))
            return false
    }
    return true;
}

const validateUser = (id: any, age: any, name: any, phoneNo: any) => {

    if(name == undefined || !validateNumber(id) || !validateNumber(age) || phoneNo == undefined)
        return false
    
    return true
}

const getUsersController = (req: Request, res: Response) => {
    const users = getAllUsers()
    res.status(200).json({Message:"Success", Data:users})
}

const getUserWithIDController = async(req: Request, res: Response) => {

    if(validateNumber(req.params.id) == false)
        res.status(400).json({Message: "Bad parameters"})

    const user = await getUserByID(parseInt(req.params.id))

    if(user === null)
        res.status(404).json({Message: "Failed, User not found"})
    else
        res.status(200).json({Message:"Success", Data:user})
}

const createUserController = async(req: Request, res: Response) => {
    const {id, age, name, phoneNo} = req.body

    if(validateUser(id, age, name, phoneNo) == false)
        res.status(400).json({Message: "Bad parameters"})
    else
    {
        const userCreated: boolean = await createUser(id, age, name, phoneNo)
        if(userCreated)
            res.status(200).json({Message: 'User created'})
        else
            res.status(400).json({Message: 'User ID already in use'})
    }
}

const deleteUserController = async(req: Request, res: Response) => {
    if(validateNumber(req.params.id) == false)
        res.status(400).json({Message: "Bad parameters"})

    const flag = await deleteUser(parseInt(req.params.id))

    if(flag == false)
        res.status(404).json({Message: "Failed, User not found"})
    else
        res.status(200).json({Message:`Success, User:${req.params.id} deleted.`})
}

export { getUsersController, getUserWithIDController, createUserController, deleteUserController }