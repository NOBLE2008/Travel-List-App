import React from "react";
const PackagingList = (props) => {
  

  const del = (num) => {
    return () => {
      return props.setInitial((item) => {
        return item.filter((ite) => ite.id!== num);
      });
    }
  };
  const render = (item) => (
    <li>
      <span>
        <input type="checkbox" />
        {item.description}{" "}
        <pre
          onClick={del(item.id)}
        >
          ❌
        </pre>
      </span>
    </li>
  );

  return (
    <div className="list">
      <ul>{props.initialItems.map(render)}</ul>
    </div>
  );
};

export default PackagingList;
