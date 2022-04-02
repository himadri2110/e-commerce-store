const wishlistReducer = (state, { type, payload }) => {
  switch (type) {
    case "SET_WISHLIST_DATA":
      return [...payload];
    default:
      return state;
  }
};

export { wishlistReducer };
