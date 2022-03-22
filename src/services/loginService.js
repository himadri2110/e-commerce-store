import axios from "axios";

const loginService = (loginInput) => {
  return axios.post("/api/auth/login", loginInput);
};

export { loginService };
