import "./Wishlist.css";
import { Footer } from "../../components/Footer/Footer";
import { Navbar } from "../../components/Navbar/Navbar";
import { useWishlist } from "../../contexts/wishlistContext";
import { ProductCard } from "../../components/ProductCard/ProductCard";
import { Link } from "react-router-dom";

const Wishlist = () => {
  const { wishlistState } = useWishlist();

  return (
    <div className="page-wrapper">
      <Navbar />

      <section className="main-section product-container">
        <section className="wishlist-wrapper">
          <div className="heading-3">My Wishlist ({wishlistState.length})</div>

          {wishlistState.length > 0 ? (
            <section className="product-main">
              {wishlistState.map((wishlistItem) => (
                <ProductCard product={wishlistItem} key={wishlistItem._id} />
              ))}
            </section>
          ) : (
            <div className="text-center">
              <p>Oops! Your wishlist is empty :(</p>
              <Link to="/products" className="text-primary">
                Start shopping!
              </Link>
            </div>
          )}
        </section>
      </section>

      <Footer />
    </div>
  );
};

export { Wishlist };
