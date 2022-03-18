const getInStockProducts = (inStock, products) => {
  if (inStock) return [...products].filter((product) => product.inStock);

  return products;
};

export { getInStockProducts };
