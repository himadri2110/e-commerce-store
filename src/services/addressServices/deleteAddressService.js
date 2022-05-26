import axios from "axios";

export const deleteAddressService = (token, addressId) => {
  return axios.delete(`/api/user/address/${addressId}`, {
    headers: { authorization: token },
  });
};
