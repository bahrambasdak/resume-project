import ProductForm from "../components/ProductForm";
import classes from "../styles.module.scss";

const EditProduct = () => {
  return (
    <div className={classes.page_wraper}>

      <div className={`${classes.card} ${classes.product_form}`}>
        <div className={classes.card_header}>header</div>
        <div className={classes.card_body}>
          <ProductForm onsubmit={onsubmit} mode="edit" />
        </div>
      </div>
    </div>
  );
};

export default EditProduct;
