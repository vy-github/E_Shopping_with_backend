import { useState } from "react";
import ItemContext from "./ItemContext";
import { useHistory } from "react-router-dom";

import React from "react";

const ItemState = (props) => {
  const host = "http://localhost:5000";
  const itemsInitial = [];
  const [items, setItems] = useState(itemsInitial);
  const [nameOfUser, setNameOfUser] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [errorCondition, setErrorCondition] = useState(false);

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

  // Add Item
  const addItem = async (title, description, price, category) => {
    // TODO: API Call
    // console.log(image);
    // image = image.replace(/\\/g, "/");
    // console.log(image);
    // console.log({ title, description, price, image });

    const response = await fetch(`${host}/additem`, {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title, description, price, category }),
    });

    const json = await response.json();
    if (!json.title) {
      return setErrorMsg(json.errors[0].msg);
    }

    // console.log(json);

    // Add item to state
    setItems((preState) => [{ ...preState, json }]);
    setErrorCondition(true);

    // logic to add in item
    // let nameOfUser =
    //   firstname.slice(0, 1).toUpperCase() + lastname.slice(0, 1).toUpperCase();
    // setNameOfUser(nameOfUser);
    // if (nameOfUser !== "") {
    //   history.push("/");
    //   setErrorMsg("");
    // }
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
      return setErrorMsg(json.errors[0].msg);
    }
    // console.log(json);

    // logic to add name of user
    let nameOfUser =
      firstname.slice(0, 1).toUpperCase() + lastname.slice(0, 1).toUpperCase();
    setNameOfUser(nameOfUser);
    if (nameOfUser !== "") {
      history.push("/");
      setErrorMsg("");
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
      setErrorCondition(true);
      return;
    }
    let nameOfUser =
      json.firstname.slice(0, 1).toUpperCase() +
      json.lastname.slice(0, 1).toUpperCase();
    setNameOfUser(nameOfUser);
    if (nameOfUser !== "") {
      history.push("/");
      setErrorCondition(false);
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
        errorMsg,
        addItem,
        getItems,
        nameOfUser,
        errorCondition,
        setErrorCondition,
        login,
        setErrorMsg,
        newSignup,
        logout,
      }}
    >
      {props.children}
    </ItemContext.Provider>
  );
};

export default ItemState;
