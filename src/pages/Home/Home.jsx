import "./Home.css";
import { Navbar } from "../../components/Navbar/Navbar";
import Hero from "../../assets/hero-img.webp";
import Men from "../../assets/category-men.webp";
import Women from "../../assets/category-women.webp";
import Kids from "../../assets/category-kids.webp";
import { Footer } from "../../components/Footer/Footer";

const Home = () => {
  return (
    <div>
      <Navbar />

      <div className="hero">
        <div className="hero-img">
          <img className="resp-img" src={Hero} alt="Image" />
        </div>

        <div className="hero-content">
          <div>
            Stylish and comfortable <span className="primary">footwear</span>{" "}
            for all occasions
            <a href="/pages/products.html" className="hero-action">
              <button className="btn btn-primary">Shop Now</button>
            </a>
          </div>
        </div>
      </div>

      <div className="services-category">
        <div className="service">
          <div className="icon">
            <i className="fa fa-check-circle"></i>
          </div>

          <div className="text">
            <div className="heading">Money Guarantee</div>
            <div className="sub-heading">30 Day Money Back</div>
          </div>
        </div>

        <div className="service">
          <div className="icon">
            <i className="fa fa-headphones"></i>
          </div>

          <div className="text">
            <div className="heading">Online Support</div>
            <div className="sub-heading">Technical Support 24/7</div>
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

      <div className="main-category">
        <div className="heading-2">Categories:</div>

        <div className="grid grid-three-col category-grid">
          <a href="/pages/products.html">
            <div className="category-container">
              <img className="resp-img" src={Men} alt="Men" />
              <div className="overlay-container">Men</div>
            </div>
          </a>

          <a href="/pages/products.html">
            <div className="category-container">
              <img className="resp-img" src={Women} alt="Women" />
              <div className="overlay-container">Women</div>
            </div>
          </a>

          <a href="/pages/products.html">
            <div className="category-container">
              <img className="resp-img" src={Kids} alt="Kids" />
              <div className="overlay-container">Kids</div>
            </div>
          </a>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export { Home };
