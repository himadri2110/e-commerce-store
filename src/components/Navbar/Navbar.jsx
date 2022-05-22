import "./Navbar.css";
import { Link } from "react-router-dom";
import { useAuth } from "../../contexts/authContext";
import { useWishlist } from "../../contexts/wishlistContext";
import { useCart } from "../../contexts/cartContext";
import { SearchBar } from "../SearchBar/SearchBar";

const Navbar = () => {
  const { isAuth, logoutHandler } = useAuth();
  const { wishlistState } = useWishlist();
  const { cartState } = useCart();

  return (
    <nav className="nav-bar">
      <Link to="/" className="nav-brand">
        Essence
      </Link>

      <Link to="/products" className="nav-primary">
        <span>Shop</span>
      </Link>

      <div className="nav-search input input-primary">
        <SearchBar />
      </div>

      <div className="nav-action">
        <Link to="/wishlist" className="icon" title="Wishlist">
          <i className="fa-solid fa-heart"></i>
          {isAuth && wishlistState.length > 0 ? (
            <span className="badge">{wishlistState.length}</span>
          ) : null}
        </Link>

        <Link to="/cart" className="icon" title="Cart">
          <i className="fa-solid fa-shopping-cart"></i>
          {isAuth && cartState.length > 0 ? (
            <span className="badge">{cartState.length}</span>
          ) : null}
        </Link>

        {isAuth ? (
          <Link to="/profile" className="icon profile" title="Profile">
            <i className="fa-solid fa-user"></i>
          </Link>
        ) : (
          <Link to="/login" className="icon login" title="Login">
            <i className="fa-solid fa-sign-in"></i>
          </Link>
        )}
      </div>
    </nav>
  );
};

export { Navbar };
