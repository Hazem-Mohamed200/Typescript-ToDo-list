import slugify from "slugify";
import mongoose from "mongoose";
import { ObjectId } from "mongodb"


/*

type ToDo = {
    
    userID: number
    
    id?: number
    
    tags?: string[]
    
    done: boolean
    deadline: string // YY/MM/DD HH:MM
    
    title: string
    description: string
}


*/


const todoSchema = new mongoose.Schema({

    title:{
        type: String,
        required: [true, "ToDo title is required"]
    },

    description:{
        type: String,
        required: [true, "ToDo description is required"]
    },

    done:{
        type: Boolean,
        required: [true, "ToDo State is required"]
    },

    deadline:{
        type: Date,
        required: [true, "ToDo deadline is required"]
    },

    tag: {
        type: [String]
    },

    userID: {
        type: ObjectId,
        required: [true, "ToDo userID is required"]
    }
})

const toDoModel = mongoose.model('ToDo', todoSchema)

export default toDoModel