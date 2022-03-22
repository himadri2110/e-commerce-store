import "./Logout.css";
import { Navbar } from "../../../components/Navbar/Navbar";
import { Footer } from "../../../components/Footer/Footer";
import { Link } from "react-router-dom";

const Logout = () => {
  return (
    <div className="page-wrapper">
      <Navbar />

      <section className="main-section logout-container">
        <div className="card-wrapper basic-card">
          <div className="card-icon">
            <i className="fa-solid fa-check-circle"></i>
          </div>

          <div className="card-content heading-3">
            You have successfully been logged out!
          </div>

          <div className="card-action">
            <Link to="/" className="btn-link">
              <i
                className="fa-solid fa-angle-double-left"
                aria-hidden="true"
              ></i>
              Back to Home
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export { Logout };
