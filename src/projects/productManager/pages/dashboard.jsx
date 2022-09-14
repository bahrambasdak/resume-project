import { useEffect } from "react";
import { Navigate } from "react-router-dom";
import DashboardWidget from "../components/dashboard/DashboardWidget";
import { FaTshirt, FaCoins } from "react-icons/fa";
import { BsBasket3Fill } from "react-icons/bs";

import { useAuth } from "../contexts/Auth";
import classes from "../styles.module.scss";
import { Chart } from "react-chartjs-2";

const Dashboard = () => {
  const { user } = useAuth();
  console.log(user.loggedIn);
  useEffect(() => {
    console.log("dashboard");
    console.log(user);
  });

  return (
    <>
      {user.loggedIn ? (
        <div className={classes.page_wraper}>
          <div className={classes.dashboard_widget}>
            <DashboardWidget
              title="تعداد محصولات"
              value={5}
              icon={<FaTshirt />}
              color="blue"
            />
            <DashboardWidget
              title="تعداد محصولات"
              value={5}
              icon={<FaCoins />}
              color="yellow"
            />
            <DashboardWidget
              title="تعداد محصولات"
              value={5}
              icon={<BsBasket3Fill />}
              color="red"
            />
          </div>
          <div className={classes.dashboard_chart}>
            {/* <Chart /> */}
          </div>
        </div>
      ) : (
        <Navigate to={"/product-manager/login"} />
      )}
    </>
  );
};

export default Dashboard;
