import Mockman from "mockman-js";
import { Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home/Home";
import { Products } from "../pages/Products/Products";
import { Cart } from "../pages/Cart/Cart";
import { Wishlist } from "../pages/Wishlist/Wishlist";
import { Login } from "../pages/Authentication/Login/Login";

const NavRoutes = () => {
  return (
    <Routes>
      <Route path="/mockman" element={<Mockman />} />
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<Products />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/wishlist" element={<Wishlist />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};

export { NavRoutes };
