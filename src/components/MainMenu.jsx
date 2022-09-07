import { memo, useEffect, useState } from "react";

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
 
  
  const handleScroll = (activebutton, scroll) => {
   
    window.scrollTo(0, scroll);
    //setStyles({...styles,[activebutton]:{color:'red'}});

   
  };

  useEffect(() => {
    console.log("mainmenu useEfect");
  });

  return (
    <div className={`main-menu ${showInTop ? "ShowInTop" : ""}`}>
      <ul className="menu">
        <li
         
          onClick={() => handleScroll("aboutMe", screenHeight - 150)}
          className="item"
        >
          درباره من
        </li>
        <li
          
          className="item"
          onClick={() => handleScroll("skills", screenHeight * 2 - 150)}
        >
          مهارت ها
        </li>
        <li className="item">
          رزومه
        </li>
        <li
       
          className="item"
          onClick={() => handleScroll("works", screenHeight * 3 - 400)}
        >
          نمونه کارها
        </li>
        <li
          
          className="item"
          onClick={() => handleScroll("home", 0)}
        >
          خانه
        </li>
      </ul>
    </div>
  );
};

export default memo(MainMenu);
