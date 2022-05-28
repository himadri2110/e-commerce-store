import { createContext, useContext, useReducer, useEffect } from "react";
import { orderReducer } from "../reducers/orderReducer";
import { useAuth } from "./authContext";
import { getOrderService } from "../services/orderServices/getOrderService";

const OrderContext = createContext();

const OrderProvider = ({ children }) => {
  const [orderState, dispatchOrder] = useReducer(orderReducer, { orders: [] });
  const { token } = useAuth();

  useEffect(() => {
    if (token) {
      (async () => {
        try {
          const { data, status } = await getOrderService(token);

          if (status === 200) {
            dispatchOrder({ type: "GET_ORDERS", payload: data.order });
          }
        } catch (err) {
          console.error(err);
        }
      })();
    }
  }, [token]);

  return (
    <OrderContext.Provider value={{ orderState, dispatchOrder }}>
      {children}
    </OrderContext.Provider>
  );
};

const useOrder = () => useContext(OrderContext);

export { OrderProvider, useOrder };
