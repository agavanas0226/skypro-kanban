import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { appRoutes } from "../lib/appRoutes";



export const TasksContext = createContext(null);
// перенести логику из мейнпейдж получение задач севрвера, доделать по аналогии из юзера,все это в таскспровайдере. получать с помощью контекста. 

// const getUserFromLocalStorage = () => {
//     return JSON.parse(localStorage.getItem('user'))
// }

export const TasksProvider = ({children}) => {
    const [tasksData, setTasksData] = useState([]);
    let navigate = useNavigate();
    const [selected] = useState();

    const tasksUser = (user) => {
        console.log(user);
        setTasksData(user);
        localStorage.setItem('user', JSON.stringify(user));
        navigate(appRoutes.MAIN);
    }

    // const handleInputChange = (e) => {
    //     const { name, value } = e.target; // Извлекаем имя поля и его значение
    //     setTasksData({
    //       ...tasksData, // Копируем текущие данные из состояния
    //       [name]: value, // Обновляем нужное поле
    //     });
    //   };
    
      useEffect(() => {
        if (selected) {
          setTasksData({
            ...tasksData,
            date: selected,
          });
        }
      }, [selected]);
 


    return(
        <TasksContext.Provider value={{tasksData, setTasksData, tasksUser}} >
            {children}
        </TasksContext.Provider>
    )
}