import { useContext } from "react";
import { createContext } from "react";

const productContext = createContext(undefined);

const ProductProvider = ({ children }) => {
  const [products, setProducts] = [
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

  const editProducts = (editedproduct) => {
    setProducts((products) =>
      products.map((product) =>
        product.id === editedproduct.id ? editedproduct : product
      )
    );
  };

  const value = { products, editProducts: editProducts };
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
