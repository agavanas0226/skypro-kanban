import { Navigate, Outlet } from "react-router-dom";
import { appRoutes } from "../../lib/appRoutes";

export default function PrivateRoute({isAuth}){
    return isAuth ? <Outlet/> : <Navigate to={appRoutes.LOGIN} />
}