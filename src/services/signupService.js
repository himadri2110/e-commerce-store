import axios from "axios";

const signupService = (signupInput) => {
  return axios.post("/api/auth/signup", signupInput);
};

export { signupService };
