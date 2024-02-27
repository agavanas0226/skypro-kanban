import { useState } from "react";
import { createContext } from "react";
import { appRoutes } from "../lib/appRoutes";
import { useNavigate } from "react-router-dom";

export const UserContext = createContext(null);

const getUserFromLocalStorage = () => {
    return JSON.parse(localStorage.getItem('user'))
}

export const UserProvider = ({children}) => {
    let navigate = useNavigate();

    const [userData, setUserData] = useState(getUserFromLocalStorage());
    // чтобы сохранять авторизацию, нужно вместо null передавать данные из локального хранилища
    const loginUser = (user) => {
        console.log(user);
        setUserData(user);
        localStorage.setItem('user', JSON.stringify(user));
        navigate(appRoutes.MAIN);
    }

    const logoutUser =() =>{
        setUserData(null);
        localStorage.removeItem('user')
        navigate(appRoutes.LOGIN)
    }
    return(
        <UserContext.Provider value={{userData, loginUser, logoutUser}}>
            {children}
        </UserContext.Provider>
    )
}
