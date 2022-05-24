const initialUserObj = {
  name: "",
  street: "",
  city: "",
  state: "",
  zipcode: "",
  country: "",
  mobile: "",
};

const initialState = {
  addresses: [],
  formData: initialUserObj,
  formError: {
    zipcodeError: false,
    mobileError: false,
  },
};

const addressReducer = (state, { type, payload }) => {
  switch (type) {
    case "GET_ADDRESS":
      return { ...state, addresses: payload };
    case "SET_INPUT":
      return {
        ...state,
        formData: { ...state.formData, [payload.name]: payload.value },
      };
    case "EDIT_INPUT":
      return { ...state, formData: payload.data };
    case "ZIPCODE_ERROR":
      return {
        ...state,
        formError: { ...state.formError, zipcodeError: payload.zipcodeError },
      };
    case "MOBILE_ERROR":
      return {
        ...state,
        formError: { ...state.formError, mobileError: payload.mobileError },
      };
    default:
      return state;
  }
};

export { addressReducer, initialState };
