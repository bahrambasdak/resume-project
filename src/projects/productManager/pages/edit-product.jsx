import { useParams } from "react-router-dom";
import ProductForm from "../components/ProductForm";
import classes from "../styles.module.scss";

const EditProduct = () => {
const {id:productId} = useParams();

const onSubmit = (e)=>{
  e.preventDefault();
  }


  return (
    <div className={classes.page_wraper}>

      <div className={`${classes.card} ${classes.product_form}`}>
        <div className={classes.card_header}>ویرایش محصول{productId}</div>
        <div className={classes.card_body}>
          <ProductForm onSubmit={onSubmit} mode="edit" />
        </div>
      </div>
    </div>
  );
};

export default EditProduct;
