const orderReducer = (state, { type, payload }) => {
  switch (type) {
    case "GET_ORDERS":
      return { ...state, orders: payload };
  }
};

export { orderReducer };
