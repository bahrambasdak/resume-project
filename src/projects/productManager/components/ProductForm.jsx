import { useParams } from "react-router-dom";
import classes from "../styles.module.scss";

const ProductForm = ({ onSubmit, mode }) => {
  const { id } = useParams();
  return (
    <div >
      {id}
      <form >
        <label htmlFor="name-input"> نام محصول</label>
        <input id="name-input" type="text" />

        <label htmlFor="price-input">قیمت</label>
        <input id="price-input" type="number" />

        <label htmlFor="category-select">دسته بندی</label>
        <select id="category-select">
          <option>موبایل</option>
          <option>کتاب</option>
          <option>موبایل</option>
        </select>

        <label htmlFor="description-input">توضیحات</label>
        <textarea id="description-input" rows="3"></textarea>
        
        <button>{mode === "edit" ? "ویرایش" : "افزودن"} محصول</button>
      </form>
    </div>
  );
};

export default ProductForm;
