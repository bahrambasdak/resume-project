import { Link, useLocation } from "react-router-dom";
import { useAuthThem } from "../contexts/Auth_Them";
import classes from "../styles.module.scss";
import { MdLogout } from "react-icons/md";

const Sidebar = ({ routes, showSidebar }) => {
  const location = useLocation();
  const { user } = useAuthThem();
  const activeRoute = (routename) => {
    return location.pathname.indexOf(routename) > -1 ? "selected" : "";
  };
  return (
    <aside
      className={`${classes.sidebar} ${
        user.them === "dark" ? classes.dark : classes.light
      } ${showSidebar ? classes.show : classes.hide}`}
    >
      <div className={classes.sidebar_nav}>
        <ul>
          {routes
            .filter((route) => route.showInNav)
            .map((route, index) => (
              <li
                key={index}
                className={`${classes.sidebar_item} ${
                  classes[activeRoute(route.path)]
                }`}
              >
                <Link to={route.path} className={classes.sidebar_link}>
                  {route.path === "login" && user.loggedIn ? (
                    <div>
                      <MdLogout />
                      <span className={classes.sidebar_name}>خروج</span>
                    </div>
                  ) : (
                    <div>
                      {route.icon}
                      <span className={classes.sidebar_name}>{route.name}</span>
                    </div>
                  )}
                </Link>
              </li>
            ))}
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
