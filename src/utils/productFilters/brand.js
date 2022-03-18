const getBrandedProducts = (brand, products) => {
  if (brand.length > 0) {
    return [...products].filter((product) =>
      brand.includes(product.brand) ? product : null
    );
  }
  return products;
};

export { getBrandedProducts };
