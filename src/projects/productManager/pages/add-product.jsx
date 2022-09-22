import ProductForm from "../components/ProductForm";
import { useProducts } from "../contexts/products";
import classes from "../styles.module.scss";

import { v4 as uuidv4 } from "uuid";
import { useTheme } from "../contexts/theme";
import { memo } from "react";

const AddProduct = () => {
  const { addProduct } = useProducts();
  const { theme } = useTheme();

  const onSubmit = (data) => {
    addProduct({ ...data, id: uuidv4() });
  };
  console.log("addProduct");
  return (
    <div
      className={`${classes.page_wraper} ${
        theme.mode === "light" ? classes.light : classes.dark
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
  );
};

export default AddProduct;
