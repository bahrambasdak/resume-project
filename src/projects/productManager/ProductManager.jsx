import { Outlet, Route, Routes, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Login from './pages/Login';
import classes from './styles.module.scss';
import { AuthProvider } from './contexts/Auth';

const ProductManager = () => {


    return ( <div className={classes.product_manager}>

<Header />

<Sidebar/>
<AuthProvider>
  
<Outlet /> 

</AuthProvider>  
    </div> );
}
 
export default ProductManager;