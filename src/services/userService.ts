import { users, createrUser } from "../types/User";

const getAllUsers = () => {

    createrUser(1, 21, 'Hazem', '07775000')
    return users
}


export { getAllUsers }