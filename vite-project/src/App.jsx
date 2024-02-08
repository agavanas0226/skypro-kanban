import './App.css'
// import { GlobalStyle } from './GlobalStyle';
import { appRoutes } from './lib/appRoutes';
import  MainPage  from './pages/MainPage';
import  CardPage  from './pages/CardPage';
import  LoginPage  from './pages/LoginPage';
import  PopExitPage  from './pages/PopExitPage';
import  RegisterPage  from './pages/RegisterPage';
import  NotFoundPage  from './pages/NotFoundPage';
import { Route, Routes } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import { useState } from 'react';

function App() {
	const [userData, setUserData] = useState(null)

	return (
	<>
	{/* <GlobalStyle/> */}
	<Routes>
		<Route element={<PrivateRoute isAuth={userData} />}> 
			<Route path={appRoutes.MAIN} element={<MainPage userData={userData}/>}> 
				<Route path={`${appRoutes.CARD}/:cardId`} element={<CardPage/>} />
			</Route>
			<Route path={appRoutes.EXIT} element={<PopExitPage/>} />
		</Route>
			<Route path={appRoutes.LOGIN} element={<LoginPage setUserData={setUserData}/>} />
			<Route path={appRoutes.REGISTER} element={<RegisterPage/>} />
			<Route path={appRoutes.NOT_FOUND} element={<NotFoundPage/>} />
	</Routes>
	</>
  );
}

export default App
