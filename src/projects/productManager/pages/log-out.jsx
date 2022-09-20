import { Navigate } from "react-router-dom";
import { useAuthThem } from "../contexts/Auth_Them";
import classes from "../styles.module.scss";

const LogOut = () => {
  const { user, toggleAuth } = useAuthThem();
  if(user.loggedIn)toggleAuth(); 
  
  return (
    <div className={classes.page_wraper}>
      <Navigate to="/product-manager/login" />
    </div>
  );
};

export default LogOut;
