import React from "react";
import List from "./List";
const PackagingList = (props) => {
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
  const render = (item, i) => (
    <List item={item} del={del} key={i} update={update} />
  );

  return (
    <div className="list">
      <ul>{props.initialItems.map(render)}</ul>
      <div className="actions">
        <select>
          <option value="input"></option>
          <option value="description"></option>
          <option value="packed"></option>
        </select>
      </div>
    </div>
  );
};

export default PackagingList;
