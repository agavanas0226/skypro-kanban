import './App.css'

import Main from './components/Main/Main';
import Header from './components/Header/Header';
import Wrapper from './components/Wrapper/Wrapper'

function App() {
  
  return (
  <Wrapper>
	<popExit />
	<popNewCard />
	<popBrowse/>
	<Header />
	<Main />
  </Wrapper>
  );
}

export default App
