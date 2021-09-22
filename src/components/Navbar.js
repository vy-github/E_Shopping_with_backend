import React, { useState, useLayoutEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Cart from "./Cart";
import "./Navbar.scss";

function useWindowSize() {
  const [size, setSize] = useState(window.innerWidth);
  useLayoutEffect(() => {
    function updateSize() {
      setSize(window.innerWidth);
    }
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);
  return size;
}

const Navbar = () => {
  let location = useLocation();

  const [toggleHamburger, setToggleHamburger] = useState(false);

  return (
    <nav>
      <div className={`nav-area${toggleHamburger ? " active" : ""}`}>
        <div className="menus">
          <Link to="/" className={location.pathname === "/" ? "active" : ""}>
            <h2>Shopping</h2>
          </Link>

          <div className="menu-item">
            <ul className={toggleHamburger ? " active" : ""}>
              <li>
                <Link
                  to="/men"
                  className={location.pathname === "/men" ? "active" : ""}
                >
                  Men
                </Link>
              </li>
              <li>
                <Link
                  to="/women"
                  className={location.pathname === "/women" ? "active" : ""}
                >
                  Women
                </Link>
              </li>
              <li>
                <Link
                  to="/kids"
                  className={location.pathname === "/kids" ? "active" : ""}
                >
                  Kids
                </Link>
              </li>
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
