import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import ItemContext from "../../context/ItemContext";

const Cart = () => {
  const context = useContext(ItemContext);
  const { nameOfUser, logout } = context;

  const [showLogout, setShowLogout] = useState(false);

  return (
    <div className="cart">
      <FaShoppingCart className="actual-cart" color="#c2f1db" fontSize="30px" />
      <div className="cart-count">
        <h4>1</h4>
      </div>
      {nameOfUser === "" ? (
        <Link to="/login-signup" className="login-entry login-entry-in-cart">
          LOGIN/SIGNUP
        </Link>
      ) : (
        <>
          <div
            className="name-of-user login-entry-in-cart"
            onClick={() => setShowLogout(!showLogout)}
          >
            {nameOfUser}
          </div>
          <div
            className={`logout ${showLogout ? "logout-active-cart" : ""}`}
            onMouseLeave={() => setShowLogout(false)}
          >
            <button
              onClick={() => {
                logout();
                setShowLogout(false);
              }}
            >
              Logout
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
