import { useState } from "react";
import ItemContext from "./ItemContext";

import React from "react";

const ItemState = (props) => {
  const host = "http://localhost:5000";
  const itemsInitial = [];
  const [items, setItems] = useState(itemsInitial);

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

  // const newSignup = async (firstname,lastname, eid, mobile, pass) => {
  //   // TODO: API Call
  //   const response = await fetch(`${host}/api/notes/addnote`, {
  //     method: "POST",
  //     mode: "cors",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({ title, description, tag }),
  //   });

  //   // logic to add in client
  //   let note = {
  //     title: title,
  //     description: description,
  //     tag: tag,
  //   };
  // };

  return (
    <ItemContext.Provider value={{ items, getItems }}>
      {props.children}
    </ItemContext.Provider>
  );
};

export default ItemState;
