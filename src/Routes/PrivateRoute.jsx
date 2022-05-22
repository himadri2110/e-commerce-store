import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../contexts/authContext";

const PrivateRoute = () => {
  const { isAuth } = useAuth();

  return isAuth ? <Outlet /> : <Navigate to="/login" />;
};

export { PrivateRoute };
