import axios from "axios";

const removeFromCart = (id, token) => {
  return axios.delete(`/api/user/cart/${id}`, {
    headers: { authorization: token },
  });
};

export { removeFromCart };
