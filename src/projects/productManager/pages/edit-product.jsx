import { useParams } from "react-router-dom";
import ProductForm from "../components/ProductForm";
import { useAuth_Them } from "../contexts/Auth_Them";
import { useProducts } from "../contexts/products";
import classes from "../styles.module.scss";

const EditProduct = () => {
  const { id: productId } = useParams();
  const { products, editProduct } = useProducts();
  const {user} = useAuth_Them();
  const onSubmit = (data) => {
    editProduct(data);
  };

  return (
    <div className={`${classes.page_wraper} ${user.them === 'light' ? classes.light : classes.dark}`}>
      <div
        className={`${classes.card} ${classes.product_form} ${classes.edit_product}`}
      >
        <div className={classes.card_header}>
          ویرایش محصول{products.filter((item) => item.id === productId)[0].name}
        </div>
        <div className={classes.card_body}>
          <ProductForm onSubmit={onSubmit} mode="edit" />
        </div>
      </div>
    </div>
  );
};

export default EditProduct;