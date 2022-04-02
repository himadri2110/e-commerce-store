import "./Cart.css";
import { Footer } from "../../components/Footer/Footer";
import { Navbar } from "../../components/Navbar/Navbar";
import { CartCard } from "../../components/CartCard/CartCard";
import { CartPrice } from "../../components/CartPrice/CartPrice";
import { useCart } from "../../contexts/cartContext";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cartState } = useCart();

  return (
    <div className="page-wrapper">
      <Navbar />

      <section className="main-section cart-container">
        <section className="cart-wrapper">
          <div className="heading-3">
            My Cart (<span className="quantity">{cartState.length}</span>)
          </div>

          {cartState.length > 0 ? (
            <section className="cart-main">
              <div className="cart-product">
                {cartState.map((cartItem) => (
                  <CartCard product={cartItem} key={cartItem._id} />
                ))}
              </div>

              <div className="cart-price">
                <CartPrice />
              </div>
            </section>
          ) : (
            <div className="text-center">
              <p>Oops! Your cart is empty :(</p>
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

export { Cart };
