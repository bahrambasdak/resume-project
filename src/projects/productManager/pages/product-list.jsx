import classes from "../styles.module.scss";
import { Link } from "react-router-dom";
import { useProducts } from "../contexts/products";
import { useState } from "react";
import RemoveModal from "../components/RemoveModal";
import { useTheme } from "../contexts/theme";


const ProductList = () => {
  const { theme } = useTheme();
  const { products, removeProduct } = useProducts();
  const [selectedProduct, setselectedProduct] = useState(null);

  const closeModal = () => {
    setselectedProduct(null);
  };
  const confirmModal = () => {
    removeProduct(selectedProduct);
    setselectedProduct(null);
  };
  console.log("productList");
  return (
    <>
      <div
        className={`${classes.page_wraper} ${
          theme.mode === "light" ? classes.light : classes.dark
        } ${selectedProduct ? classes.disable : ""}`}
      >
        <div className={`${classes.card} ${classes.product_list}`}>
          {products.length > 0 ? (
            <table>
              <thead>
                <tr>
                <th>نام محصول</th>
                <th>قیمت</th>
                <th>دسته بندی</th>
                <th>موجودی</th>
                </tr>
              </thead>
              <tbody>
                {products.map((product, index) => (
                  <tr key={index}>
                    <td>{product.name}</td>
                    <td>{product.price}</td>
                    <td>{product.category}</td>
                    <td>{product.availability}</td>
                    <td>
                      <button
                        className={classes.delete_btn}
                        onClick={() => setselectedProduct(product)}
                      >
                        حذف
                      </button>
                      <button className={classes.edit_btn}>
                        <Link
                          to={`/product-manager/products/edit/${product.id}`}
                        >
                          ویرایش
                        </Link>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            "محصولی یافت نشد!"
          )}
        </div>
      </div>
      {selectedProduct && (
        <RemoveModal
          product={selectedProduct}
          onClose={closeModal}
          onConfirm={confirmModal}
        />
      )}
    </>
  );
};

export default ProductList ;
