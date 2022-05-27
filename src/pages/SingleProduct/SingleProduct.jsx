import "./SingleProduct.css";
import { useParams } from "react-router-dom";
import { Navbar } from "../../components/Navbar/Navbar";
import { Footer } from "../../components/Footer/Footer";
import { useWishlist } from "../../contexts/wishlistContext";
import { useCart } from "../../contexts/cartContext";
import { useAuth } from "../../contexts/authContext";
import { Loader } from "../../components/Loader/Loader";
import { useProducts } from "../../contexts/productContext";

const SingleProduct = () => {
  const { productId } = useParams();

  const {
    productState: { products },
  } = useProducts();

  const {
    wishlistState,
    toggleWishlist,
    loading: wishlistLoading,
  } = useWishlist();

  const { cartState, addToCartHandler, loading: cartLoading } = useCart();
  const { isAuth, navigate } = useAuth();

  const currentProduct = products?.find((product) => product.id === productId);

  const itemInWishlist = wishlistState.find(
    (item) => item.id === currentProduct.id
  );
  const itemInCart = cartState.find((item) => item.id === currentProduct.id);

  return (
    <div className="page-wrapper">
      <Navbar />

      <section className="main-section">
        {currentProduct ? (
          <section className="single-product">
            <div className="card-wrapper basic-card card-w-dismiss">
              <div className="img-div">
                <img
                  src={currentProduct.image}
                  className="card-img"
                  alt={currentProduct.title}
                />
              </div>

              <div className="card-dismiss">
                <button
                  onClick={() => toggleWishlist(currentProduct)}
                  disabled={wishlistLoading}
                >
                  <i
                    className={
                      isAuth && itemInWishlist ? "fa fa-heart" : "fa fa-heart-o"
                    }
                  ></i>
                </button>
              </div>

              <div className="card-body">
                <div className="card-heading" title={currentProduct.title}>
                  {currentProduct.title}
                </div>

                <div className="rating">
                  {currentProduct.rating} <i className="fa-solid fa-star"></i>
                </div>

                <div className="card-content">
                  <div className="product-price">
                    <div className="price">
                      &#8377; {currentProduct.discountedPrice}
                    </div>
                    <div className="previous-price">
                      &#8377; {currentProduct.price}
                    </div>
                  </div>
                  <div className="discount">{currentProduct.discount}% off</div>
                </div>

                <div className="card-tags">
                  <div>
                    <i className="fa-solid fa-check"></i> 7 Days Money Back
                    Guarantee
                  </div>
                  <div>
                    <i className="fa-solid fa-check"></i> Cash on Delivery
                    Available
                  </div>
                  <div>
                    <i className="fa-solid fa-check"></i> All cards accepted
                  </div>
                </div>

                <hr />

                <div className="card-description">
                  <ul className="spaced-list">
                    <p className="list-head">Product Details</p>
                    <li>
                      Brand:{" "}
                      <span className="list-value">{currentProduct.brand}</span>
                    </li>
                    <li>
                      Availability:{" "}
                      <span className="list-value">
                        {currentProduct.inStock ? "In Stock" : "Out of Stock"}
                      </span>
                    </li>
                    <li>
                      Delivery:{" "}
                      <span className="list-value">
                        {currentProduct.fastDelivery
                          ? "Fast"
                          : "5-7 business days"}
                      </span>
                    </li>
                  </ul>
                </div>
                <div className="card-action">
                  <button
                    className="btn btn-primary"
                    onClick={() =>
                      isAuth && itemInCart
                        ? navigate("/cart")
                        : addToCartHandler(currentProduct)
                    }
                    disabled={cartLoading || !currentProduct.inStock}
                  >
                    {isAuth && itemInCart ? "Go To Cart" : "Add To Cart"}
                  </button>
                </div>
              </div>
            </div>
          </section>
        ) : (
          <Loader />
        )}
      </section>
      <Footer />
    </div>
  );
};

export { SingleProduct };
