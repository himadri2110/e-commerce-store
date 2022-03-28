import { createContext, useContext, useReducer, useEffect } from "react";
import axios from "axios";
import { useAuth } from "./authContext";
import { removeFromWishlist } from "../services/wishlistServices/removeFromWishlist";
import { addToWishlist } from "../services/wishlistServices/addToWishlist";
import { wishlistReducer } from "../reducers/wishlistReducer";

const WishlistContext = createContext();

const WishlistProvider = ({ children }) => {
  const { token, isAuth, navigate } = useAuth();
  const [wishlistState, wishlistDispatch] = useReducer(wishlistReducer, []);

  useEffect(() => {
    if (isAuth) {
      try {
        (async () => {
          const { data, status } = await axios.get("/api/user/wishlist", {
            headers: { authorization: token },
          });

          if (status === 200) {
            wishlistDispatch({
              type: "SET_WISHLIST_DATA",
              payload: data.wishlist,
            });
          }
        })();
      } catch (err) {
        console.error(err);
      }
    }
  }, [isAuth]);

  const toggleWishlist = async (product) => {
    if (isAuth) {
      const itemExists = wishlistState.find((item) => item._id === product._id);

      if (itemExists) {
        const { data, status } = await removeFromWishlist(product._id, token);

        if (status === 200) {
          wishlistDispatch({
            type: "SET_WISHLIST_DATA",
            payload: data.wishlist,
          });
        }
      } else {
        const { data, status } = await addToWishlist(product, token);

        if (status === 201) {
          wishlistDispatch({
            type: "SET_WISHLIST_DATA",
            payload: data.wishlist,
          });
        }
      }
    } else {
      navigate("/login");
    }
  };

  return (
    <WishlistContext.Provider
      value={{ wishlistState, wishlistDispatch, toggleWishlist }}
    >
      {children}
    </WishlistContext.Provider>
  );
};

const useWishlist = () => useContext(WishlistContext);

export { WishlistProvider, useWishlist };
