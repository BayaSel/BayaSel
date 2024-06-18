import "./App.css";
import { Route, Routes } from "react-router-dom";
import ProductDetails from "./pages/ProductDetails";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Cart from "./pages/Cart";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<ProductDetails />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
