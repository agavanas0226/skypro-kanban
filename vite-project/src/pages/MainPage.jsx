import Main from '../components/Main/Main';
import Header from '../components/Header/Header';
import Wrapper from '../components/Wrapper/Wrapper';
import PopExit from '../components/popExit/popExit';
import PopNewCard from '../components/popNewCard/popNewCard';
import { useEffect, useState } from 'react';
import { cardList } from '../date';
import { Link, Outlet } from 'react-router-dom';
import { appRoutes } from '../lib/appRoutes';

export default function MainPage(){
  const [cards, setCards] = useState(cardList);
  const [isLoaded, setIsLoaded] = useState(true);
  useEffect(()=>{
	setTimeout(() =>{
		setIsLoaded(false);
	}, 1000)
  }, [] )
	function addCard(){
		setCards([
			...cards,
			{
				id: cards.length + 1,
				theme: "Research",
				title: "Новая задача",
				date: "30.10.23",
				status: "Без статуса",
			
			}]
		)
	}
    return(
        <>
        <Wrapper>
        <PopExit />
        <PopNewCard />
        <Outlet/>
        <Header addCard={addCard}/>
        <Main isLoaded={isLoaded} cardList = {cards} />
        <Link to={appRoutes.LOGIN}>Войти</Link>
        <br/>
        <Link to={appRoutes.REGISTER}>Зарегистрироваться</Link>
      </Wrapper>
        </>
    )
}