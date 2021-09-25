import React, { useContext } from "react";
import ItemContext from "../../context/ItemContext";

const Item = (props) => {
  const { _id, title, description, price } = props.item;

  const context = useContext(ItemContext);
  const { setCartItems } = context;

  const addToCart = (e) => {
    if (e.target.innerHTML === "Add to Cart") {
      e.target.innerHTML = "Remove from Cart";
      e.target.style.background = "#DC3545";
      e.target.style.color = "#fafafa";
      setCartItems((preArray) => [...preArray, props.item]);
    } else {
      e.target.innerHTML = "Add to Cart";
      e.target.style.background =
        "linear-gradient(45deg, #c7beca, #8e9a9b, #c7beca)";
      e.target.style.backgroundSize = "200%";
      e.target.style.color = "#18383a";
      setCartItems((preArray) =>
        preArray.filter((items) => items._id !== e.target.id)
      );
    }
  };

  return (
    <div className="card">
      <div className="image-area">
        <img
          src="https://source.unsplash.com/300x300/?products"
          alt="not found"
        />
      </div>

      <div className="content-area">
        <div className="title-desription-area">
          <h2>{title.length > 20 ? title.slice(0, 20) + "..." : title}</h2>
          <p>
            {description.length > 50
              ? description.slice(0, 50) + "..."
              : description}
          </p>
        </div>

        <div className="bottom-area">
          <p>Rs. {price}</p>
          <div className="button-area">
            <button id={_id} onClick={addToCart}>
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Item;
