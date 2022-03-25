import { createContext, useContext, useState, useEffect } from "react";
import { useAuth } from "./authContext";
import axios from "axios";
import { addToCart, removeFromCart, updateQty } from "../services/cartServices";
import { addToWishlist } from "../services/wishlistServices/addToWishlist";
import { useWishlist } from "./wishlistContext";

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const { wishlist, setWishlist } = useWishlist();
  const { token, isAuth, navigate } = useAuth();

  useEffect(() => {
    if (isAuth) {
      try {
        (async () => {
          const { data, status } = await axios.get("/api/user/cart", {
            headers: { authorization: token },
          });

          if (status === 200) {
            setCart(data.cart);
          }
        })();
      } catch (err) {
        console.error(err);
      }
    }
  }, [isAuth]);

  const addToCartHandler = async (product) => {
    if (isAuth) {
      const { data, status } = await addToCart(product, token);

      if (status === 201) {
        setCart(() => [...data.cart]);
      }
    } else {
      navigate("/login");
    }
  };

  const removeFromCartHandler = async (product) => {
    const { data, status } = await removeFromCart(product._id, token);

    if (status === 200) {
      setCart(() => [...data.cart]);
    }
  };

  const updateQtyHandler = async (product, type) => {
    if (type === "decrement" && product.qty === 1) {
      removeFromCartHandler(product);
    } else {
      const { data, status } = await updateQty(product._id, token, type);

      if (status === 200) {
        setCart(() => [...data.cart]);
      }
    }
  };

  const moveToWishlistHandler = async (product) => {
    removeFromCartHandler(product);

    const itemExists = wishlist.find((item) => item._id === product._id);

    if (!itemExists) {
      const { data, status } = await addToWishlist(product, token);

      if (status === 201) {
        setWishlist(() => [...data.wishlist]);
      }
    }
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCartHandler,
        removeFromCartHandler,
        updateQtyHandler,
        moveToWishlistHandler,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

const useCart = () => useContext(CartContext);

export { CartProvider, useCart };
