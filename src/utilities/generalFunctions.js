import { getLocalStorage } from "./LocalStorage"

export const filterTasks = (selectValue, array = getLocalStorage('tasks')) => {
    if (selectValue === '' || selectValue === 'all') {
        return array
    }
    if (selectValue === 'complete') {
        return array.filter(task => task.taskStatus === true)
    }
    if (selectValue === 'pending') {
        return array.filter(task => task.taskStatus === false)
    }
}