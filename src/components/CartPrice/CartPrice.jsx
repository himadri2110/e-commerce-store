import "./CartPrice.css";
import { useCart } from "../../contexts/cartContext";
import {
  getPrice,
  getDiscountInPrice,
  getTotalPrice,
} from "../../utils/cartPrice";

const CartPrice = () => {
  const { cart } = useCart();

  const cartPrice = {
    deliveryCharges: 49,
    price: getPrice(cart),
    discountInPrice: getDiscountInPrice(cart),
  };

  const totalPrice = getTotalPrice(
    cart,
    cartPrice.price,
    cartPrice.discountInPrice,
    cartPrice.deliveryCharges
  );

  return (
    <div>
      <div className="title heading-3">Price Details</div>

      <hr />

      <div className="sub-price">
        <div className="price">
          <div className="text">
            Price (<span className="quantity">{cart.length}</span> items)
          </div>
          <div className="value">&#8377; {cartPrice.price}</div>
        </div>

        <div className="price">
          <div className="text">Discount</div>
          <div className="value">- &#8377; {cartPrice.discountInPrice}</div>
        </div>

        <div className="price">
          <div className="text">Delivery Charges</div>
          <div className="value">&#8377; {cartPrice.deliveryCharges}</div>
        </div>
      </div>

      <hr />

      <div className="total-price">
        <div className="text">Total Amount</div>
        <div className="value">&#8377; {totalPrice}</div>
      </div>

      <hr />

      <div className="discount-msg">
        You will save &#8377; {cartPrice.discountInPrice} on this order
      </div>
      <button className="btn btn-dark btn-icon">
        Place order
        <i className="fa fa-angle-double-right" aria-hidden="true"></i>
      </button>
    </div>
  );
};

export { CartPrice };
