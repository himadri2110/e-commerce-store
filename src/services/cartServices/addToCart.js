import axios from "axios";

const addToCart = (product, token) => {
  return axios.post(
    "/api/user/cart",
    { product },
    { headers: { authorization: token } }
  );
};

export { addToCart };
