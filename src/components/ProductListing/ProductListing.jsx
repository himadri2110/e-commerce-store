import "./ProductListing.css";
import { ProductCard } from "../ProductCard/ProductCard";
import { useProducts } from "../../contexts/productContext";
import {
  getSortedProducts,
  getRatedProducts,
  getInStockProducts,
  getFastDeliveryProducts,
  getPriceRangeProducts,
  getBrandedProducts,
  getCategorizedProducts,
} from "../../utils/productFilters";
import { Loader } from "../Loader/Loader";
import { useSearchedProducts } from "../../customHooks/useSearchedProducts";

const ProductListing = () => {
  const { productState, toggleFilter, showFilter, loading, searchVal } =
    useProducts();

  const {
    products,
    brand,
    category,
    sortBy,
    rating,
    inStock,
    fastDelivery,
    priceRange,
  } = productState;

  const searchedProducts = useSearchedProducts(products, searchVal);

  const brandedProducts = getBrandedProducts(brand, searchedProducts);
  const categorizedProducts = getCategorizedProducts(category, brandedProducts);
  const sortedProducts = getSortedProducts(sortBy, categorizedProducts);
  const ratedProducts = getRatedProducts(rating, sortedProducts);
  const inStockProducts = getInStockProducts(inStock, ratedProducts);
  const fastDeliveryProducts = getFastDeliveryProducts(
    fastDelivery,
    inStockProducts
  );
  const priceRangeProducts = getPriceRangeProducts(
    priceRange,
    fastDeliveryProducts
  );
  const filteredProducts = priceRangeProducts;

  return (
    <section className={`product-wrapper ${showFilter ? "hide-div" : null}`}>
      {loading ? (
        <Loader />
      ) : filteredProducts.length > 0 ? (
        <div>
          <div className="product-heading">
            <div className="heading-3">
              Showing {filteredProducts.length} of {products.length} Products
            </div>
            <button
              className="btn btn-floating btn-secondary"
              onClick={toggleFilter}
              title="Filters"
            >
              <i className="fa-solid fa-sliders" aria-hidden="true"></i>
            </button>
          </div>

          <section className="product-main">
            {filteredProducts.map((product) => (
              <ProductCard product={product} key={product._id} />
            ))}
          </section>
        </div>
      ) : (
        <p className="text-center">
          Whoops! We don't have any products that match your preference :(
        </p>
      )}
    </section>
  );
};

export { ProductListing };
