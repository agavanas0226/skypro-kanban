import {  useState } from "react";
import {Button, HeaderBlock, HeaderHat, HeaderPopUserSet, HeaderPopUserSetTheme } from "../Header/Header.styled";
import { Container } from "../Main/Main.styled";
import { appRoutes } from "../../lib/appRoutes";
import { Link } from "react-router-dom";
import { useUser } from "../../hooks/useUser";
// import { UserContext } from "../../contexts/user";



function Header(props){
	const {userData} = useUser ();
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
						{/* Куда-то сюда надо передать имя */}
						<a href="#" className="header__user _hover02 " onClick={togglePopUp}  name="name"label="Name">{userData.name} </a>
						{isOpened && 
						<HeaderPopUserSet>
						<a href=""></a> 
						<p className="pop-user-set__name">{userData.name}</p>
						<p className="pop-user-set__mail">{userData.login}</p>
						<HeaderPopUserSetTheme>
						</HeaderPopUserSetTheme>
						<Button type="button" className="_hover03" ><Link  to={appRoutes.EXIT} > Выйти </Link></Button>
						</HeaderPopUserSet>
					}
					</nav>					
				</HeaderBlock>
			</Container>			
		</HeaderHat>
    )
}
export default Header