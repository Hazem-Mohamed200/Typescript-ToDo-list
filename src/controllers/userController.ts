import { Request, Response } from "express"
import { getAllUsers, getUserByID, createUser } from "../services/userService"


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

const getUserWithIDController = (req: Request, res: Response) => {

    if(validateNumber(req.params.id) == false)
        res.status(400).json({Message: "Bad parameters"})

    const user = getUserByID(parseInt(req.params.id))

    if(user === null)
        res.status(404).json({Message: "Failed, User not found"})
    else
        res.status(200).json({Message:"Success", Data:user})
}

const createUserController = (req: Request, res: Response) => {
    const {id, age, name, phoneNo} = req.body

    if(validateUser(id, age, name, phoneNo) == false)
        res.status(400).json({Message: "Bad parameters"})
    else
    {
        createUser(id, age, name, phoneNo)
        res.status(200).json({Message: 'User created'})
    }
}


export { getUsersController, getUserWithIDController, createUserController }