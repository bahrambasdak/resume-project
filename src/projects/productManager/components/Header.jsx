import classes from "../styles.module.scss";
import { MdDarkMode, MdOutlineLightMode } from "react-icons/md";
import { useTheme } from "../contexts/theme";
import profile from "../img/profile.jpg";
import defaultProfile from "../img/defaultprofile.jpg";
import { MdMenu, MdClose } from "react-icons/md";
import { useAuth } from "../contexts/Auth";

const Header = ({ setShowSidebar, showSidebar }) => {
  const { theme, toggleThemeMode } = useTheme();
  const {user} = useAuth();
  return (
    <div
      className={`${classes.main_header} ${
        theme.mode === "dark" ? classes.dark : classes.light
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
      <button className={classes.themBtn} onClick={toggleThemeMode}>
        {theme.mode === "light" ? <MdDarkMode /> : <MdOutlineLightMode />}
      </button>
      <div className={classes.profile}>
        {user.email && <div>{user.email}</div>}
        <img src={user.loggedIn ? profile : defaultProfile} alt="profile" />
      </div>
    </div>
  );
};

export default Header;
