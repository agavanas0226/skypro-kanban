import { useState } from "react";
import {HeaderBlock, HeaderHat, HeaderPopUserSet, HeaderPopUserSetTheme } from "../Header/Header.styled";
import { Container } from "../Main/Main.styled";
import { appRoutes } from "../../lib/appRoutes";



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
						<a href="#" className="header__user _hover02 " onClick={togglePopUp} name="name"label="Name"></a>
						{isOpened && 
						<HeaderPopUserSet>
						<a href=""></a> 
						<p className="pop-user-set__name">Ivan Ivanov</p>
						<p className="pop-user-set__mail">ivan.ivanov@gmail.com</p>
						<HeaderPopUserSetTheme>
						</HeaderPopUserSetTheme>
						<button type="button" className="_hover03" ><a  onClick={appRoutes.EXIT} > Выйти </a></button>
						</HeaderPopUserSet>
					}
					</nav>					
				</HeaderBlock>
			</Container>			
		</HeaderHat>
    )
}
export default Header