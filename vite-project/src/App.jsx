import './App.css'
import PopBrowse from './components/PopBrowse/popBrowse';
import PopExit from './components/PopExit/popExit';
import PopNewCard from './components/PopNewCard/popNewCard';
import Main from './components/Main/Main';
import Header from './components/Header/Header';
import Wrapper from './components/Wrapper/Wrapper';
import { useEffect, useState } from 'react';
import { cardList } from './date';

function App() {
  const [cards, setCards] = useState(cardList);
  const [isLoaded, setIsLoaded] = useState(true);
  useEffect(()=>{
	setTimeout(() =>{
		setIsLoaded(false);
	}, 2000)
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
  return (
  <Wrapper>
	<PopExit />
	<PopNewCard />
	<PopBrowse/>
	<Header addCard={addCard}/>
	<Main isLoaded={isLoaded} cardList = {cards} />
  </Wrapper>
  );
}

export default App
