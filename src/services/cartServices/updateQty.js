import axios from "axios";

const updateQty = (id, token, type) => {
  return axios.post(
    `/api/user/cart/${id}`,
    { action: { type } },
    { headers: { authorization: token } }
  );
};

export { updateQty };
