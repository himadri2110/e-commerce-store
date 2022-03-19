import "./HorizontalCard.css";

const HorizontalCard = ({ product }) => {
  const { title, price, discount, discountedPrice, image } = product;

  return (
    <div class="card-wrapper basic-card card-horizontal featured-card">
      <div class="row">
        <img src={image} class="card-img" alt="Perfume" />

        <div class="card-main">
          <div class="card-bdg primary">Trending</div>

          <p class="heading">{title}</p>

          <div class="card-content">
            <div class="price">&#8377; {price}</div>
          </div>
          <button class="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export { HorizontalCard };
