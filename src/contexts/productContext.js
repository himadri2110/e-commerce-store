import {
  createContext,
  useContext,
  useState,
  useEffect,
  useReducer,
} from "react";
import { productReducer, initialProducts } from "../reducers/productReducer";
import { filterTypes } from "../constants/filterTypes";
import { getProducts } from "../services/productServices/getProducts";
import axios from "axios";

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

  const { DISPLAY_PRODUCTS } = filterTypes;

  useEffect(() => {
    (async () => {
      const { data } = await getProducts();

      data.products = data.products.map((product) => ({
        ...product,
        discountedPrice: (
          product.price -
          (product.price * product.discount) / 100
        ).toFixed(0),
      }));

      productDispatch({
        type: DISPLAY_PRODUCTS,
        payload: { data: data.products },
      });
    })();
  }, []);

  return (
    <ProductContext.Provider
      value={{
        productState,
        productDispatch,
        filterTypes,
        toggleFilter,
        showFilter,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

const useProducts = () => useContext(ProductContext);

export { ProductProvider, useProducts };
