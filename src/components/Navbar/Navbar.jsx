import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="nav-bar">
      <Link to="/" className="nav-brand">
        Essence
      </Link>

      <div className="nav-search input input-primary">
        <input type="text" placeholder="Search" />
      </div>

      <div className="nav-action">
        <Link to="/" className="icon login" title="Login">
          <i className="fa-solid fa-sign-in"></i>
          <span>Login</span>
        </Link>

        <Link to="/wishlist" className="icon" title="Wishlist">
          <i className="fa-solid fa-heart"></i>
          <span className="badge">4</span>
        </Link>

        <Link to="/cart" className="icon" title="Cart">
          <i className="fa-solid fa-shopping-cart"></i>
          <span className="badge">2</span>
        </Link>
      </div>
    </nav>
  );
};

export { Navbar };
