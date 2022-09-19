import classes from "../styles.module.scss";
import { Link } from "react-router-dom";
import { useProducts } from "../contexts/products";
import { useState } from "react";
import RemoveModal from "../components/RemoveModal";
import { useAuth_Them } from "../contexts/Auth_Them";
import { Navigate } from "react-router-dom";

const ProductList = () => {
  const { user } = useAuth_Them();
  const { products, removeProduct } = useProducts();
  const [selectedProduct, setselectedProduct] = useState(null);

  const closeModal = () => {
    setselectedProduct(null);
  };
  const confirmModal = () => {
    removeProduct(selectedProduct);
    setselectedProduct(null);
  };

  return (
    <>
      {user.loggedIn ? (
        <div
          className={`${classes.page_wraper} ${
            user.them === "light" ? classes.light : classes.dark
          }`}
        >
          <div className={`${classes.card} ${classes.product_list}`}>
            <table>
              <thead>
                <th>نام محصول</th>
                <th>قیمت</th>
                <th>دسته بندی</th>
                <th>موجودی</th>
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
          </div>
        </div>
      ) : (
        <Navigate to={"/product-manager/login"} />
      )}

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

export default ProductList;
