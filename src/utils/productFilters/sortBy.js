const getSortedProducts = (sortBy, products) => {
  if (sortBy === "HIGH_TO_LOW") {
    return [...products].sort(
      (item1, item2) => item2.discountedPrice - item1.discountedPrice
    );
  }
  if (sortBy === "LOW_TO_HIGH") {
    return [...products].sort(
      (item1, item2) => item1.discountedPrice - item2.discountedPrice
    );
  }

  return products;
};

export { getSortedProducts };
