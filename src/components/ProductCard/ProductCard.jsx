import "./ProductCard.css";
import { Link } from "react-router-dom";
import { useWishlist } from "../../contexts/wishlistContext";
import { useCart } from "../../contexts/cartContext";
import { useAuth } from "../../contexts/authContext";

const ProductCard = ({ product }) => {
  const { _id, title, price, discount, discountedPrice, image, inStock, id } =
    product;
  const {
    wishlistState,
    toggleWishlist,
    loading: wishlistLoading,
  } = useWishlist();
  const { cartState, addToCartHandler, loading: cartLoading } = useCart();
  const { isAuth, navigate } = useAuth();

  const itemInWishlist = wishlistState.find((item) => item._id === _id);
  const itemInCart = cartState.find((item) => item._id === _id);

  return (
    <div
      className={`card-wrapper basic-card card-w-dismiss ${
        !inStock ? "card-w-overlay" : null
      }`}
    >
      <div className={`${!inStock ? "overlay-bg" : null}`}>
        <Link to={`/products/${id}`}>
          <img src={image} className="card-img" alt={title} />
        </Link>

        <div className="card-dismiss">
          <button
            onClick={() => toggleWishlist(product)}
            disabled={wishlistLoading}
          >
            <i
              className={
                isAuth && itemInWishlist ? "fa fa-heart" : "fa fa-heart-o"
              }
            ></i>
          </button>
        </div>

        <Link to={`/products/${id}`} className="card-heading" title={title}>
          {title}
        </Link>
      </div>

      {!inStock ? <div className="overlay-text">Out of Stock</div> : null}

      <div className={`card-content ${!inStock ? "overlay-bg" : null}`}>
        <div className="product-price">
          <div className="price">&#8377; {discountedPrice}</div>
          <div className="previous-price">&#8377; {price}</div>
          <div className="discount">{discount}% off</div>
        </div>
      </div>

      <div className={`card-action ${!inStock ? "overlay-bg" : null}`}>
        <button
          className="btn btn-primary cart-button"
          onClick={() =>
            isAuth && itemInCart ? navigate("/cart") : addToCartHandler(product)
          }
          disabled={cartLoading}
        >
          {isAuth && itemInCart ? "Go To Cart" : "Add To Cart"}
        </button>
      </div>
    </div>
  );
};

export { ProductCard };
