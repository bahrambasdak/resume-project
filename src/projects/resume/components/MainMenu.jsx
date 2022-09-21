import { memo, useEffect, useState } from "react";
import classes from "../styles.module.scss";
import { MdMenu, MdClose } from "react-icons/md";

const MainMenu = ({ showInTop }) => {
  console.log("mainmenu render");
  const [showMenu, setshowMenu] = useState(false);

  useEffect(() => {
    console.log("mainmenu useEfect");
  });

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
          <a href="#aboutMe">درباره من</a>
        </li>
        <li className={classes.item}>
          <a href="#skills">مهارت ها</a>
        </li>
        <li className={classes.item}>
          <a href="#aboutMe">رزومه</a>
        </li>
        <li className={classes.item}>
          <a href="#portfilio">نمونه کارها</a>
        </li>
        <li className={classes.item}>
          <a href="#home">خانه</a>
        </li>
      </ul>
    </div>
  );
};

export default memo(MainMenu);
