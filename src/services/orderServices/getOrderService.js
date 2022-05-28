import axios from "axios";

const getOrderService = (token) => {
  return axios.get("/api/user/order", { headers: { authorization: token } });
};

export { getOrderService };
