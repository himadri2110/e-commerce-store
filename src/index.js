import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter as Router } from "react-router-dom";
import { ProductProvider } from "./contexts/productContext";
import { AuthProvider } from "./contexts/authContext";
import { WishlistProvider } from "./contexts/wishlistContext";
import { CartProvider } from "./contexts/cartContext";
import { AddressProvider } from "./contexts/addressContext";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <AuthProvider>
        <ProductProvider>
          <WishlistProvider>
            <CartProvider>
              <AddressProvider>
                <App />
              </AddressProvider>
            </CartProvider>
          </WishlistProvider>
        </ProductProvider>
      </AuthProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
