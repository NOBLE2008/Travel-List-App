import React, { useState } from "react";

const Form = ({setInitial}) => {
  const [newItem, setItem] = useState({
    description: undefined,
    quantity: 1,
    packed: false,
  });

  const handleChange = (e) => {
    setItem((item) => {
      return {
        ...item,
        [e.target.name]: e.target.value
      }
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setInitial((item) => {
      return [
        ...item,
        {
          id: Date.now(),
          description: description,
          quantity: quantity,
          packed: false,
        },
      ];
    });
  };
  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your trip?</h3>
      <select onChange={handleChange} value={newItem.quantity}>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option>
        <option value="10">10</option>
      </select>
      <input type="text" placeholder="Item..." value={newItem.description} onChange={handleChange}/>
      <button type="submit">Add</button>
    </form>
  );
};

export default Form;
