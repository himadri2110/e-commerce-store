import "./ProductListing.css";
import { ProductCard } from "../ProductCard/ProductCard";
import { useEffect } from "react";
import axios from "axios";
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

const ProductListing = () => {
  const { productState, productDispatch, toggleFilter, showFilter } =
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

  const brandedProducts = getBrandedProducts(brand, products);
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

  useEffect(() => {
    (async () => {
      const { data } = await axios.get("/api/products");

      data.products = data.products.map((product) => ({
        ...product,
        discountedPrice: (
          product.price -
          (product.price * product.discount) / 100
        ).toFixed(0),
      }));

      productDispatch({
        type: "DISPLAY_PRODUCTS",
        payload: { data: data.products },
      });
    })();
  }, []);

  return (
    <section className={`product-wrapper ${showFilter ? "hide-div" : null}`}>
      {filteredProducts.length > 0 ? (
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
              <i className="fa fa-filter" aria-hidden="true"></i>
            </button>
          </div>

          <section className="product-main">
            {filteredProducts.map((product) => {
              return <ProductCard product={product} key={product._id} />;
            })}
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
