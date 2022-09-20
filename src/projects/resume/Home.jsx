import MainHeader from "./components/MainHeader";
import MainMenu from "./components/MainMenu";
import AboutMe from "./components/AboutMe";
import { useEffect, useState } from "react";
import MySkills from "./components/MySkills";
import Portfolio from "./components/Portfolio";
import work1 from "./img/work1.JPG";
import work2 from "./img/work2.JPG";
import work3 from "./img/work3.JPG";
import work4 from "./img/work4.JPG";
import classes from "./styles.module.scss";

const Home = () => {
  const [showInTop, setShowInTop] = useState(false);

  console.log("app render");

  const handleScroll = (e) => {
    window.screen.availHeight - window.scrollY < 200
      ? setShowInTop(true)
      : setShowInTop(false);
  };

  window.addEventListener("scroll", handleScroll);
  useEffect(() => {
    
    return ()=> window.removeEventListener("scroll" , handleScroll);
  }, []);

  const skills = [
    { name: "javascript", degree: 90 },
    { name: "React", degree: 85 },
    { name: "HTML/CSS", degree: 95 },
    { name: "GIT", degree: 90 },
    { name: "GIT", degree: 85 },
  ];

  const works = [
    { title: "/todolist", img: work1 },
    { title: "product-Manager", img: work2 },
    { title: "work3", img: work3 },
    { title: "work4", img: work4 },
  ];
  return (
    <div className={classes.App}>
      <MainMenu showInTop={showInTop} />
      <MainHeader showInTop={showInTop} />
      <AboutMe />
      <MySkills skills={skills} />
      <Portfolio works={works} />
      <button></button>
    </div>
  );
};

export default Home;
