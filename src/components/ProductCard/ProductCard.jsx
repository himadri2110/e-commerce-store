import "./ProductCard.css";
import { Link } from "react-router-dom";
import { useWishlist } from "../../contexts/wishlistContext";
import { useCart } from "../../contexts/cartContext";
import { useAuth } from "../../contexts/authContext";

const ProductCard = ({ product }) => {
  const { _id, title, price, discount, discountedPrice, image, inStock } =
    product;
  const { wishlist, toggleWishlist } = useWishlist();
  const { cart, addToCartHandler } = useCart();
  const { navigate } = useAuth();

  const itemInWishlist = wishlist.find((item) => item._id === _id);
  const itemInCart = cart.find((item) => item._id === _id);

  return (
    <div
      className={`card-wrapper basic-card card-w-dismiss ${
        !inStock ? "card-w-overlay" : null
      }`}
    >
      <div className={`${!inStock ? "overlay-bg" : null}`}>
        <Link to="/">
          <img src={image} className="card-img" alt={title} />
        </Link>

        <div className="card-dismiss">
          <button>
            <i
              className={itemInWishlist ? "fa fa-heart" : "fa fa-heart-o"}
              onClick={() => toggleWishlist(product)}
            ></i>
          </button>
        </div>

        <div className="card-heading" title={title}>
          {title}
        </div>
      </div>

      {!inStock ? <div class="overlay-text">Out of Stock</div> : null}

      <div className={`card-content ${!inStock ? "overlay-bg" : null}`}>
        <div className="product-price">
          <div className="price">&#8377; {discountedPrice}</div>
          <div className="previous-price">&#8377; {price}</div>
          <div className="discount">{discount}% off</div>
        </div>
      </div>

      <div className={`card-action ${!inStock ? "overlay-bg" : null}`}>
        <button
          className="btn btn-primary"
          onClick={() =>
            itemInCart ? navigate("/cart") : addToCartHandler(product)
          }
        >
          {itemInCart ? "Go To Cart" : "Add To Cart"}
        </button>
      </div>
    </div>
  );
};

export { ProductCard };
