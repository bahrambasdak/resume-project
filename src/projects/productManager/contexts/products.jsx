import { useState } from "react";
import { useContext } from "react";
import { createContext } from "react";

const productContext = createContext(undefined);

const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([
    {
      id: "1",
      name: "A51",
      price: 6_500_000,
      category: "موبایل",
      availability: 14,
    },
    {
      id: "2",
      name: "قلعه حیوانات",
      price: 50_000,
      category: "کتاب",
      availability: 57,
    },
    {
      id: "3",
      name: "NIKE",
      price: 100_000,
      category: "تیشرت",
      availability: 21,
    },
    {
      id: "4",
      name: "NOKIA",
      price: 7_500_000,
      category: "موبایل",
      availability: 33,
    },
    {
      id: "5",
      name: "A70",
      price: 3_500_000,
      category: "موبایل",
      availability: 62,
    },
    {
      id: "6",
      name: "A50",
      price: 1_500_000,
      category: "موبایل",
      availability: 25,
    },
    {
      id: "7",
      name: "اثر مرکب",
      price: 50_000,
      category: "کتاب",
      availability: 25,
    },
  ]);

  const editProduct = (editedproduct) => {
    setProducts(
      products.map((product) =>
        product.id === editedproduct.id ? editedproduct : product
      )
    );
  };

  const addProduct = (product) => {
    setProducts([...products, product]);
  };

  const removeProduct = (product) => {
    setProducts(products.filter((item) => item.id !== product.id));
  };
  const value = {
    products: products,
    editProduct: editProduct,
    addProduct: addProduct,
    removeProduct: removeProduct,
  };
  return (
    <productContext.Provider value={value}>{children}</productContext.Provider>
  );
};

const useProducts = () => {
  const context = useContext(productContext);
  if (context === undefined)
    throw new Error("useProducts must be with in ProductProvider");
  return context;
};
export { useProducts };
export default ProductProvider;
