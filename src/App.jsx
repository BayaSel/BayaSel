import { Routes, Route } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
// import Home from "./components/home/Home";
import LoginForm from "./pages/LoginForm";
import RegisterForm from "./pages/RegisterForm";
import Checkout from "./pages/Checkout";

function App() {
  return (
    <>
      {/* <Header /> */}
      <Routes>
        <Route
          path="/"
          element={
            <>
              {/* {" "} */}
              <Header />
              <Footer />
            </>
          }
        />
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="*" element={<p>Page Not found </p>} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
      {/* There would be a routing or Action btn in the header component(sign In) */}
    </>
  );
}

export default App;
