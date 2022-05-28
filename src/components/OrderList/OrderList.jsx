import "./OrderList.css";
import { useOrder } from "../../contexts/orderContext";
import { Link } from "react-router-dom";

const OrderList = () => {
  const {
    orderState: { orders },
  } = useOrder();

  return (
    <div className="orders-container">
      {orders?.length ? (
        [...orders].reverse().map((order) => {
          const { paymentId, orderId, amount, delivery, products } = order;
          return (
            <div className="order" key={paymentId}>
              <div className="order-items">
                <div className="item-name">Payment ID:</div>
                <div>{paymentId}</div>
              </div>

              <div className="order-items">
                <div className="item-name">Order ID:</div>
                <div>{orderId}</div>
              </div>

              <div className="order-items">
                <div className="item-name">Amount Paid:</div>
                <div>&#8377;{amount}</div>
              </div>

              <div className="order-items">
                <div className="item-name">Address:</div>
                <div>{`${delivery.name}, ${delivery.street}, ${delivery.city} - ${delivery.zipcode}, ${delivery.state}, ${delivery.country}`}</div>
              </div>

              <div>
                <div className="item-name">Products Ordered:</div>
                <div>
                  {products.map((product) => (
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
          );
        })
      ) : (
        <p>No orders placed.</p>
      )}
    </div>
  );
};

export { OrderList };
