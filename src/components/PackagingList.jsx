import { useState } from "react";

const PackagingList = () => {
  const [initialItems, setInitial] = useState([
    { id: 'bznonx45', description: "Passports", quantity: 2, packed: false },
    { id: 'hssh84', description: "Socks", quantity: 12, packed: false },
    { id: 'ainozs849s', description: "Shoes", quantity: 1, packed: false },
    { id: 'beang585na', description: "Shirts", quantity: 1, packed: false },
    { id: 'fngoi9syh', description: "Pants", quantity: 1, packed: false },
  ]);
  

  const del = (num) => {
    return () => {
      return setInitial((item) => {
        return item.filter((ite) => ite.id!== num);
      });
    }
  };
  const render = (item, num) => (
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
