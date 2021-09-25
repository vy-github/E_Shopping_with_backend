import React, { useContext } from "react";
import ItemContext from "../../context/ItemContext";
import Item from "../Item/Item";
import "./Home.scss";

const Home = () => {
  const context = useContext(ItemContext);
  const { items, filterItems } = context;

  return (
    <>
      <h1 id="main-heading">All Items</h1>
      <div className="container">
        {filterItems === "allitem" &&
          items.map((item) => {
            return <Item key={item._id} item={item} />;
          })}

        {filterItems !== "allitem" &&
          items
            .filter((item) => item.category === filterItems)
            .map((filteredTask) => (
              <Item key={filteredTask._id} item={filteredTask} />
            ))}
      </div>
    </>
  );
};

export default Home;
