import React, { useState, useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import ItemContext from "../../context/ItemContext";
import Cart from "../Cart/Cart";
import "./Navbar.scss";

const Navbar = () => {
  const context = useContext(ItemContext);
  const { setFilterItems, nameOfUser, logout } = context;

  let location = useLocation();

  const [toggleHamburger, setToggleHamburger] = useState(false);

  const [showLogout, setShowLogout] = useState(false);

  return (
    <nav className={toggleHamburger ? "active" : ""}>
      <div className="nav-area">
        <div className="menus">
          <Link
            to="/"
            className={location.pathname === "/" ? "active" : ""}
            onClick={() => setFilterItems("allitem")}
          >
            <h2>Shopping</h2>
          </Link>

          <div className="menu-item">
            <ul className={toggleHamburger ? " active" : ""}>
              <li>
                <Link
                  to="/"
                  className={location.pathname === "/men" ? "active" : ""}
                  onClick={() => setFilterItems("Men")}
                >
                  MEN
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className={location.pathname === "/women" ? "active" : ""}
                  onClick={() => setFilterItems("Women")}
                >
                  WOMEN
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className={location.pathname === "/kids" ? "active" : ""}
                  onClick={() => setFilterItems("Kids")}
                >
                  KIDS
                </Link>
              </li>

              {nameOfUser !== "" && (
                <li>
                  <Link
                    to="/sell"
                    className={location.pathname === "/kids" ? "active" : ""}
                  >
                    SELL
                  </Link>
                </li>
              )}

              {nameOfUser === "" ? (
                <Link
                  to="/login-signup"
                  className="login-entry login-entry-in-menu"
                >
                  LOGIN/SIGNUP
                </Link>
              ) : (
                <>
                  <div
                    className="name-of-user login-entry-in-menu"
                    onClick={() => setShowLogout(!showLogout)}
                  >
                    {nameOfUser}
                  </div>
                  <div
                    className={`logout logout-menu ${
                      showLogout ? "logout-active-menu" : ""
                    }`}
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
            </ul>
          </div>
        </div>

        <Cart />

        <div
          className={`hamburger ${toggleHamburger ? "active" : ""}`}
          onClick={() => {
            setToggleHamburger(!toggleHamburger);
          }}
        ></div>
      </div>
    </nav>
  );
};

export default Navbar;
