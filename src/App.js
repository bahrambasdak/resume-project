import "./App.scss";

import MainHeader from "./components/MainHeader";
import MainMenu from "./components/MainMenu";
import AboutMe from "./components/AboutMe";
import { useEffect, useState } from "react";
import MySkills from "./components/MySkills";

function App() {
  const [showInTop, setShowInTop] = useState(false);

  console.log("app render");
  useEffect(() => {
    window.addEventListener("scroll", (e) => {
      console.log(window.screen.availHeight - window.scrollY < 200);
      window.screen.availHeight - window.scrollY < 200
        ? setShowInTop(true)
        : setShowInTop(false);
      console.log(window.scrollY);
    });
    console.log("app useEfect");
  }, []);

  const skills = [
    { name: "javascript", degree: 85 },
    { name: "javascript", degree: 85 },
    { name: "javascript", degree: 85 },
    { name: "javascript", degree: 85 },
  ];

  return (
    <div className="App">
      <MainMenu showInTop={showInTop} />

      <MainHeader />

      <AboutMe />
      <MySkills skills={skills} />
    </div>
  );
}

export default App;
