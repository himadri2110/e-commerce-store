const getPrice = (cart) => {
  return cart.reduce((price, currentItem) => {
    return (price += Number(currentItem.price) * Number(currentItem.qty));
  }, 0);
};

export { getPrice };
