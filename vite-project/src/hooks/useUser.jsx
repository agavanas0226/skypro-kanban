import { useContext } from "react"
import { UserContext } from "../contexts/user"
import { TasksContext } from "../contexts/tasks";


export const useUser = () => {
    return useContext(UserContext, TasksContext);

}