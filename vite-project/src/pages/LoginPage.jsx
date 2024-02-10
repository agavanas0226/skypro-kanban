import { Link, useNavigate } from "react-router-dom";
import Wrapper from "../components/Wrapper/Wrapper";
import { appRoutes } from "../lib/appRoutes";
import { Button, Container, FormGroup, Modal, ModalBlock, ModalForm, ModalInput, ModalTTL, TextButton } from "../GlobalStyle";
import { login } from "../API/api";
import { useState } from "react";



export default function LoginPage({setUserData}){

    let navigate = useNavigate();
    const loginForm = {
        login: '',
        password: '',
    };

    const [loginData, setLoginData] = useState(loginForm);

    const handleLogin = async (e) => {
        e.preventDefault()
        await login (loginData).then((data) =>{
            console.log(data);
            console.log(data.user);
            setUserData(data.user);
        }) .then(()=> {
            navigate(appRoutes.MAIN)
        })
        .catch((error) => {
            console.warn(error)
        })
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target; // Извлекаем имя поля и его значение
        setLoginData({
          ...loginData, // Копируем текущие данные из состояния
          [name]: value, // Обновляем нужное поле
        });
      };

    return(
        <Wrapper>
        <Container>
            <Modal>
				<ModalBlock>
					<ModalTTL>
						<h2>Вход</h2>
					</ModalTTL>
					<ModalForm id="formLogIn" action="#">
						<ModalInput type="text"  id="formlogin" placeholder="Эл. почта"
                        value={loginData.login}
                        onChange={handleInputChange}
                        name="login"       
                        label="Login"
                        />
						<ModalInput type="password" id="formpassword" placeholder="Пароль"
                        value={loginData.password}
                        onChange={handleInputChange}
                        name="password"       
                        label="Password"
                        />
						<Button className="modal__btn-enter _hover01" id="btnEnter" onClick={handleLogin}><TextButton href="../main.html">Войти</TextButton></Button>
						<FormGroup>
							<p>Нужно зарегистрироваться?</p>
							<Link to={appRoutes.REGISTER} >Регистрируйтесь здесь</Link>
						</FormGroup>
					</ModalForm>
				</ModalBlock>
            </Modal>
        </Container>
        </Wrapper>
    )
}