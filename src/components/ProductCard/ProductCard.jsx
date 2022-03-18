import "./ProductCard.css";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  const { title, price, discount, discountedPrice, image } = product;

  return (
    <div className="card-wrapper basic-card card-w-dismiss">
      <div>
        <Link to="/">
          <img src={image} className="card-img" alt="Heels" />
        </Link>

        <div className="card-dismiss">
          <i className="fa fa-heart"></i>
        </div>

        <div className="card-heading" title={title}>
          {title}
        </div>
      </div>

      <div className="card-content">
        <div className="product-price">
          <div className="price">&#8377; {discountedPrice}</div>
          <div className="previous-price">&#8377; {price}</div>
          <div className="discount">{discount}% off</div>
        </div>
      </div>

      <div className="card-action">
        <button className="btn btn-primary">Add to Cart</button>
      </div>
    </div>
  );
};

export { ProductCard };
