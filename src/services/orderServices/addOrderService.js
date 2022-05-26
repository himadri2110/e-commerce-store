import axios from "axios";

const addOrderService = (order, token) => {
  return axios.post(
    "/api/user/order",
    { order },
    { headers: { authorization: token } }
  );
};

export { addOrderService };
