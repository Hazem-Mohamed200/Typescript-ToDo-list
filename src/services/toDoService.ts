import { ToDo } from "../types/ToDo"
const getAllToDos = ()=>{
    const task:ToDo = {
        done: false,
        deadline: '10/10/2002',
        title: 'test task',
        description: 'test test test'
    }

    return task
}


export { getAllToDos }