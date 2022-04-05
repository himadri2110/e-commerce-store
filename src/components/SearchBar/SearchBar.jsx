import { useProducts } from "../../contexts/productContext";
import { useLocation } from "react-router-dom";
import { useAuth } from "../../contexts/authContext";

const SearchBar = () => {
  const {
    searchVal,
    setSearchVal,
    productDispatch,
    productState,
    filterTypes: { CLEAR_FILTERS },
  } = useProducts();
  const { navigate } = useAuth();

  const location = useLocation();

  const navigateToProducts = () => {
    if (searchVal.trim() !== "" && location.pathname !== "/products") {
      navigate("/products");
    }
  };

  return (
    <input
      type="text"
      placeholder="Search"
      value={searchVal}
      onChange={(e) => {
        productDispatch({
          type: CLEAR_FILTERS,
          payload: { data: productState.products },
        });
        setSearchVal(e.target.value);
      }}
      onKeyUp={navigateToProducts}
    />
  );
};

export { SearchBar };
