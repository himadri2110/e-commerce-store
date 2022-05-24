import axios from "axios";

const getAddressService = (token) => {
  return axios.get("/api/user/addresses", {
    headers: { authorization: token },
  });
};

export { getAddressService };
