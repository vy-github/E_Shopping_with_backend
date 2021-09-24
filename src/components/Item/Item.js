import React from "react";

const Item = (props) => {
  const { title, description, price } = props.item;
  return (
    <>
      <div>
        <h2>{title}</h2>
        <h2>{description}</h2>
        <h2>{price}</h2>
      </div>
    </>
  );
};

export default Item;
