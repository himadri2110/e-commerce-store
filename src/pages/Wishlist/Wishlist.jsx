import "./Wishlist.css";
import { Footer } from "../../components/Footer/Footer";
import { Navbar } from "../../components/Navbar/Navbar";
import { useWishlist } from "../../contexts/wishlistContext";
import { ProductCard } from "../../components/ProductCard/ProductCard";

const Wishlist = () => {
  const { wishlist } = useWishlist();

  return (
    <div className="page-wrapper">
      <Navbar />

      <section className="main-section product-container">
        <section className="wishlist-wrapper">
          <div className="heading-3">My Wishlist ({wishlist.length})</div>

          <section className="product-main">
            {wishlist.map((wishlistItem) => (
              <ProductCard product={wishlistItem} key={wishlistItem._id} />
            ))}
          </section>
        </section>
      </section>

      <Footer />
    </div>
  );
};

export { Wishlist };
