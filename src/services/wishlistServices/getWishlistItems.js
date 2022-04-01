import axios from "axios";

const getWishlistItems = (token) => {
  return axios.get("/api/user/wishlist", {
    headers: { authorization: token },
  });
};

export { getWishlistItems };
