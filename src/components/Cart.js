import React from "react";
import { FaShoppingCart } from "react-icons/fa";

const Cart = () => {
  return (
    <div className="cart">
      <FaShoppingCart color="#c2f1db" fontSize="30px" />
      <div className="cart-count">
        <h4>1</h4>
      </div>
    </div>
  );
};

export default Cart;
