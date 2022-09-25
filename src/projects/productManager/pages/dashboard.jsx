import DashboardWidget from "../components/dashboard/DashboardWidget";
import { FaTshirt, FaCoins } from "react-icons/fa";
import { BsBasket3Fill } from "react-icons/bs";


import { useTheme } from "../contexts/theme";
import classes from "../styles.module.scss";
import { useProducts } from "../contexts/products";
import { useEffect } from "react";

//import MyChart from "../components/dashboard/Chart";

const Dashboard = () => {
  const { theme } = useTheme();
useEffect(()=>{
  const fetchPrice = async ()=>{
    const res = await fetch("https://api.coincap.io/v2/assets/?limit=5");
    const data = await res.json();
    console.log(data);
  }
  fetchPrice();
},[])


  const { products } = useProducts();
  console.log("dashboard");
  return (
    <div
      className={`${classes.page_wraper} ${classes.dashboard_page} ${
        theme.mode === "light" ? classes.light : classes.dark
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
      {/* <div className={classes.dashboard_chart}><MyChart/></div> */}
      
    </div>
  );
};

export default Dashboard;
