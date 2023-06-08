import React from "react";
import { useState } from "react";

const NewItem = ({ addItem }) => {
  const [newItem, setNewItem] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    console.log(e);

    addItem(newItem);

    setNewItem("");
  }

  return (
    <form className="newitem-container" onSubmit={(e) => handleSubmit(e)}>
      <input
        type="text"
        className="newitem"
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
      />
      <button id="submit" type="submit">
        Add
      </button>
    </form>
  );
};

export default NewItem;
