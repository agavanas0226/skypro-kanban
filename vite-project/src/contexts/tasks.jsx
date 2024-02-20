import { createContext, useState } from "react";

export const TasksContext = createContext(null);
// перенести логику из мейнпейдж получение задач севрвера, доделать по аналогии из юзера,все это в таскспровайдере. получать с помощью контекста. 

export const TasksProvider = ({children}) => {
    const [tasksData, setTasksData] = useState();

    return(
        <TasksContext.Provider value={{tasksData, setTasksData}}>
            {children}
        </TasksContext.Provider>
    )
}