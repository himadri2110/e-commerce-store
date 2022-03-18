import { createContext, useContext, useState, useReducer } from "react";
import { productReducer, initialProducts } from "../reducers/productReducer";

const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  const [productState, productDispatch] = useReducer(
    productReducer,
    initialProducts
  );

  const [showFilter, setShowFilter] = useState(false);

  const toggleFilter = () => {
    setShowFilter((showFilter) => !showFilter);
  };

  return (
    <ProductContext.Provider
      value={{ productState, productDispatch, toggleFilter, showFilter }}
    >
      {children}
    </ProductContext.Provider>
  );
};

const useProducts = () => useContext(ProductContext);

export { ProductProvider, useProducts };
