import classes from "../styles.module.scss";
import { Link } from "react-router-dom";

const products = [
  {
    id: 1,
    name: "A51",
    price: 6_500_000,
    category: "موبایل",
    availability: 14,
  },
  {
    id: 2,
    name: "A52",
    price: 5_500_000,
    category: "موبایل",
    availability: 57,
  },
  {
    id: 3,
    name: "A53",
    price: 4_500_000,
    category: "موبایل",
    availability: 21,
  },
  {
    id: 4,
    name: "A54",
    price: 7_500_000,
    category: "موبایل",
    availability: 33,
  },
  {
    id: 5,
    name: "A55",
    price: 3_500_000,
    category: "موبایل",
    availability: 62,
  },
  {
    id: 6,
    name: "A56",
    price: 1_500_000,
    category: "موبایل",
    availability: 25,
  },
];
const ProductList = () => {
  return (
    <div className={classes.page_wraper}>
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
                  <button className={classes.delete_btn}>
                  حذف
                  </button>
                  <button className={classes.edit_btn}>
                    <Link to={`/product-manager/products/edit/${product.id}`}>
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
  );
};

export default ProductList;
