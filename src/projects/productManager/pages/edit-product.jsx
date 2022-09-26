import { useNavigate, useParams } from "react-router-dom";
import ProductForm from "../components/ProductForm";
import { useTheme } from "../contexts/theme";
import { useProducts } from "../contexts/products";
import classes from "../styles.module.scss";

const EditProduct = () => {
  const { id: productId } = useParams();
  const { products, editProduct } = useProducts();
  const { theme } = useTheme();
  const navigate = useNavigate();
  const onSubmit = (data) => {
    editProduct(data);
    navigate("/product-manager/all-products");
  };
  console.log("editProduct");
  return (
    <div
      className={`${classes.page_wraper} ${
        theme.mode === "light" ? classes.light : classes.dark
      }`}
    >
      <div
        className={`${classes.card} ${classes.product_form} ${classes.edit_product}`}
      >
        <div className={classes.card_header}>
          ویرایش محصول <span>{products.filter((item) => item.id === productId)[0].name}</span>
        </div>
        <div className={classes.card_body}>
          <ProductForm onSubmit={onSubmit} mode="edit" />
        </div>
      </div>
    </div>
  );
};

export default EditProduct;
