import Main from '../components/Main/Main';
import Header from '../components/Header/Header';
import Wrapper from '../components/Wrapper/Wrapper';
import PopExit from '../components/popExit/popExit';
import PopNewCard from '../components/popNewCard/popNewCard';
import { useEffect, useState } from 'react';
import {  Outlet } from 'react-router-dom';
import { getTasks } from '../API/api';

export default function MainPage({userData}){
  // setIsLoaded(true);
  const [isOpened, setIsOpened] = useState(false);


  const [cards, setCards] = useState([]);
  
  const [isLoaded, setIsLoaded] = useState(true);
  
  useEffect(()=>{

    getTasks({token: userData.token})
    
    .then((data) =>{
      console.log(data)
      setCards(data.tasks)
    })

    .then(() =>{
      setIsLoaded(false);
    })
  }, [])
	
function handleOpenPopUp(){
		setIsOpened(true)
	}
	function handleClosePopUp(event){
		event.preventDefault();
		setIsOpened(false)
	}
    return(
        <>
        <Wrapper>
        <PopExit />
        {isOpened ?  <PopNewCard handleClosePopUp={handleClosePopUp}/> : null}
        <Outlet/>
        <Header addCard={handleOpenPopUp}/>
        <Main isLoaded={isLoaded} cardList = {cards} />
      </Wrapper>
        </>
    )
}