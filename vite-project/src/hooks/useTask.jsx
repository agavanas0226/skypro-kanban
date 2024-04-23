import { useContext } from "react"
import { TasksContext } from "../contexts/tasks";


export const useTask = () => {
    return useContext(TasksContext);
}