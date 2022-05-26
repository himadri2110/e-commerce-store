import { useCart } from "../../contexts/cartContext";
import "./ApplyCoupon.css";

const ApplyCoupon = ({ setShowCouponModal, totalPrice }) => {
  const { coupons, selectedCoupon, setSelectedCoupon } = useCart();

  return (
    <div className="coupon-container">
      <div className="coupon-header">
        <h3>Apply Coupon</h3>
        <button onClick={() => setShowCouponModal(false)}>
          <i className="fa-solid fa-times"></i>
        </button>
      </div>

      <div className="coupon">
        {coupons?.map((coupon) => (
          <label
            className={`coupon-label ${
              totalPrice < coupon.minPrice ? "invalid-coupon" : ""
            } `}
            key={coupon.id}
          >
            <input
              type="radio"
              name="coupon"
              disabled={totalPrice < coupon.minPrice}
              checked={selectedCoupon.minPrice === coupon.minPrice}
              onChange={() => setSelectedCoupon(coupon)}
            />
            <p>
              {coupon.name}: {coupon.discount}% off on orders above &#8377;
              {coupon.minPrice}
            </p>
          </label>
        ))}
      </div>
    </div>
  );
};

export { ApplyCoupon };
