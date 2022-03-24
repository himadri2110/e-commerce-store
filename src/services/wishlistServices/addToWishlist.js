import axios from "axios";

const addToWishlist = (product, token) => {
  return axios.post(
    "/api/user/wishlist/",
    { product },
    { headers: { authorization: token } }
  );
};

export { addToWishlist };
