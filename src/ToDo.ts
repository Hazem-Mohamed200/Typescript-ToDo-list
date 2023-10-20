type ToDo = {
    
    done: boolean
    deadline: string // YY/MM/DD HH:MM

    title: string
    description: string


}

const sortTasks = (task1: ToDo, task2: ToDo) => {
    
    // Sorts the tasks by completion first, if there is a tie sorts the tasks by deadline

    const task1Status: boolean = task1.done
    const task2Status: boolean = task2.done

    const task1Deadline: string = task1.deadline
    const task2Deadline: string = task2.deadline

    if(task1Status == task2Status)
    {
        if(task1Deadline < task2Deadline)
            return -1
        else if(task1Deadline > task2Deadline)
            return 1
        else
            return 0
    }
    else if(task1Status == true)
        return 1
    else
        return -1
}

function printTask(task: ToDo): void{
    console.log(task.title)
    console.log(task.description)

    let status: string = (task.done ? 'Completed' : 'Not Completed')
    console.log(`Status: ${status}`)
    console.log(`Deadline: ${task.deadline}`)
}


export { ToDo, printTask, sortTasks }