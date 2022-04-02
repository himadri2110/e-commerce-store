import {
  createContext,
  useContext,
  useState,
  useReducer,
  useEffect,
} from "react";
import { useAuth } from "./authContext";
import {
  getWishlistItems,
  addToWishlist,
  removeFromWishlist,
} from "../services/wishlistServices";
import { wishlistReducer } from "../reducers/wishlistReducer";
import { toast } from "react-hot-toast";

const WishlistContext = createContext();

const WishlistProvider = ({ children }) => {
  const { token, isAuth, navigate } = useAuth();
  const [wishlistState, wishlistDispatch] = useReducer(wishlistReducer, []);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (isAuth) {
      try {
        (async () => {
          const { data, status } = await getWishlistItems(token);

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
        setLoading(true);
        const { data, status } = await removeFromWishlist(product._id, token);
        setLoading(false);

        if (status === 200) {
          toast.success("Product removed from Wishlist!");
          wishlistDispatch({
            type: "SET_WISHLIST_DATA",
            payload: data.wishlist,
          });
        }
      } else {
        setLoading(true);
        const { data, status } = await addToWishlist(product, token);
        setLoading(false);

        if (status === 201) {
          toast.success("Product added to Wishlist!");
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
      value={{ wishlistState, wishlistDispatch, toggleWishlist, loading }}
    >
      {children}
    </WishlistContext.Provider>
  );
};

const useWishlist = () => useContext(WishlistContext);

export { WishlistProvider, useWishlist };
