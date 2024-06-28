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
            return {...ite, packed:!ite.packed };
          }
          return ite;
        });
      });
    };
  }
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
