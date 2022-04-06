import { filterTypes } from "../constants/filterTypes";

const initialProducts = {
  products: [],
  brand: [],
  category: [],
  sortBy: null,
  rating: null,
  inStock: false,
  fastDelivery: false,
  priceRange: 1500,
  categories: {
    men: false,
    women: false,
    kids: false,
  },
};

const {
  DISPLAY_PRODUCTS,
  BRAND,
  CATEGORY,
  SORT_BY,
  IN_STOCK,
  FAST_DELIVERY,
  RATING,
  PRICE_RANGE,
  CLEAR_FILTERS,
} = filterTypes;

const productReducer = (state, { type, payload }) => {
  switch (type) {
    case DISPLAY_PRODUCTS:
      return { ...state, products: payload.data };
    case BRAND:
      if (state.brand.includes(payload.value))
        return {
          ...state,
          brand: [...state.brand].filter((brand) => brand !== payload.value),
        };
      return { ...state, brand: [...state.brand, payload.value] };
    case CATEGORY:
      if (state.category.includes(payload.value))
        return {
          ...state,
          category: [...state.category].filter(
            (category) => category !== payload.value
          ),
        };
      return { ...state, category: [...state.category, payload.value] };
    case SORT_BY:
      return { ...state, sortBy: payload.value };
    case IN_STOCK:
      return { ...state, inStock: payload.checked };
    case FAST_DELIVERY:
      return { ...state, fastDelivery: payload.checked };
    case RATING:
      return { ...state, rating: payload.rating };
    case PRICE_RANGE:
      return { ...state, priceRange: payload.value };
    case CLEAR_FILTERS:
      return {
        ...initialProducts,
        products: payload.data,
      };
    default:
      return state;
  }
};

export { productReducer, initialProducts };
