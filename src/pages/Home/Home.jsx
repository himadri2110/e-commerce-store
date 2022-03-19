import "./Home.css";
import { Link } from "react-router-dom";
import { Navbar } from "../../components/Navbar/Navbar";
import { Footer } from "../../components/Footer/Footer";
import { products } from "./../../backend/db/products";
import { HorizontalCard } from "../../components/HorizontalCard/HorizontalCard";

const Home = () => {
  const [productOne, productTwo] = products;

  return (
    <div className="page-wrapper">
      <Navbar />

      <section className="main-section">
        <div className="hero">
          <div className="hero-img">
            <img className="resp-img" src="/assets/hero-img.jpg" alt="Image" />
          </div>

          <div className="hero-content">
            <div>
              Everything's better with a bit of fragrance
              <p className="sub-title">
                Choose from our wide variety of fragrances
              </p>
              <Link to="/products" className="hero-action">
                <button className="btn btn-primary">Smell Now</button>
              </Link>
            </div>
          </div>
        </div>

        <div className="services-category">
          <div className="service">
            <div className="icon">
              <i className="fa-solid fa-check-circle"></i>
            </div>

            <div className="text">
              <div className="heading">Money Guarantee</div>
              <div className="sub-heading">7 Days Money Back</div>
            </div>
          </div>

          <div className="service">
            <div className="icon">
              <i class="fa-solid fa-truck-fast"></i>
            </div>

            <div className="text">
              <div className="heading">Fast Delivery</div>
              <div className="sub-heading">Within 3-5 business days</div>
            </div>
          </div>

          <div className="service">
            <div className="icon">
              <i className="fa fa-credit-card"></i>
            </div>

            <div className="text">
              <div className="heading">Secure Payments</div>
              <div className="sub-heading">All Cards Accepted</div>
            </div>
          </div>
        </div>

        <div class="featured-category">
          <div class="heading-2">Featured:</div>

          <div class="grid grid-two-col featured-grid">
            <HorizontalCard product={productOne} />
            <HorizontalCard product={productTwo} />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export { Home };
