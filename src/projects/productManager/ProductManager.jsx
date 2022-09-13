import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import Sidebar from './components/Sidebar';

import classes from './styles.module.scss';
import { AuthProvider } from './contexts/Auth';
import productManagerRoutes from './routes';

const ProductManager = () => {

console.log(productManagerRoutes);
    return ( <div className={classes.product_manager}>

<Header />

<Sidebar routes={productManagerRoutes}/>

<AuthProvider> 
<Outlet /> 

</AuthProvider>  
    </div> );
}
 
export default ProductManager;