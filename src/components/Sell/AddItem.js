import React, { useState, useContext } from "react";
import ItemContext from "../../context/ItemContext";
import "./AddItem.scss";

const AddItem = () => {
  const context = useContext(ItemContext);
  const { addItem, errorMsg, setErrorMsg, errorCondition, setErrorCondition } =
    context;

  const [itemData, setItemData] = useState({
    title: "",
    description: "",
    price: "",
    category: "Category",
    filename: "",
  });

  const handleAddItem = (e) => {
    e.preventDefault();
    if (
      itemData.title !== "" &&
      itemData.description !== "" &&
      itemData.price !== "" &&
      itemData.category !== "Category"
    )
      addItem(
        itemData.title,
        itemData.description,
        itemData.price,
        itemData.category
        // itemData.filename
      );
    else setErrorMsg("All fields are mandatory");

    if (errorCondition) {
      itemData.title = "";
      itemData.description = "";
      itemData.price = "";
      itemData.category = "Category";
      itemData.filename = "";
      setErrorCondition(false);
    }
  };

  return (
    <div>
      <form
        action=""
        className="content content-addition"
        encType="multipart/form-data"
      >
        <h1>Add Item</h1>

        <div className="input-con">
          <input
            type="text"
            value={itemData.title}
            onChange={(e) => {
              setItemData((preState) => ({
                ...preState,
                title: e.target.value,
              }));
              setErrorMsg("");
            }}
            required
          />
          <span>Product name</span>
        </div>

        <div className="input-con">
          <textarea
            value={itemData.description}
            onChange={(e) => {
              setItemData((preState) => ({
                ...preState,
                description: e.target.value,
              }));
              setErrorMsg("");
            }}
            required
          ></textarea>
          <span>Description</span>
        </div>

        <div className="input-con">
          <input
            type="text"
            value={itemData.price}
            onChange={(e) => {
              setItemData((preState) => ({
                ...preState,
                price: e.target.value,
              }));
              setErrorMsg("");
            }}
            required
          />
          <span>Product price</span>
        </div>

        <div className="input-con time">
          <select
            id="hours"
            value={itemData.category}
            onChange={(e) => {
              setItemData((preState) => ({
                ...preState,
                category: e.target.value,
              }));
              setErrorMsg("");
            }}
          >
            <option value="Category">Category</option>
            <option value="Men">Men</option>
            <option value="Women">Women</option>
            <option value="Kids">Kids</option>
          </select>
        </div>

        {/* <div className="input-con">
          <input
            type="file"
            name="image"
            value={itemData.filename}
            onChange={(e) => {
              setItemData((preState) => ({
                ...preState,
                filename: e.target.value,
              }));
              setErrorMsg("");
            }}
            required
          />
        </div> */}

        <div style={{ height: "20px", margin: "10px 0" }}>
          {errorMsg !== "" && <p className="errorMsg">{errorMsg}</p>}
        </div>

        <div className="input-con">
          <button onClick={handleAddItem}>Add</button>
        </div>
      </form>
    </div>
  );
};

export default AddItem;
