import "./AddressList.css";
import { useState } from "react";
import { useAddress } from "../../contexts/addressContext";
import { AddressModal } from "../AddressModal/AddressModal";

const AddressList = () => {
  const {
    addressState: { addresses },
    dispatchAddress,
    deleteAddressHandler,
  } = useAddress();

  const [showAddrModal, setShowAddrModal] = useState(false);

  const editAddress = (data) => {
    setShowAddrModal(true);
    dispatchAddress({ type: "EDIT_INPUT", payload: { data } });
  };

  return (
    <div className="address-container">
      <button
        className="btn btn-primary add-address"
        onClick={() => setShowAddrModal(true)}
      >
        <i className="fa-solid fa-plus"></i>Add address
      </button>

      <div className="address-list">
        {addresses?.length ? (
          addresses?.map((address) => (
            <div key={address._id} className="address">
              <p className="name">{address.name}</p>
              <p>{address.street},</p>
              <p>
                {address.city} - {address.zipcode}
              </p>
              <p>
                {address.state}, {address.country}
              </p>
              <p>{address.mobile}</p>

              <div className="address-action">
                <button
                  className="btn outline-primary"
                  onClick={() => editAddress(address)}
                >
                  Edit
                </button>
                <button
                  className="btn outline-danger"
                  onClick={() => deleteAddressHandler(address._id)}
                >
                  Delete
                </button>
              </div>
            </div>
          ))
        ) : (
          <p>No address found.</p>
        )}
      </div>
      {showAddrModal ? (
        <div className="address-modal">
          <AddressModal setShowAddrModal={setShowAddrModal} />
        </div>
      ) : null}
    </div>
  );
};

export { AddressList };
