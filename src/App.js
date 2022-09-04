import logo from './logo.svg';
import './App.scss';

import MainHeader from './components/MainHeader';
import MainMenu from './components/MainMenu';
import AboutMe from './components/AboutMe';
import { useEffect, useState } from 'react';

function App() {

  const [scroll , setScroll] = useState('');
  window.addEventListener('scroll',(e)=>{
    console.log(e);
  })
  useEffect(()=>{

  })
  return (
    <div className="App">
      <MainMenu />
      
      <header className="App-header">
        <MainHeader />
      </header>

      <AboutMe />

    </div>
  );
}

export default App;
