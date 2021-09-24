import React from "react";
// import images from "../../../public/upload/image.jpg";

const Item = (props) => {
  const { title, description, price, category, image } = props.item;
  return (
    <>
      <div className="card">
        <div className="image-area">
          <img
            src="https://source.unsplash.com/300x300/?products"
            alt="not found"
          />
        </div>

        <div className="content-area">
          <div className="title-desription-area">
            <h2>{title}</h2>
            <p>{description}</p>
          </div>

          <div className="bottom-area">
            <p>Rs. {price}</p>
            <div className="button-area">
              <button>Add to cart</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Item;
