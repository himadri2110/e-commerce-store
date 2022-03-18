const getFastDeliveryProducts = (fastDelivery, products) => {
  if (fastDelivery)
    return [...products].filter((product) => product.fastDelivery);

  return products;
};

export { getFastDeliveryProducts };
