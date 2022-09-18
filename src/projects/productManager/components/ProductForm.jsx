import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { useProducts } from "../contexts/products";
import classes from "../styles.module.scss";

const ProductForm = ({ onSubmit, mode }) => {
  const { id: productId } = useParams();
  const { products } = useProducts();
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  const setFormDefaultValue = (product) => {
    setValue("name", product.name);
    setValue("price", product.price);
    setValue("category", product.category);
    setValue("description", product.description);
  };

  useEffect(() => {
    if (mode === "edit")
      setFormDefaultValue(products.filter((item) => item.id === productId)[0]);
  });

  return (
    <div>
      <form
        onSubmit={handleSubmit((data) => onSubmit({ ...data, id: productId }))}
      >
        <div className={classes.row}>
          <div>
            <label htmlFor="name-input"> نام محصول</label>
            <input
              id="name-input"
              type="text"
              placeholder="گوشی سامسونگ"
              {...register("name", {
                required: "وارد کردن نام محصول اجباری است",
              })}
            />
            {errors.name && (
              <div className={classes.error}>{errors.name.message}</div>
            )}
          </div>
          <div>
            <label htmlFor="price-input">قیمت</label>
            <input
              id="price-input"
              type="number"
              placeholder="1000"
              {...register("price", {
                required: "وارد کردن قیمت اجباری است",
                min: {
                  value: 100,
                  message: "قیمت نباید کمتر از 100 باشد",
                },
              })}
            />
            {errors.price && (
              <div className={classes.error}>{errors.price.message}</div>
            )}
          </div>
        </div>

        <div className={classes.row}>
          <div>
            <label htmlFor="category-select">دسته بندی</label>
            <select id="category-select" {...register("category")}>
              <option>موبایل</option>
              <option>کتاب</option>
              <option>تیشرت</option>
            </select>
          </div>
          <div>
            <label htmlFor="description-input">توضیحات</label>
            <textarea
              id="description-input"
              rows="3"
              {...register("description")}
            ></textarea>
          </div>
        </div>

        <button>{mode === "edit" ? "ویرایش" : "افزودن"} محصول</button>
      </form>
    </div>
  );
};

export default ProductForm;
