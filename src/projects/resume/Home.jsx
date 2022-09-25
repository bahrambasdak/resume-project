import MainHeader from "./components/MainHeader";
import MainMenu from "./components/MainMenu";
import AboutMe from "./components/AboutMe";
import { useEffect, useState } from "react";
import MySkills from "./components/MySkills";
import Portfolio from "./components/Portfolio";
import work1 from "./img/work1.JPG";
import work2 from "./img/work2.JPG";
import work4 from "./img/work4.JPG";
import classes from "./styles.module.scss";

const Home = () => {
  const [showInTop, setShowInTop] = useState(false);
  const screenHeight = window.screen.availHeight;
  console.log("home render");

  const handleScroll = () => {
    if (screenHeight - window.scrollY < 200 && !showInTop) setShowInTop(true);
    if (screenHeight - window.scrollY > 200 && showInTop) setShowInTop(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  const skills = [
    { name: "Javascript", degree: 90 },
    { name: "React", degree: 90 },
    { name: "HTML/CSS", degree: 95 },
    { name: "GIT", degree: 90 },
    { name: "C++", degree: 85 },
    { name: "Labview", degree: 85 },
    { name: "SASS", degree: 85 },
    { name: "AXIOS", degree: 90 },
    { name: "RestFull API", degree: 80 },
    { name: "React Hooks", degree: 95 },
    { name: "BootStrap", degree: 50 },
    { name: "Redux", degree: 50 },
  ];

  const works = [
    { title: "Todo List", img: work1, space: "internal", path: "/todolist" },
    {
      title: "Product Manager",
      img: work2,
      space: "internal",
      path: "/product-manager",
    },
    {
      title: "Face Landmark",
      img: work4,
      space: "external",
      path: "https://face-landmark.netlify.app/",
    },
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
