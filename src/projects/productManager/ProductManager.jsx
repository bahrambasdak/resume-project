import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

import classes from "./styles.module.scss";
import { AuthProvider } from "./contexts/Auth";
import productManagerRoutes from "./routes";
import { useEffect } from "react";
import ProductProvider from "./contexts/products";

const ProductManager = () => {
  console.log(productManagerRoutes);
  return (
    <div className={classes.product_manager}>
      <Header />

      <Sidebar routes={productManagerRoutes} />

      <AuthProvider>
        <ProductProvider>
          <Outlet />
        </ProductProvider>
      </AuthProvider>
    </div>
  );
};

export default ProductManager;
