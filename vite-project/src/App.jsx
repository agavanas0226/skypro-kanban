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

function App() {
	let user = true;
  return (
	<>
	{/* <GlobalStyle/> */}
	<Routes>
		<Route element={<PrivateRoute user={user} />}> 
			<Route path={appRoutes.MAIN} element={<MainPage/>}> 
				<Route path={`${appRoutes.CARD}/:cardId`} element={<CardPage/>} />
			</Route>
			<Route path={appRoutes.EXIT} element={<PopExitPage/>} />
		</Route>
			<Route path={appRoutes.LOGIN} element={<LoginPage/>} />
			<Route path={appRoutes.REGISTER} element={<RegisterPage/>} />
			<Route path={appRoutes.NOT_FOUND} element={<NotFoundPage/>} />
	</Routes>
	</>
  );
}

export default App
