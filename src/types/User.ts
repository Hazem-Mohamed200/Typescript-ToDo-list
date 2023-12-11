import { ToDo } from "./ToDo"

type User = {

    id: number
    age: number
    name: string
    email: string
    phoneNo: string

    toDos: ToDo[]
}


export { User }