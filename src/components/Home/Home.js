import React, { useEffect, useContext } from "react";
import ItemContext from "../../context/ItemContext";
import Item from "../Item/Item";
import "./Home.scss";

const Home = () => {
  const context = useContext(ItemContext);
  const { items, getItems } = context;

  useEffect(() => {
    getItems();
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <h1 id="main-heading">All Items</h1>
      <div className="container">
        {items.map((item) => {
          return <Item key={item._id} item={item} />;
        })}
      </div>
    </>
  );
};

export default Home;
