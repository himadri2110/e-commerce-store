import { Footer } from "../../components/Footer/Footer";
import { Navbar } from "../../components/Navbar/Navbar";

const Cart = () => {
  return (
    <div className="page-wrapper">
      <Navbar />

      <section className="main-section">
        <h1 className="text-center">Cart page</h1>
      </section>

      <Footer />
    </div>
  );
};

export { Cart };
