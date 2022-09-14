import { useParams } from 'react-router-dom';
import classes from '../styles.module.scss';

const ProductForm = () => {

    const {id} = useParams(); 
    return ( <div>{id}</div> );
}
 
export default ProductForm;