import { User } from "../types/User";


const createUser = async(id: number, age: number, name:string, phoneNo: string, email: string) => {
    return true
}

const getAllUsers = () => {
    
}

const getUserByID  = async(id:number) => {
    const tmpUser:User ={
            id:1,
            name:"dsfdsf",
            age:1,
            email:"sdfsdf",
            phoneNo:"sdfsdf",
            toDos: []
    }

    return tmpUser
}

const deleteUser = async(id: number) => {
    return true
}


export { getAllUsers, getUserByID, createUser, deleteUser }