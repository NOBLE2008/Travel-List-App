const Item = (props) => {
  return <li>
    <span>
    <input type="checkbox" />{props.item.description} ❌
  </span>
    </li>
};

export default Item;
