import ProductForm from "../components/ProductForm";
import { useProducts } from "../contexts/products";
import classes from "../styles.module.scss";

import { v4 as uuidv4 } from "uuid";
import { useAuthThem } from "../contexts/Auth_Them";
import { Navigate } from "react-router-dom";

const AddProduct = () => {
  const { addProduct } = useProducts();
  const { user } = useAuthThem();

  const onSubmit = (data) => {
    addProduct({ ...data, id: uuidv4() });
  };

  return (
    <>
      {user.loggedIn ? (
        <div
          className={`${classes.page_wraper} ${
            user.them === "light" ? classes.light : classes.dark
          }`}
        >
          <div
            className={`${classes.card} ${classes.product_form} ${classes.add_product}`}
          >
            <div className={classes.card_header}>افزودن محصول</div>
            <div className={classes.card_body}>
              <ProductForm onSubmit={onSubmit} mode="add" />
            </div>
          </div>
        </div>
      ) : (
        <Navigate to={"/product-manager/login"} />
      )}
    </>
  );
};

export default AddProduct;
