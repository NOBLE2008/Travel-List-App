import React, { useState } from "react";
import List from "./List";
const PackagingList = (props) => {
  const [order, setOrder] = useState("input");

  let sortItems;
  if (order === "input") sortItems = props.initialItems;
  if (order === "description")
    sortItems = props.initialItems
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));
  if(order === 'packed') sortItems = props.initialItems.slice().sort((a, b) => Number(a.packed) - Number(b.packed));
  const del = (num) => {
    return () => {
      return props.setInitial((item) => {
        return item.filter((ite) => ite.id !== num);
      });
    };
  };
  const update = (num) => {
    return () => {
      return props.setInitial((item) => {
        return item.map((ite) => {
          if (num === ite.id) {
            return { ...ite, packed: !ite.packed };
          }
          return ite;
        });
      });
    };
  };

  const delAll = () => {
    return () => {
      return props.setInitial([])
    }
  }
  const render = (item, i) => (
    <List item={item} del={del} key={i} update={update} />
  );

  return (
    <div className="list">
      <ul>{sortItems.map(render)}</ul>
      <div className="actions">
        <select value={order} onChange={(e) => setOrder(e.target.value)}>
          <option value="input">Sort by input order</option>
          <option value="description">Sort by description</option>
          <option value="packed">Sort by packed status</option>
        </select>
        <button onClick={delAll()}>Clear All</button>
      </div>
    </div>
  );
};

export default PackagingList;
