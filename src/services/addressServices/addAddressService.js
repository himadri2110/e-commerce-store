import axios from "axios";

export const addAddressService = (token, formData) => {
  return axios.post(
    "/api/user/address",
    { address: formData },
    { headers: { authorization: token } }
  );
};
