import ProductForm from "../components/ProductForm";
import classes from "../styles.module.scss";

const AddProduct = () => {

const onSubmit = (e)=>{
e.preventDefault();
}


    return ( <div className={classes.page_wraper}>



<div className={`${classes.card} ${classes.product_form} ${classes.add_product}`}>
        <div className={classes.card_header}>افزودن محصول</div>
        <div className={classes.card_body}>
          <ProductForm onSubmit={onSubmit} mode="add" />
        </div>
      </div>
        
    </div> );
}
 
export default AddProduct;