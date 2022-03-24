import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const navigate = useNavigate();

  const initialToken = localStorage.getItem("token");
  const [token, setToken] = useState(initialToken || "");

  const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth"));

  return (
    <AuthContext.Provider
      value={{ isAuth, setIsAuth, token, setToken, navigate }}
    >
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => useContext(AuthContext);

export { AuthProvider, useAuth };
