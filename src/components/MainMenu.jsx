import { memo, useEffect, useState } from "react";

const MainMenu = ({ showInTop }) => {
  console.log("mainmenu render");

  const linkToAboutMePage = (scroll) => {
    window.scrollTo(0, scroll);
  };
  useEffect(() => {
    console.log("mainmenu useEfect");
  });

  return (
    <div className={`main-menu ${showInTop ? "ShowInTop" : ""}`}>
      <ul className="menu">
        <li onClick={() => linkToAboutMePage(500)} className="item">
          درباره من
        </li>
        <li className="item">مهارت ها</li>
        <li className="item">رزومه</li>
        <li className="item">نمونه کارها</li>
        <li className="item">خانه</li>
      </ul>
    </div>
  );
};

export default memo(MainMenu);
