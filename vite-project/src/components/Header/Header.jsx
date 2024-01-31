import { useState } from "react";
import { Container, HeaderBlock, HeaderHat, HeaderPopUserSet, HeaderPopUserSetTheme } from "../Card/Card.styled";
function Header(props){
	const[isOpened, setIsOpened] = useState(false);
	function togglePopUp(){
		setIsOpened((prev) => !prev)
	}
    return(
		<HeaderHat>
			<Container>
				<HeaderBlock>
					<div className="header__logo _show _light">
						<a href="" target="_self"><img src="images/logo.png" alt="logo"/></a>
					</div>
					<div className="header__logo _dark">
						<a href="" target="_self"><img src="images/logo_dark.png" alt="logo"/></a>
					</div>
					<nav className="header__nav">
						<button className="header__btn-main-new _hover01" id="btnMainNew" onClick={props.addCard}>Создать новую задачу</button>
						<a href="#" className="header__user _hover02 " onClick={togglePopUp}>Ivan Ivanov</a>
						{isOpened && 
						<HeaderPopUserSet>
						<a href=""></a> 
						<p className="pop-user-set__name">Ivan Ivanov</p>
						<p className="pop-user-set__mail">ivan.ivanov@gmail.com</p>
						<HeaderPopUserSetTheme>
							<p>Темная тема</p>
							<input type="checkbox" className="checkbox" name="checkbox"/>
						</HeaderPopUserSetTheme>
						<button type="button" className="_hover03"><a href="#popExit">Выйти</a></button>
						</HeaderPopUserSet>
					}
					</nav>					
				</HeaderBlock>
			</Container>			
		</HeaderHat>
    )
}
export default Header