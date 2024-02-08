import { Link } from "react-router-dom";
import Wrapper from "../components/Wrapper/Wrapper";
import { appRoutes } from "../lib/appRoutes";
import { Container, FormGroup, Modal, ModalBlock, ModalForm, ModalInput, ModalTTL } from "../GlobalStyle";

export default function LoginPage(){
    return(
        <Wrapper>
        <Container>
            <Modal>
				<ModalBlock>
					<ModalTTL>
						<h2>Вход</h2>
					</ModalTTL>
					<ModalForm id="formLogIn" action="#">
						<ModalInput type="text" name="login" id="formlogin" placeholder="Эл. почта"/>
						<ModalInput type="password" name="password" id="formpassword" placeholder="Пароль"/>
						<button className="modal__btn-enter _hover01" id="btnEnter"><a href="../main.html">Войти</a></button>
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