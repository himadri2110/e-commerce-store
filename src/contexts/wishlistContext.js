import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";
import { useAuth } from "./authContext";
import { removeFromWishlist } from "../services/wishlistServices/removeFromWishlist";
import { addToWishlist } from "../services/wishlistServices/addToWishlist";

const WishlistContext = createContext();

const WishlistProvider = ({ children }) => {
  const { token, isAuth, navigate } = useAuth();
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    if (isAuth) {
      try {
        (async () => {
          const { data, status } = await axios.get("/api/user/wishlist", {
            headers: { authorization: token },
          });

          if (status === 200) {
            setWishlist(data.wishlist);
          }
        })();
      } catch (err) {
        console.error(err);
      }
    }
  }, [isAuth]);

  const toggleWishlist = async (product) => {
    if (isAuth) {
      const itemExists = wishlist.find((item) => item._id === product._id);

      if (itemExists) {
        const { data, status } = await removeFromWishlist(product._id, token);

        if (status === 200) {
          setWishlist(() => [...data.wishlist]);
        }
      } else {
        const { data, status } = await addToWishlist(product, token);

        if (status === 201) {
          setWishlist(() => [...data.wishlist]);
        }
      }
    } else {
      navigate("/login");
    }
  };

  return (
    <WishlistContext.Provider value={{ wishlist, setWishlist, toggleWishlist }}>
      {children}
    </WishlistContext.Provider>
  );
};

const useWishlist = () => useContext(WishlistContext);

export { WishlistProvider, useWishlist };
