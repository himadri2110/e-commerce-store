import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="nav-bar">
      <Link to="/" className="nav-brand">
        Loafer
      </Link>

      <div className="nav-search input input-primary">
        <input type="text" placeholder="Search" />
      </div>

      <div className="nav-action">
        <a href="/pages/login.html" className="icon login" title="Login">
          <i className="fa-solid fa-sign-in"></i>
          <span>Login</span>
        </a>

        <a href="/pages/wishlist.html" className="icon" title="Wishlist">
          <i className="fa-solid fa-heart"></i>
          <span className="badge">4</span>
        </a>

        <a href="/pages/cart.html" className="icon" title="Cart">
          <i className="fa-solid fa-shopping-cart"></i>
          <span className="badge">2</span>
        </a>
      </div>
    </nav>
  );
};

export { Navbar };
