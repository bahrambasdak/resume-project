import { memo, useEffect, useState } from "react";
import classes from '../styles.module.scss';

const MainMenu = ({ showInTop }) => {
  console.log("mainmenu render");
  const screenHeight = window.screen.height;
  // const [styles , setStyles] = useState({
  //   aboutMe: { color: "white" },
  //   skills: { color: "white" },
  //   works: { color: "white" },
  //   resume: { color: "white" },
  //   home: { color: "white" },
  // });

  // const handleScroll = (activebutton, scroll) => {
  //   window.scrollTo(0, scroll);
  //   //setStyles({...styles,[activebutton]:{color:'red'}});
  // };

  useEffect(() => {
    console.log("mainmenu useEfect");
  });

  return (
    <div className={`${classes.main_menu} ${showInTop ? classes.ShowInTop : ""}`}>
      <ul className={classes.menu}>
        <li
        
          className={classes.item}
        >
          <a href="#aboutMe">درباره من</a>
        </li>
        <li
          className={classes.item}
        ><a href="#skills">مهارت ها</a>
        </li>
        <li className={classes.item}><a href="#aboutMe">رزومه</a></li>
        <li
          className={classes.item}
         
        ><a href="#portfilio">نمونه کارها</a>
          
        </li>
        <li className={classes.item}>
        <a href="#home">خانه</a>
        </li>
      </ul>
    </div>
  );
};

export default memo(MainMenu);
