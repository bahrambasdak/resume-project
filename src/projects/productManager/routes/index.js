import Dashboard from "../pages/dashboard";
import Login from "../pages/Login";
import {AiFillDashboard} from "react-icons/ai";
import {MdLogin} from "react-icons/md"

 const productManagerRoutes = [
  {
    path: "login",
    name: "ورود",
    icon: <MdLogin/>,
    private: true,
    showInNav: false,
    element: Login,
  },
  {
    path: "dashboard",
    name: "داشبرد",
    icon: <AiFillDashboard/>,
    private: true,
    showInNav: true,
    element: Dashboard,
  }
];

export default productManagerRoutes;
