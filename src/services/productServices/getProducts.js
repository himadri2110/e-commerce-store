import axios from "axios";

const getProducts = () => {
  return axios.get("/api/products");
};

export { getProducts };
