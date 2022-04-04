import Mockman from "mockman-js";
import { Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home/Home";
import { Products } from "../pages/Products/Products";
import { Cart } from "../pages/Cart/Cart";
import { Wishlist } from "../pages/Wishlist/Wishlist";
import { Login } from "../pages/Authentication/Login/Login";
import { SignUp } from "../pages/Authentication/SignUp/SignUp";
import { Logout } from "../pages/Authentication/Logout/Logout";
import { PrivateRoute } from "./PrivateRoute";
import { SingleProduct } from "../pages/SingleProduct/SingleProduct";
import { ResetScroll } from "../components/ResetScroll/ResetScroll";

const NavRoutes = () => {
  return (
    <ResetScroll>
      <Routes>
        <Route path="/mockman" element={<Mockman />} />
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:productId" element={<SingleProduct />} />
        <Route
          path="/cart"
          element={
            <PrivateRoute>
              <Cart />
            </PrivateRoute>
          }
        ></Route>
        <Route
          path="/wishlist"
          element={
            <PrivateRoute>
              <Wishlist />
            </PrivateRoute>
          }
        ></Route>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/logout" element={<Logout />} />
      </Routes>
    </ResetScroll>
  );
};

export { NavRoutes };
