import { Link, useLocation } from "react-router-dom";
import classes from "../styles.module.scss";

const Sidebar = ({ routes }) => {
  const location = useLocation();

  const activeRoute = (routename) => {
    return location.pathname.indexOf(routename) > -1 ? "selected" : "";
  };
  return (
    <aside
      className={classes.sidebar}
      style={{
        color: "white",
        backgroundImage:
          "linear-gradient( 109.6deg,  #4183c4 11.2%, rgba(121,137,212,1) 91.2% )",
      }}
    >
      <div className={classes.sidebar_nav}>
        <ul>
          {routes.map((route, index) => {
            return (
              <li
                key={index}
                className={`${classes.sidebar_item} ${
                  classes[activeRoute(route.path)]
                }`}
              >
                <Link to={route.path} className={classes.sidebar_link}>
                    {route.icon}
                  <span className={classes.sidebar_name}>{route.name}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
