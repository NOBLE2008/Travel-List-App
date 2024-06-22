import { useState } from "react";

const PackagingList = () => {
  const [initialItems, setInitial] = useState([]);
  

  const del = (num) => {
    return () => {
      return setInitial((item) => {
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
      <ul>{initialItems.map(render)}</ul>
    </div>
  );
};

export default PackagingList;
