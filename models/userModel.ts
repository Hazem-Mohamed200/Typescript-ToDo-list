import slugify from "slugify";
import mongoose from "mongoose";
import { ObjectId } from "mongodb"

/*

type User = {

    id: number
    age: number
    name: string
    email: string
    phoneNo: string

    toDos: ToDo[]
}


*/

const emailValidator = (email: string):boolean => {
    const emailRegex = RegExp('^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$')
    return emailRegex.test(email)
}   

const phoneNoValidator = (phoneNo: string): boolean => {
    const phoneNoRegex = RegExp('^(\+[0-9]{1,2})?[0-9]{11}$')
    return phoneNoRegex.test(phoneNo)
}

const userSchema = new mongoose.Schema(
    {
        id:{
            type: Number,

            unique: true,
            required: [true, "User ID is required"],
        },

        age:{
            type: Number,
            required: [true, "User age is required"],
        },

        name:{
            type: String,
            required: [true, "User name is required"],
        },

        phoneNo:{
            type: String,
            required: [true, "User phoneNo is required"],
            validate: [phoneNoValidator, "Wrong phone number format"]
        },

        email:{
            type: String,
            required: [true, "User E-mail is required"],
            validate: [emailValidator, "Wrong email format"] 
        },

        toDos:{
            type: [ObjectId],
        }
    }
)


const userModel = mongoose.model('User', userSchema)

export default userModel