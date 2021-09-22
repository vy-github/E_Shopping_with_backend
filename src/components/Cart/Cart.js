import React from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";

const Cart = () => {
  return (
    <div className="cart">
      <FaShoppingCart color="#c2f1db" fontSize="30px" />
      <div className="cart-count">
        <h4>1</h4>
      </div>
      <Link to="/login-signup" className="login-entry login-entry-in-cart">
        LOGIN/SIGNUP
      </Link>
    </div>
  );
};

export default Cart;
