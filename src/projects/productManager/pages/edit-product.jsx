import { useParams } from "react-router-dom";
import ProductForm from "../components/ProductForm";
import { useProducts } from "../contexts/products";
import classes from "../styles.module.scss";

const EditProduct = () => {
const {id:productId} = useParams();
const {products , editProducts} = useProducts();
const onSubmit = (data)=>{
  //e.preventDefault();
  console.log(data);
  editProducts(data);


  }


  return (
    <div className={classes.page_wraper}>

      <div className={`${classes.card} ${classes.product_form} ${classes.edit_product}`}>
        <div className={classes.card_header}>ویرایش محصول{productId}</div>
        <div className={classes.card_body}>
          <ProductForm onSubmit={onSubmit} mode="edit" />
        </div>
      </div>
    </div>
  );
};

export default EditProduct;
