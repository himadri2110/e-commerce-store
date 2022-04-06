import "./HorizontalCard.css";
import { Link } from "react-router-dom";
import { useCart } from "../../contexts/cartContext";
import { useAuth } from "../../contexts/authContext";

const HorizontalCard = ({ product }) => {
  const { _id, title, price, image, id } = product;
  const { cartState, addToCartHandler, loading } = useCart();
  const { isAuth, navigate } = useAuth();

  const itemInCart = cartState.find((item) => item._id === _id);

  return (
    <div className="card-wrapper basic-card card-horizontal featured-card">
      <div className="row">
        <img src={image} className="card-img" alt="Perfume" />

        <div className="card-main">
          <Link to={`/products/${id}`}>
            <div className="card-bdg primary">Trending</div>

            <p className="heading">{title}</p>

            <div className="card-content">
              <div className="price">&#8377; {price}</div>
            </div>
          </Link>

          <button
            className="btn btn-primary"
            onClick={() =>
              isAuth && itemInCart
                ? navigate("/cart")
                : addToCartHandler(product)
            }
            disabled={loading}
          >
            {isAuth && itemInCart ? "Go To Cart" : "Add To Cart"}
          </button>
        </div>
      </div>
    </div>
  );
};

export { HorizontalCard };
