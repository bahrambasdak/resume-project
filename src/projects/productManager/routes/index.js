import Dashboard from "../pages/dashboard";
import Login from "../pages/Login";
import { AiFillDashboard } from "react-icons/ai";

import { MdLogin } from "react-icons/md";
import { RiAddFill } from "react-icons/ri";
import { TiThSmallOutline } from "react-icons/ti";
import { AiTwotonePhone } from "react-icons/ai";
import AddProduct from "../pages/add-product";
import ContactUs from "../pages/contact-us";
import ProductList from "../pages/product-list";
import EditProduct from "../pages/edit-product";


const productManagerRoutes = [
  {
    path: "dashboard",
    name: "داشبورد",
    icon: <AiFillDashboard />,
    private: true,
    showInNav: true,
    element: <Dashboard />,
  },
  {
    path: "all-products",
    name: "همه محصولات",
    icon: <TiThSmallOutline />,
    private: true,
    showInNav: true,
    element: <ProductList />,
  },
  {
    path: "add-products",
    name: "افزودن محصول ",
    icon: <RiAddFill />,
    private: true,
    showInNav: true,
    element: <AddProduct />,
  },
  {
    path: "products/edit/:id",
    name: "ویرایش محصولات",
    element: <EditProduct />,
    showInNav: false,
    private: true,
  },
  {
    path: "contact-us",
    name: "ارتباط با ما",
    icon: <AiTwotonePhone />,
    private: false,
    showInNav: true,
    element: <ContactUs />,
  },
  {
    path: "login",
    name: "ورود",
    icon: <MdLogin />,
    showInNav: false,
    element: <Login />,
  },

  { path: "/product-manager", pathTo: "/product-manager/dashboard", name: "Dashboard", redirect: true },

];

export default productManagerRoutes;
