import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter as Router } from "react-router-dom";
import { ProductProvider } from "./contexts/productContext";
import { AuthProvider } from "./contexts/authContext";
import { WishlistProvider } from "./contexts/wishlistContext";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <AuthProvider>
        <ProductProvider>
          <WishlistProvider>
            <App />
          </WishlistProvider>
        </ProductProvider>
      </AuthProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
