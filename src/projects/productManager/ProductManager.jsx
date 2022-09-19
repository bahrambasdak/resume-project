import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

import classes from "./styles.module.scss";
import { Auth_ThemProvider } from "./contexts/Auth_Them";
import productManagerRoutes from "./routes";
import { useEffect } from "react";
import ProductProvider from "./contexts/products";
import { useState } from "react";

const ProductManager = () => {
  //console.log(productManagerRoutes);
  const [showSidebar , setShowSidebar] = useState(false);
  const showMenu=()=>{
    setShowSidebar((prev)=>!prev);
  }
  return (
    <div className={classes.product_manager}>
      <Auth_ThemProvider>
        <Header showMenu={showMenu} showSidebar={showSidebar}/>

        <Sidebar showSidebar ={showSidebar} showMenu ={showMenu} routes={productManagerRoutes} />

        <ProductProvider>
          <Outlet />
        </ProductProvider>
      </Auth_ThemProvider>
    </div>
  );
};

export default ProductManager;
