import axios from "axios";

const getCartItems = (token) => {
  return axios.get("/api/user/cart", {
    headers: { authorization: token },
  });
};

export { getCartItems };
