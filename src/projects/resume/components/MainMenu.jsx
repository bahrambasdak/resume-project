import { memo, useEffect, useState } from "react";
import classes from "../styles.module.scss";
import { MdMenu, MdClose } from "react-icons/md";
import resume from "../bahram-basdak-resume-1401.pdf";
import { useLocation } from "react-router-dom";

const MainMenu = ({ showInTop }) => {
  console.log("mainmenu render");
  const [showMenu, setshowMenu] = useState(false);
  const hash = useLocation().hash;

  useEffect(() => {
    console.log("mainmenu useEfect");
  },[]);

  return (
    <div
      className={`${classes.main_menu} ${showInTop ? classes.ShowInTop : ""} ${
        showMenu ? classes.showMenu : ""
      }`}
    >
      <button
        className={classes.showMenuBtn}
        onClick={() => setshowMenu((prev) => !prev)}
      >
        {showMenu ? <MdClose /> : <MdMenu />}
      </button>
      <ul className={classes.menu} onClick={() => setshowMenu((prev) => !prev)}>
        <li className={classes.item}>
          <a href="#aboutMe" className={hash ==="#aboutMe" ? classes.active:''}>About me</a>
        </li>
        <li className={classes.item}>
          <a href="#skills" className={hash ==="#skills" ? classes.active:''}>Skills</a>
        </li>
        <li className={classes.item}>
          <a href={resume} download >Resume</a>
        </li>
        <li className={classes.item}>
          <a href="#portfilio" className={hash ==="#portfilio" ? classes.active:''}>Projects </a>
        </li>
        <li className={classes.item}>
          <a href="#home" className={hash ==="#home" || hash===''? classes.active:''}>Home</a>
        </li>


      </ul>
    </div>
  );
};

export default memo(MainMenu);
