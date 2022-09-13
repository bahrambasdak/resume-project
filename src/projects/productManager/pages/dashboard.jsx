import { useEffect } from "react";
import { Navigate } from "react-router-dom";

import { useAuth } from "../contexts/Auth";
import classes from "../styles.module.scss";

const Dashboard = () => {
  const { user } = useAuth();
  console.log(user.loggedIn);
  useEffect(() => {
    console.log("dashboard");
    console.log(user);
  });


  return <>
   {user.loggedIn ? (
    <div className={classes.page_wraper}>dashboard</div>
  ) : (
    <Navigate to={"/product-manager/login"} />
  )}
  </>
};

export default Dashboard;
