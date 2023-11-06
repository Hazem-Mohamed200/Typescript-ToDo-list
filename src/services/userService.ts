import { User } from "../types/User";

let users:User[] = []
let usersMap:Map<number, number> = new Map<number, number>

const createUser = (id: number, age: number, name:string, phoneNo: string) => {
    
    const newUser:User = {
        id:id,
        age:age,
        name:name,
        phoneNo:phoneNo
    }
    
    usersMap.set(newUser.id, users.length)
    users.push(newUser)
}

const getAllUsers = () => {
    return users
}

const getUserByID  = (id:number) => {
    
    if(!usersMap.has(id))
        return null;
    else
        return users[usersMap.get(id)!]
}



export { getAllUsers, getUserByID, createUser }