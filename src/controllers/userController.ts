import mongodb from "mongodb"
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

const validateUser = (age: any, name: any, phoneNo: any) => {

    if(name == undefined || !validateNumber(age) || phoneNo == undefined)
        return false
    
    return true
}

const getUsersController = async(req: Request, res: Response) => {
    const users = await getAllUsers()
    res.status(200).json({Message:"Success", Data:users})
}

const getUserWithIDController = async(req: Request, res: Response) => {

    const user = await getUserByID(req.params.id)

    if(user === null)
        res.status(404).json({Message: "Failed, User not found"})
    else
        res.status(200).json({Message:"Success", Data:user})
}

const createUserController = async(req: Request, res: Response) => {
    const {age, name, phoneNo, email} = req.body

    if(validateUser(age, name, phoneNo) == false)
        res.status(400).json({Message: "Bad parameters"})
    else
    {
        const user = await createUser(age, name, phoneNo, email)
        if(user)
            res.status(200).json({Message: 'User created', Data: user})
        else
            res.status(400).json({Message: 'ERROR'})
    }
}

const deleteUserController = async(req: Request, res: Response) => {
    
    const flag = await deleteUser(new mongodb.ObjectId(req.params.id))

    if(flag == false)
        res.status(404).json({Message: "Failed, User not found"})
    else
        res.status(200).json({Message:`Success, User:${req.params.id} deleted.`})
}

export { getUsersController, getUserWithIDController, createUserController, deleteUserController }