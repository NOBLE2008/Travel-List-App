import { useState } from "react";
import Item from "./Item";

const render = (item, i) => (
  <Item item={item} key={i}/>
)
const PackagingList = () => {
  const [initialItems, setInitial] = useState([
    { id: 1, description: "Passports", quantity: 2, packed: false },
    { id: 2, description: "Socks", quantity: 12, packed: false },
    { id: 3, description: "Shoes", quantity: 1, packed: false },
    { id: 4, description: "Shirts", quantity: 1, packed: false },
    { id: 5, description: "Pants", quantity: 1, packed: false },
  ])
  return <div className="list">
    <ul>
      {initialItems.map(render)}
    </ul>
  </div>;
};

export default PackagingList;
