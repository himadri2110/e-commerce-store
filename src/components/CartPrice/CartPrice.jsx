import "./CartPrice.css";
import { useState } from "react";
import { useCart } from "../../contexts/cartContext";
import { useAuth } from "../../contexts/authContext";
import { getTotalPrice } from "../../utils/cartPrice";
import { ApplyCoupon } from "./ApplyCoupon";

const CartPrice = () => {
  const { cartState, cartPrice, selectedCoupon, setSelectedCoupon } = useCart();
  const { navigate } = useAuth();

  const [showCouponModal, setShowCouponModal] = useState(false);

  const totalPrice = getTotalPrice(
    cartState,
    cartPrice.price,
    cartPrice.discountInPrice,
    cartPrice.deliveryCharges
  );

  const discountedCouponPrice =
    (totalPrice * Number(selectedCoupon.discount)) / 100;

  return (
    <div>
      <div className="apply-coupon">
        <p>
          Got a Coupon? <i className="fa-solid fa-tags"></i>
        </p>

        <button
          className="btn-apply btn btn-secondary"
          onClick={() => setShowCouponModal(true)}
        >
          Apply
        </button>
      </div>

      <div className="title heading-3">Price Details</div>

      <hr />

      <div className="sub-price">
        <div className="price">
          <div className="text">
            Price (<span className="quantity">{cartState.length}</span>{" "}
            <span>{cartState.length === 1 ? "item" : "items"}</span>)
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

      {JSON.stringify(selectedCoupon) !== "{}" ? (
        <div>
          <div className="selected-coupon">
            <div className="coupon-name">
              <i
                className="fa-solid fa-times"
                onClick={() => setSelectedCoupon({})}
              ></i>
              {selectedCoupon.name}
            </div>
            <div className="coupon-price">- &#8377;{discountedCouponPrice}</div>
          </div>

          <hr />

          <div className="grand-total">
            <div className="text">Grand Total</div>
            <div className="value">
              &#8377; {totalPrice - discountedCouponPrice}
            </div>
          </div>
        </div>
      ) : null}

      <button
        className="btn btn-dark btn-icon"
        onClick={() => navigate("/checkout")}
      >
        Checkout
      </button>

      <div className="discount-msg">
        You will save &#8377;{" "}
        {cartPrice.discountInPrice +
          (discountedCouponPrice ? discountedCouponPrice : 0)}{" "}
        on this order
      </div>

      {showCouponModal ? (
        <div className="coupon-modal">
          <ApplyCoupon
            setShowCouponModal={setShowCouponModal}
            totalPrice={totalPrice}
          />
        </div>
      ) : null}
    </div>
  );
};

export { CartPrice };
