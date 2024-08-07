import { Routes, Route } from "react-router-dom";
import "./App.css";
// import Footer from "./components/Footer";
// import Header from "./components/Header";
import LoginForm from "./pages/LoginForm";
import RegisterForm from "./pages/RegisterForm";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";
import Account from "./pages/Account";


function App() {
  return (
    <>
      {/* <Header /> */}
      <Routes>
        <Route path="/*" element={<ProductDetails />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/account/*" element={<Account />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="*" element={<p>Page Not found </p>} />
      </Routes>
      {/* There would be a routing or Action btn in the header component(sign In) */}
    </>

  );
}

export default App;
