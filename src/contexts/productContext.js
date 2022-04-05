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

const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  const [productState, productDispatch] = useReducer(
    productReducer,
    initialProducts
  );

  const [showFilter, setShowFilter] = useState(false);
  const [loading, setLoading] = useState(false);
  const [searchVal, setSearchVal] = useState("");

  const toggleFilter = () => {
    setShowFilter((showFilter) => !showFilter);
  };

  const { DISPLAY_PRODUCTS } = filterTypes;

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const { data } = await getProducts();
        setLoading(false);

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
      } catch (err) {
        setLoading(false);
        console.error(err);
      }
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
        loading,
        searchVal,
        setSearchVal,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

const useProducts = () => useContext(ProductContext);

export { ProductProvider, useProducts };
