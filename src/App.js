import "./App.css";
import { ScrollToTop } from "./components/ScrollToTop/ScrollToTop";
import { NavRoutes } from "./Routes/NavRoutes";
import { useEffect } from "react";
import { Toaster } from "react-hot-toast";

function App() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="App">
      <Toaster
        position="top-right"
        reverseOrder={false}
        containerStyle={{
          top: "4rem",
        }}
      />
      <NavRoutes />
      <ScrollToTop />
    </div>
  );
}

export default App;
