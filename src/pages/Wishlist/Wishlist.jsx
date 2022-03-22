import "./Wishlist.css";
import { Footer } from "../../components/Footer/Footer";
import { Navbar } from "../../components/Navbar/Navbar";

const Wishlist = () => {
  return (
    <div className="page-wrapper">
      <Navbar />

      <section className="main-section product-container">
        <section className="wishlist-wrapper">
          <div className="heading-3">My Wishlist</div>

          <section className="product-main"></section>
        </section>
      </section>

      <Footer />
    </div>
  );
};

export { Wishlist };
