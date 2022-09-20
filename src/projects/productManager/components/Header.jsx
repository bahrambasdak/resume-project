import classes from "../styles.module.scss";
import { MdDarkMode, MdOutlineLightMode } from "react-icons/md";
import { useAuthThem } from "../contexts/Auth_Them";
import profile from "../img/profile.jpg";
import defaultProfile from "../img/defaultprofile.jpg";
import { MdMenu, MdClose } from "react-icons/md";

const Header = ({ setShowSidebar, showSidebar }) => {
  const { user, toggleThem } = useAuthThem();

  return (
    <div
      className={`${classes.main_header} ${
        user.them === "dark" ? classes.dark : classes.light
      }`}
    >
      <div
        className={classes.menu_icon}
        onClick={(e) => {
          e.stopPropagation();
          setShowSidebar(true);
        }}
      >
        {showSidebar ? <MdClose /> : <MdMenu />}
      </div>
      <button className={classes.themBtn} onClick={toggleThem}>
        {user.them === "light" ? <MdDarkMode /> : <MdOutlineLightMode />}
      </button>
      <div className={classes.profile}>
        <img src={user.loggedIn ? profile : defaultProfile} alt="profile" />
      </div>
    </div>
  );
};

export default Header;
