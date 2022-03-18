const getPriceRangeProducts = (priceRange, products) => {
  return [...products].filter(
    (product) => Number(product.discountedPrice) <= priceRange
  );
};

export { getPriceRangeProducts };
