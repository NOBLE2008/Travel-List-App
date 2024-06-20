import Item from "./Item";

const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: false },
  { id: 3, description: "Shoes", quantity: 1, packed: false },
  { id: 4, description: "Shirts", quantity: 1, packed: false },
  { id: 5, description: "Pants", quantity: 1, packed: false },
];

const render = (item, i) => (
  <Item item={item} key={i}/> 
)
const PackagingList = () => {
  return <div className="list">
    <ul>
      {initialItems.map()}
    </ul>
  </div>;
};

export default PackagingList;
