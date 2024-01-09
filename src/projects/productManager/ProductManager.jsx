import { Outlet, useNavigate, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import classes from "./styles.module.scss";
import { AuthProvider } from "./contexts/Auth";
import { ThemeProvider } from "./contexts/theme";
import productManagerRoutes from "./routes";

import ProductProvider from "./contexts/products";
import { useEffect, useState } from "react";

const ProductManager = () => {
  const location = useLocation();
  const [showSidebar, setShowSidebar] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    navigate("dashboard");
  }, []);

  return (
    <div
      className={classes.product_manager}
      onClick={() => setShowSidebar(false)}
    >
      <AuthProvider>
        <ThemeProvider>
        <Header setShowSidebar={setShowSidebar} showSidebar={showSidebar} />

        <Sidebar showSidebar={showSidebar} routes={productManagerRoutes} />

        <ProductProvider>
          <TransitionGroup component={null}>
            <CSSTransition key={location.key} classNames="fade" timeout={300}>
              <Outlet />
            </CSSTransition>
          </TransitionGroup>
        </ProductProvider>
        </ThemeProvider>
      </AuthProvider>
    </div>
  );
};

export default ProductManager;
