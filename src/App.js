import "./App.css";
import { ScrollToTop } from "./components/ScrollToTop/ScrollToTop";
import { NavRoutes } from "./Routes/NavRoutes";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="App">
      <NavRoutes />
      <ScrollToTop />
    </div>
  );
}

export default App;
