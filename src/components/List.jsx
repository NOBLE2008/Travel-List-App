import React from "react";

const List = ({ item, del, update }) => {
  return (
    <li>
      <span>
        <input type="checkbox" onChange={update(item.id)}/>
        <p className={`${item.packed ? "line" : ""}`}>
          {item.description} {item.quantity}
        </p>
        <pre onClick={del(item.id)} className={`del`}>
          ❌
        </pre>
      </span>
    </li>
  );
};

export default List;
