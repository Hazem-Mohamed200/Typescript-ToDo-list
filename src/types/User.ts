import { ToDo } from "./ToDo"

type User = {
    age: number
    name: string
    email: string
    phoneNo: string

    toDos: ToDo[]
}


export { User }