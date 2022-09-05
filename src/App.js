
import "./App.scss";

import MainHeader from "./components/MainHeader";
import MainMenu from "./components/MainMenu";
import AboutMe from "./components/AboutMe";
import { useEffect, useState } from "react";

function App() {
  const [showInTop, setShowInTop] = useState(false);

console.log('app render');
  useEffect(() => {
    window.addEventListener("scroll", (e) => {
      console.log(window.screen.availHeight - window.scrollY < 200);
      window.screen.availHeight - window.scrollY < 200
        ? setShowInTop(true)
        : setShowInTop(false);
        console.log(window.scrollY);
     
    });
    console.log('app useEfect');
  },[]);

  return (
    <div className="App">
      <MainMenu showInTop={showInTop} />

      
        <MainHeader />

      <AboutMe />
    </div>
  );
}

export default App;
