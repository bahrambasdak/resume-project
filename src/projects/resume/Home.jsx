import MainHeader from "./components/MainHeader";
import MainMenu from "./components/MainMenu";
import AboutMe from "./components/AboutMe";
import { useEffect, useState } from "react";
import MySkills from "./components/MySkills";
import Portfolio from "./components/Portfolio";
import work1 from "./img/work1.png";
import work2 from "./img/work2.JPG";
import work3 from "./img/work3.JPG";
import work4 from "./img/work4.JPG";
import classes from './styles.module.scss';
import { Link } from "react-router-dom";

const Home = () => {
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
    { name: "React", degree: 85 },
    { name: "HTML/CSS", degree: 85 },
    { name: "GIT", degree: 85 },
    { name: "GIT", degree: 85 },
  ];

  const works = [
    { title: "/todolist", img: work1 },
    { title: "product Manager", img: work2 },
    { title: "product Manager", img: work3 },
    { title: "product Manager", img: work4 },
  ];
  return (
    <div className={classes.App}>
      <MainMenu showInTop={showInTop} />
      
      <MainHeader />
      
      <Link to={'/todolist'}>jhgdjhasfsf</Link>
      <AboutMe />
      <MySkills skills={skills} />
      <Portfolio works={works} />
      <button></button>
      </div>
  );
};

export default Home;