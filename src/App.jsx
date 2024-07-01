import "./App.css";
import { Route, Routes } from "react-router-dom";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";
import Account from "./pages/Account";

function App() {
  return (
    <div className="bg-[#fefffe]">
      <Routes>
        <Route path="/*" element={<ProductDetails />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/account/*" element={<Account />} />
      </Routes>
    </div>
  );
}

export default App;
