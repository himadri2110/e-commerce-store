import axios from "axios";

const removeFromWishlist = (id, token) => {
  return axios.delete(`/api/user/wishlist/${id}`, {
    headers: { authorization: token },
  });
};

export { removeFromWishlist };
