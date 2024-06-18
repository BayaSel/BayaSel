import Header from "../components/Header";
import Footer from "../components/Footer";
import CartHeader from "../components/CartHeader";
import CartProduct from "../components/CartProduct";
import "../components/Styles/cart.css";
import { useState } from "react";

function Cart() {
  const [deleteItem, setDeleteItem] = useState(false);
  function itemRemove() {
    setDeleteItem(true);
  }
  return (
    <>
      <Header />
      <CartHeader />
      {deleteItem ? (
        <p style={{ height: "50svh", display: "grid", placeContent: "center" }}>
          All product clear
        </p>
      ) : (
        <CartProduct itemRemoved={itemRemove} />
      )}
      <Footer />
    </>
  );
}

export default Cart;
