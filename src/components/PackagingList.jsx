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
  const render = (item, i) => (
    <List item={item} del={del} key={i}/>
  );

  return (
    <div className="list">
      <ul>{props.initialItems.map(render)}</ul>
    </div>
  );
};

export default PackagingList;
