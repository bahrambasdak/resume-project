import logo from './logo.svg';
import './App.scss';

import MainHeader from './components/MainHeader';
import MainMenu from './components/MainMenu';
import AboutMe from './components/AboutMe';

function App() {
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
