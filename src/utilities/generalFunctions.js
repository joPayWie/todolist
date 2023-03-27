import { getLocalStorage } from "./LocalStorage"

export const toggleBoolean = (status) => status ? false : true

export const filterTasks = (selectValue) => {
    let taskArray = getLocalStorage('tasks')
    if (selectValue === '' || selectValue === 'all') {
        return taskArray
    }
    if (selectValue === 'completed') {
        return taskArray.filter(task => task.taskStatus === true)
    }
    if (selectValue === 'pending') {
        return taskArray.filter(task => task.taskStatus === false)
    }
}