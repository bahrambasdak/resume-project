import { useEffect } from "react";
import { Navigate } from "react-router-dom";
import DashboardWidget from "../components/dashboard/DashboardWidget";
import { FaTshirt, FaCoins } from "react-icons/fa";
import { BsBasket3Fill } from "react-icons/bs";

import { useAuth_Them } from "../contexts/Auth_Them";
import classes from "../styles.module.scss";
import { useProducts } from "../contexts/products";
//import { Chart } from "react-chartjs-2";

const Dashboard = () => {
  const { user } = useAuth_Them();

  const { products } = useProducts();

  return (
    <>
      {user.loggedIn ? (
        <div
          className={`${classes.page_wraper} ${
            user.them === "light" ? classes.light : classes.dark
          }`}
        >
          <div className={classes.dashboard_widget}>
            <DashboardWidget
              title="تعداد محصولات"
              value={products.length}
              icon={<FaTshirt />}
              color="blue"
            />
            <DashboardWidget
              title="مجموع قیمت محصولات "
              value={products.reduce(
                (sum, item) => Number(item.price) + Number(sum),
                0
              )}
              icon={<FaCoins />}
              color="yellow"
            />
            <DashboardWidget
              title="تعداد سفارش ها "
              value={products.reduce(
                (sum, item) => Number(item.availability) + Number(sum),
                0
              )}
              icon={<BsBasket3Fill />}
              color="red"
            />
          </div>
          <div className={classes.dashboard_chart}>{/* <Chart /> */}</div>
        </div>
      ) : (
        <Navigate to={"/product-manager/login"} />
      )}
    </>
  );
};

export default Dashboard;
