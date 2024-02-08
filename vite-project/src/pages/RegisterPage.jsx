import { Link } from "react-router-dom"
import Wrapper from "../components/Wrapper/Wrapper"
import { appRoutes } from "../lib/appRoutes"
import { Container, FormGroup, Modal, ModalBlock, ModalForm, ModalInput, ModalTTL } from "../GlobalStyle"

export default function RegisterPage(){
    return(
        <Wrapper>
        <Container>
            <Modal>
				<ModalBlock>
					<ModalTTL>
						<h2>Регистрация</h2>
					</ModalTTL>
					<ModalForm>
						<ModalInput type="text" name="first-name" id="first-name" placeholder="Имя"/>
						<ModalInput type="text" name="login" id="loginReg" placeholder="Эл. почта"/>
						<ModalInput type="password" name="password" id="passwordFirst" placeholder="Пароль" />
						<button className="modal__btn-signup-ent _hover01" id="SignUpEnter"><a href="../main.html">Зарегистрироваться</a> </button>
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