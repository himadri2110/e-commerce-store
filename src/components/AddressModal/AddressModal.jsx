import "./AddressModal.css";
import { useAddress } from "../../contexts/addressContext";

export const AddressModal = ({ setShowAddrModal }) => {
  const {
    addressState: { formData, formError },
    dispatchAddress,
    submitFormHandler,
  } = useAddress();

  const formInputHandler = (e) => {
    const { name, value } = e.target;

    dispatchAddress({ type: "SET_INPUT", payload: { name, value } });

    if (name === "zipcode") {
      const zipcodeError =
        value.length > 0 && !/^([1-9]{1}[0-9]{3}|[1-9]{1}[0-9]{5})$/.test(value)
          ? true
          : false;

      dispatchAddress({ type: "ZIPCODE_ERROR", payload: { zipcodeError } });
    }

    if (name === "mobile") {
      const mobileError =
        value.length > 0 && !/^[1-9]{1}[0-9]{9}$/.test(value) ? true : false;
      dispatchAddress({ type: "MOBILE_ERROR", payload: { mobileError } });
    }
  };

  return (
    <div className="address-form-wrapper">
      <h3>Add New Address</h3>

      <form
        className="form-group"
        onSubmit={(e) => {
          submitFormHandler(e);
          setShowAddrModal(false);
        }}
      >
        <div className="input-group input input-primary">
          <label className="input-label">
            <div>Name</div>
            <input
              type="text"
              name="name"
              value={formData.name || ""}
              onChange={formInputHandler}
              required
            />
          </label>
        </div>

        <div className="input-group input input-primary">
          <label className="input-label">
            <div>Street</div>
            <input
              type="text"
              name="street"
              value={formData.street || ""}
              onChange={formInputHandler}
              required
            />
          </label>
        </div>

        <div className="input-group input input-primary ">
          <label className="input-label">
            <div>City</div>
            <input
              type="text"
              name="city"
              value={formData.city || ""}
              onChange={formInputHandler}
              required
            />
          </label>
        </div>

        <div className="input-group input input-primary">
          <label className="input-label">
            <div>Zipcode</div>
            <input
              type="text"
              name="zipcode"
              maxLength="6"
              value={formData.zipcode || ""}
              onChange={formInputHandler}
              required
            />

            {formError.zipcodeError ? (
              <div className="input-error-msg">Invalid Zipcode</div>
            ) : null}
          </label>
        </div>

        <div className="input-group input input-primary">
          <label className="input-label">
            <div>State</div>
            <input
              type="text"
              name="state"
              value={formData.state || ""}
              onChange={formInputHandler}
              required
            />
          </label>
        </div>

        <div className="input-group input input-primary">
          <label className="input-label">
            <div>Country</div>
            <input
              type="text"
              name="country"
              value={formData.country || ""}
              onChange={formInputHandler}
              required
            />
          </label>
        </div>

        <div className="input-group input input-primary">
          <label className="input-label">
            <div>Mobile</div>
            <input
              type="text"
              name="mobile"
              maxLength="10"
              value={formData.mobile || ""}
              onChange={formInputHandler}
              required
            />
            {formError.mobileError ? (
              <div className="input-error-msg">Invalid Mobile Number</div>
            ) : null}
          </label>
        </div>

        <div className="form-action">
          {Object.values(formData).every((value) => value.length > 0) &&
          !formError.zipcodeError &&
          !formError.mobileError ? (
            <button className="btn btn-primary" type="submit">
              Add
            </button>
          ) : (
            <button
              className="btn btn-primary btn-disabled"
              type="submit"
              disabled
            >
              Add
            </button>
          )}

          <button
            className="btn btn-secondary"
            onClick={() => setShowAddrModal(false)}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};
