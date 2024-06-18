import "./App.css";
import { Route, Routes } from "react-router-dom";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";

function App() {
  return (
    <>
      <Routes>
        <Route path="/*" element={<ProductDetails />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </>
  );
}

export default App;
