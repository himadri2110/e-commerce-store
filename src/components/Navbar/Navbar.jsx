import "./Navbar.css";
import { Link } from "react-router-dom";
import { useAuth } from "../../contexts/authContext";
import { useWishlist } from "../../contexts/wishlistContext";
import { useCart } from "../../contexts/cartContext";

const Navbar = () => {
  const { isAuth, setIsAuth } = useAuth();
  const { wishlist } = useWishlist();
  const { cart } = useCart();

  return (
    <nav className="nav-bar">
      <Link to="/" className="nav-brand">
        Essence
      </Link>

      <div className="nav-search input input-primary">
        <input type="text" placeholder="Search" />
      </div>
      <div className="nav-action">
        {isAuth ? (
          <Link
            to="/logout"
            className="icon logout"
            title="Logout"
            onClick={() => {
              localStorage.removeItem("token");
              localStorage.setItem("isAuth", false);
              setIsAuth(false);
            }}
          >
            <i className="fa-solid fa-sign-out"></i>
            <span>Logout</span>
          </Link>
        ) : (
          <Link to="/login" className="icon login" title="Login">
            <i className="fa-solid fa-sign-in"></i>
            <span>Login</span>
          </Link>
        )}

        <Link to="/wishlist" className="icon" title="Wishlist">
          <i className="fa-solid fa-heart"></i>
          {isAuth && wishlist.length > 0 ? (
            <span className="badge">{wishlist.length}</span>
          ) : null}
        </Link>

        <Link to="/cart" className="icon" title="Cart">
          <i className="fa-solid fa-shopping-cart"></i>
          {isAuth && cart.length > 0 ? (
            <span className="badge">{cart.length}</span>
          ) : null}
        </Link>
      </div>
    </nav>
  );
};

export { Navbar };
