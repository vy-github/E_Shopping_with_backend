import { useState } from "react";
import ItemContext from "./ItemContext";
import { useHistory } from "react-router-dom";

import React from "react";

const ItemState = (props) => {
  const host = "http://localhost:5000";
  const itemsInitial = [];
  const [items, setItems] = useState(itemsInitial);
  const [nameOfUser, setNameOfUser] = useState("");
  const [signupError, setSignupError] = useState("");
  const [loginError, setLoginError] = useState(false);

  const history = useHistory();

  // Get all items
  const getItems = async () => {
    // API Call
    const response = await fetch(`${host}/fetch`, {
      method: "GET",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const json = await response.json();
    setItems(json);
  };

  // Registration
  const newSignup = async (firstname, lastname, eid, mobile, password) => {
    // TODO: API Call
    // console.log(`${firstname} ${lastname} ${eid} ${mobile} ${password}`);
    const response = await fetch(`${host}/newuser`, {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ firstname, lastname, eid, mobile, password }),
    });

    const json = await response.json();
    if (!json.firstname) {
      setSignupError(json.errors[0].msg);
    }
    // console.log(json);

    // logic to add in client
    let nameOfUser =
      firstname.slice(0, 1).toUpperCase() + lastname.slice(0, 1).toUpperCase();
    setNameOfUser(nameOfUser);
    if (nameOfUser !== "") {
      history.push("/");
      setSignupError("");
    }
  };

  // Login
  const login = async (eid, password) => {
    // TODO: API Call

    const response = await fetch(`${host}/login`, {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ eid, password }),
    });

    const json = await response.json();

    // console.log(json);

    if (json.error === "Please try to login with correct credentials") {
      setLoginError(true);
      return;
    }
    let nameOfUser =
      json.firstname.slice(0, 1).toUpperCase() +
      json.lastname.slice(0, 1).toUpperCase();
    setNameOfUser(nameOfUser);
    if (nameOfUser !== "") {
      history.push("/");
      setLoginError(false);
    }
  };

  // Logout
  const logout = () => {
    setNameOfUser("");
    history.push("/login-signup");
  };

  return (
    <ItemContext.Provider
      value={{
        items,
        getItems,
        nameOfUser,
        loginError,
        setLoginError,
        login,
        signupError,
        setSignupError,
        newSignup,
        logout,
      }}
    >
      {props.children}
    </ItemContext.Provider>
  );
};

export default ItemState;
