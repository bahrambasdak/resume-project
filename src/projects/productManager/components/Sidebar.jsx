import { Link, useLocation } from "react-router-dom";
import { useTheme } from "../contexts/theme";
import classes from "../styles.module.scss";

const Sidebar = ({ routes, showSidebar }) => {
  const location = useLocation();
  const { theme } = useTheme();
  const activeRoute = (routename) => {
    return location.pathname.indexOf(routename) > -1 ? "selected" : "";
  };
  return (
    <aside
      className={`${classes.sidebar} ${
        theme.mode === "dark" ? classes.dark : classes.light
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
                  <div>
                    {route.icon}
                    <span className={classes.sidebar_name}>{route.name}</span>
                  </div>
                </Link>
              </li>
            ))}
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
