import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

import classes from "./styles.module.scss";
import { AuthThemProvider } from "./contexts/Auth_Them";
import productManagerRoutes from "./routes";

import ProductProvider from "./contexts/products";
import { useState } from "react";

const ProductManager = () => {

  const [showSidebar , setShowSidebar] = useState(false);

  return (
    <div className={classes.product_manager} onClick={()=>setShowSidebar(false)}>
      <AuthThemProvider>
        <Header setShowSidebar={setShowSidebar} showSidebar={showSidebar}/>

        <Sidebar showSidebar ={showSidebar} routes={productManagerRoutes} />

        <ProductProvider>
          <Outlet  />
        </ProductProvider>
      </AuthThemProvider>
    </div>
  );
};

export default ProductManager;
