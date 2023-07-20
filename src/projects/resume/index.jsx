import MainMenu from "./components/MainMenu";
import AboutMe from "./components/aboutMe";
import {IoLogoJavascript} from "react-icons/io";
import {GrReactjs} from "react-icons/gr";
import {TbBrandNextjs} from "react-icons/tb";
import {AiFillHtml5 , AiFillApi} from "react-icons/ai";
import {IoLogoCss3 , IoLogoSass} from "react-icons/io";
import {FaGitAlt} from "react-icons/fa";
import {SiRedux} from "react-icons/si";









import { useEffect, useState } from "react";
import MySkills from "./components/mySkills/MySkills";
import work1 from "./img/work1.JPG";
import work2 from "./img/work2.JPG";
import work4 from "./img/work4.JPG";
import work5 from "./img/work5.JPG";
import work6 from "./img/work6.JPG";
import "./mainStyles.scss"

import classes from "./styles.module.scss";
import Projects from "./components/projects/Projects";
import HomePage from "./components/home-page";
import { Experience } from "./components/experience";
import { Certificates } from "./components/certificates";


const Main = () => {
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
    { name: "Javascript", logo: <IoLogoJavascript /> ,color:'#E8ED58'},
    { name: "Reactjs", logo: <GrReactjs /> ,color:'#33FCFF'},
    { name: "Nextjs", logo: <TbBrandNextjs /> ,color:'black'},
    { name: "HTML5", logo: <AiFillHtml5 /> ,color:'#FF9A4B'},
    { name: "CSS3", logo: <IoLogoCss3 /> ,color:'#4BB3FF'},
    { name: "GIT", logo: <FaGitAlt /> ,color:'#FB7D2C'},
    { name: "SASS", logo: <IoLogoSass /> ,color:'#F22CFB'},
    { name: "RestFull API", logo: <AiFillApi /> ,color:'#35FB2C'},
    { name: "Redux", logo: <SiRedux /> ,color:'#972CFB'},
  ];
  
  const projects = [
    {
      title: "www.teamyab.com",
      img: work6,
      space: "external",
      path: "https://www.teamyab.com/",
      desc:`As my main project I worked on the Teamyab in collaboration with Teamyab's team`,
    },
    {
      title: "Huralya(web3)",
      img: work5,
      space: "external",
      path: "https://huralya-web3.netlify.app/",
      desc:'The front-end project of a website in the blockchain field with features such as connecting to Trustvallet and Metamask ',
    },
    {
      title: "Product Manager",
      img: work2,
      space: "internal",
      path: "/product-manager",
      desc:'Project management panel of a store with the capabilities of managing, removing and adding products',
    },
    {
      title: "Face Landmark",
      img: work4,
      space: "external",
      path: "https://face-landmark.netlify.app/",
      desc:'A project with the ability to recognize the human face and draw points according to the shape of that face',
    },


  ];

  return (
    <div className='App'>
      <div className='Container'>
      {/* <MainMenu showInTop={showInTop} /> */}

      <HomePage showInTop={showInTop} />

      {/* <AboutMe /> */}

      <MySkills skills={skills} />
      <Experience />
      <Projects projects={projects} />
      <Certificates />
      </div>
      <button></button>
    </div>
  );
};

export default Main;






