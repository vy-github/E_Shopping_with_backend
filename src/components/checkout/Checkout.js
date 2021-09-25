import React, { useContext } from "react";
import ItemContext from "../../context/ItemContext";
import "./Checkout.scss";

const CheckoutItem = (props) => {
  const { title, description, price } = props.item;
  return (
    <div className="card-check">
      <div className="image-area-check">
        <img
          src="https://source.unsplash.com/300x300/?products"
          alt="not found"
        />
      </div>

      <div className="content-area-check">
        <div className="title-price-area-check">
          <h2>{title}</h2>
          <p>Rs. {price}</p>
        </div>

        <div className="description-area-check">
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

const Checkout = () => {
  const context = useContext(ItemContext);
  const { cartItems } = context;

  return (
    <div>
      {cartItems.length === 0 ? (
        <h1 className="checkout-error">No item in your cart</h1>
      ) : (
        cartItems.map((item) => {
          return <CheckoutItem key={item._id} item={item} />;
        })
      )}
    </div>
  );
};

export default Checkout;
