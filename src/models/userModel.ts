import slugify from "slugify";
import mongoose from "mongoose";
import { ObjectId } from "mongodb"

/*

type User = {

    age: number
    name: string
    email: string
    phoneNo: string

    toDos: ToDo[]
}


*/

const userSchema = new mongoose.Schema(
    {
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
        },

        email:{
            type: String,
            required: [true, "User E-mail is required"],
        },

        toDos:{
            type: [ObjectId],
            default: []
        }
    }
)


const userModel = mongoose.model('User', userSchema)

export default userModel;