const getTotalPrice = (cart, price, discountInPrice, deliveryCharges) => {
  return cart.reduce((total) => {
    return (total += price + deliveryCharges - discountInPrice);
  }, 0);
};

export { getTotalPrice };
