import { Link} from "react-router-dom"
import Wrapper from "../components/Wrapper/Wrapper"
import { appRoutes } from "../lib/appRoutes"
import { Button, Container, FormGroup, Modal, ModalBlock, ModalForm, ModalInput, ModalTTL, TextButton } from "../GlobalStyle"
import { useState } from "react";
import { register } from "../API/api";
import { useUser } from "../hooks/useUser";

export default function RegisterPage(){

    const {loginUser} = useUser();

        const registerForm = {
        name: '',
        login: '',
        password: '',
    };

    const [registerData, setRegisterData] = useState(registerForm);

    const handleRegister = async (e) => {
        e.preventDefault()
        await register (registerData).then((data) =>{
            console.log(data);
            console.log(data.user);
            loginUser(data.user)
        })
        .catch((error) => {
            console.warn(error)
        })
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target; // Извлекаем имя поля и его значение
      
        setRegisterData({
          ...registerData, // Копируем текущие данные из состояния
          [name]: value, // Обновляем нужное поле
        });
      };
    return(
        <Wrapper>
        <Container>
            <Modal>
				<ModalBlock>
					<ModalTTL>
						<h2>Регистрация</h2>
					</ModalTTL>
					<ModalForm>
						<ModalInput type="text"  id="first-name" placeholder="Имя"
                        value={registerData.name}
                        onChange={handleInputChange}
                        name="name"       
                        label="Name"
                        />
						<ModalInput type="text"  id="loginReg" placeholder="Эл. почта"
                        value={registerData.login}
                        onChange={handleInputChange}
                        name="login"       
                        label="Login"
                        />
						<ModalInput type="password" id="passwordFirst" placeholder="Пароль" 
                        value={registerData.password}
                        onChange={handleInputChange}
                        name="password"       
                        label="Password"
                        />
						<Button className="modal__btn-signup-ent _hover01" id="SignUpEnter" onClick={handleRegister}><TextButton href="../main.html">Зарегистрироваться</TextButton> </Button>
						<FormGroup>
							<p>Уже есть аккаунт?  <Link to={appRoutes.LOGIN}>Войдите здесь</Link></p>
						</FormGroup>
					</ModalForm>
				</ModalBlock>
			</Modal>
        </Container>
        </Wrapper>
    )
}