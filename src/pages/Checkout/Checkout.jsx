import "./Checkout.css";
import { Navbar } from "../../components/Navbar/Navbar";
import { Footer } from "../../components/Footer/Footer";
import { useAddress } from "../../contexts/addressContext";
import { OrderDetails } from "./OrderDetails";

export const Checkout = () => {
  const {
    addressState: { addresses, selectedAddrId },
    dispatchAddress,
  } = useAddress();

  return (
    <div className="page-wrapper">
      <Navbar />

      <section className="main-section checkout-container">
        <div className="heading-3">Checkout</div>

        <div className="checkout-wrapper">
          <div className="checkout-address">
            <div className="address-list">
              {addresses.length ? (
                addresses.map((address) => (
                  <label className="address" key={address._id}>
                    <input
                      type="radio"
                      name="address"
                      checked={selectedAddrId === address._id}
                      onChange={() =>
                        dispatchAddress({
                          type: "SET_ADDRESS_ID",
                          payload: address._id,
                        })
                      }
                    />

                    <div>
                      <div className="address-name">{address.name}</div>
                      <div>{address.street},</div>
                      <div>
                        {address.city} - {address.zipcode}
                      </div>
                      <div>
                        {address.state}, {address.country}
                      </div>
                      <div>{address.mobile}</div>
                    </div>
                  </label>
                ))
              ) : (
                <>
                  <p>No address available.</p>
                  <p>
                    <Link className="btn-link" to={"/profile/addresses"}>
                      Add address
                    </Link>
                  </p>
                </>
              )}
            </div>
          </div>

          <OrderDetails />
        </div>
      </section>

      <Footer />
    </div>
  );
};
