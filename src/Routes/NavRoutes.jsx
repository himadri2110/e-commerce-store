import Mockman from "mockman-js";
import { Routes, Route, Navigate } from "react-router-dom";
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
import { PageNotFound } from "../pages/PageNotFound/PageNotFound";
import { UserAccount } from "../pages/UserAccount/UserAccount";
import { UserProfile } from "../components/UserProfile/UserProfile";
import { useAuth } from "../contexts/authContext";
import { OrderList } from "../components/OrderList/OrderList";
import { AddressList } from "../components/AddressList/AddressList";
import { Checkout } from "./../pages/Checkout/Checkout";
import { OrderSummary } from "./../pages/OrderSummary/OrderSummary";

const NavRoutes = () => {
  const { isAuth } = useAuth();

  return (
    <ResetScroll>
      <Routes>
        <Route path="/mockman" element={<Mockman />} />
        <Route path="/" element={<Home />} />
        <Route path="*" element={<PageNotFound />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:productId" element={<SingleProduct />} />

        <Route element={<PrivateRoute />}>
          <Route path="/cart" element={<Cart />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/order/:orderId" element={<OrderSummary />} />

          <Route path="/profile" element={<UserAccount />}>
            <Route path="" element={<UserProfile />} />
            <Route path="orders" element={<OrderList />} />
            <Route path="addresses" element={<AddressList />} />
          </Route>
        </Route>

        {!isAuth ? (
          <>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/logout" element={<Logout />} />
          </>
        ) : (
          <>
            <Route path="/login" element={<Navigate to="/" replace />} />
            <Route path="/signup" element={<Navigate to="/" replace />} />
            <Route path="/logout" element={<Navigate to="/" replace />} />
          </>
        )}
      </Routes>
    </ResetScroll>
  );
};

export { NavRoutes };
