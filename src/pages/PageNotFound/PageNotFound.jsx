import "./PageNotFound.css";
import { Link } from "react-router-dom";
import { Navbar } from "../../components/Navbar/Navbar";
import { Footer } from "../../components/Footer/Footer";

const PageNotFound = () => {
  return (
    <div className="page-wrapper">
      <Navbar />

      <section className="main-section page-not-found">
        <img
          src="/assets/404.svg"
          className="not-found-image"
          alt="Page Not Found"
        />

        <div className="page-action">
          <Link to="/" className="btn-link">
            <i className="fa-solid fa-angle-double-left" aria-hidden="true"></i>
            Back to Home
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export { PageNotFound };
