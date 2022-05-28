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
  selectedAddrId: null,
  formData: initialUserObj,
  formError: {
    zipcodeError: false,
    mobileError: false,
  },
};

const addressReducer = (state, { type, payload }) => {
  switch (type) {
    case "GET_ADDRESS":
      return {
        ...state,
        addresses: payload,
        selectedAddrId: payload ? payload[0]?._id : null,
      };
    case "SET_ADDRESS_ID":
      return { ...state, selectedAddrId: payload };
    case "SET_INPUT":
      return {
        ...state,
        formData: { ...state.formData, [payload.name]: payload.value },
      };
    case "SET_DUMMY_ADDR":
      return {
        ...state,
        formData: payload,
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
    case "RESET_FORM":
      return { ...state, formData: payload };
    default:
      return state;
  }
};

export { addressReducer, initialState, initialUserObj };
