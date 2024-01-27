import mongodb from "mongodb"
import ObjectId from "mongodb"
import { User } from "../types/User"
import userModel from "../models/userModel"


const createUser = async(age: number, name:string, phoneNo: string, email: string) => {
    try{
        const user = await userModel.create({age, name, phoneNo, email});
        return user
    }
    catch(err){
        console.log("Error: " + err)
        return null;
    }
}

const getAllUsers = async() => {
    const users = await userModel.find({})
    return users
}

const getUserByID  = async(id: string) => {
    const user = userModel.findById(id)
    return user
}

const deleteUser = async(id: mongodb.ObjectId) => {
    const flag = await userModel.deleteOne({id: id})
    return true
}


export { getAllUsers, getUserByID, createUser, deleteUser }