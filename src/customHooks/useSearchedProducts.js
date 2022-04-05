const useSearchedProducts = (products, searchVal) => {
  return products.filter((product) => {
    if (searchVal.trim() === "") {
      return product;
    } else if (
      product.title.toLowerCase().includes(searchVal.toLowerCase().trim())
    ) {
      return product;
    }
  });
};

export { useSearchedProducts };
