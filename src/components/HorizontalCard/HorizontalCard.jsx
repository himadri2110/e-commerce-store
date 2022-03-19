import "./HorizontalCard.css";

const HorizontalCard = ({ product }) => {
  const { title, price, discount, discountedPrice, image } = product;

  return (
    <div className="card-wrapper basic-card card-horizontal featured-card">
      <div className="row">
        <img src={image} className="card-img" alt="Perfume" />

        <div className="card-main">
          <div className="card-bdg primary">Trending</div>

          <p className="heading">{title}</p>

          <div className="card-content">
            <div className="price">&#8377; {price}</div>
          </div>
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export { HorizontalCard };
