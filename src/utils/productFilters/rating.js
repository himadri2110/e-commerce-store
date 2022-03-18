const getRatedProducts = (rating, products) => {
  return [...products].filter((product) => product.rating >= rating);
};

export { getRatedProducts };
