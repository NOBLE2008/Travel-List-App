const Item = (props) => {
  return <li>
    <span>
    <input type="checkbox" />{props.item.description} <pre>❌</pre>
  </span>
    </li>
};

export default Item;
