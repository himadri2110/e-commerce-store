import {
  createContext,
  useContext,
  useState,
  useReducer,
  useEffect,
} from "react";
import { useAuth } from "./authContext";
import {
  getCartItems,
  addToCart,
  removeFromCart,
  updateQty,
} from "../services/cartServices";
import { addToWishlist } from "../services/wishlistServices/addToWishlist";
import { useWishlist } from "./wishlistContext";
import { cartReducer } from "../reducers/cartReducer";
import { toast } from "react-hot-toast";

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cartState, cartDispatch] = useReducer(cartReducer, []);
  const { wishlistState, wishlistDispatch } = useWishlist();
  const { token, isAuth, navigate } = useAuth();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (isAuth) {
      try {
        (async () => {
          const { data, status } = await getCartItems(token);

          if (status === 200) {
            cartDispatch({ type: "SET_CART_DATA", payload: data.cart });
          }
        })();
      } catch (err) {
        console.error(err);
      }
    }
  }, [isAuth]);

  const addToCartHandler = async (product) => {
    if (isAuth) {
      setLoading(true);
      const { data, status } = await addToCart(product, token);
      setLoading(false);

      if (status === 201) {
        toast.success("Product added to Cart!");
        cartDispatch({ type: "SET_CART_DATA", payload: data.cart });
      }
    } else {
      navigate("/login");
    }
  };

  const removeFromCartHandler = async (product) => {
    setLoading(true);
    const { data, status } = await removeFromCart(product._id, token);
    setLoading(false);

    if (status === 200) {
      toast.success("Product removed from Cart!");
      cartDispatch({ type: "SET_CART_DATA", payload: data.cart });
    }
  };

  const updateQtyHandler = async (product, type) => {
    if (type === "decrement" && product.qty === 1) {
      removeFromCartHandler(product);
    } else {
      setLoading(true);
      const { data, status } = await updateQty(product._id, token, type);
      setLoading(false);

      if (status === 200) {
        toast.success("Updated product quantity!");
        cartDispatch({ type: "SET_CART_DATA", payload: data.cart });
      }
    }
  };

  const moveToWishlistHandler = async (product) => {
    removeFromCartHandler(product);

    const itemExists = wishlistState.find((item) => item._id === product._id);

    if (!itemExists) {
      setLoading(true);
      const { data, status } = await addToWishlist(product, token);
      setLoading(false);

      if (status === 201) {
        toast.success("Product moved to Wishlist!");
        wishlistDispatch({
          type: "SET_WISHLIST_DATA",
          payload: data.wishlist,
        });
      }
    }
  };

  return (
    <CartContext.Provider
      value={{
        cartState,
        addToCartHandler,
        removeFromCartHandler,
        updateQtyHandler,
        moveToWishlistHandler,
        loading,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

const useCart = () => useContext(CartContext);

export { CartProvider, useCart };
