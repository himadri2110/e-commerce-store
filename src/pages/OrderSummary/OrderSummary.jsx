import "./OrderSummary.css";
import { useParams, Link } from "react-router-dom";
import { Navbar } from "../../components/Navbar/Navbar";
import { Footer } from "../../components/Footer/Footer";
import { useOrder } from "../../contexts/orderContext";

export const OrderSummary = () => {
  const { orderId } = useParams();
  const {
    orderState: { orders },
  } = useOrder();

  const latestOrder = orders.find((order) => order.orderId === orderId);

  return (
    <div className="page-wrapper">
      <Navbar />

      <section className="main-section order-summary-container">
        {latestOrder ? (
          <>
            <h2 className="order-summary-heading">
              Order Placed Successfully!
            </h2>

            <div className="order-summary-wrapper">
              <div>
                <div className="order" key={latestOrder?.paymentId}>
                  <div className="order-items">
                    <div className="item-name">Payment ID:</div>
                    <div>{latestOrder?.paymentId}</div>
                  </div>

                  <div className="order-items">
                    <div className="item-name">Order ID:</div>
                    <div>{latestOrder?.orderId}</div>
                  </div>

                  <div className="order-items">
                    <div className="item-name">Amount Paid:</div>
                    <div>&#8377;{latestOrder?.amount}</div>
                  </div>

                  <div className="order-items">
                    <div className="item-name">Address:</div>
                    <div>{`${latestOrder?.delivery.name}, ${latestOrder?.delivery.street}, ${latestOrder?.delivery.city} - ${latestOrder.delivery?.zipcode}, ${latestOrder?.delivery.state}, ${latestOrder.delivery?.country}`}</div>
                  </div>
                </div>
              </div>

              <div>
                <div>
                  <div className="item-name">Products Ordered:</div>
                  <div>
                    {latestOrder?.products.map((product) => (
                      <Link
                        to={`/products/${product.id}`}
                        key={product.id}
                        className="order-product"
                      >
                        <img
                          src={product.image}
                          alt={product.title}
                          className="resp-img"
                        />

                        <div>
                          <div>{product.title}</div>

                          <div className="order-items">
                            <div className="item-name">Price:</div>
                            <div>&#8377;{product.discountedPrice}</div>
                          </div>

                          <div className="order-items">
                            <div className="item-name">Qty:</div>
                            <div>{product.qty}</div>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </>
        ) : (
          <div className="text-center">
            <p>Oops! We lost your order :(</p>
            <Link to="/products" className="text-primary">
              Start shopping!
            </Link>
          </div>
        )}
      </section>

      <Footer />
    </div>
  );
};
