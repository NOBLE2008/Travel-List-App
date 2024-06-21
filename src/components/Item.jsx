const Item = (props) => {
  return <li>
    <span>
    <input type="checkbox" />{props.item.description} <pre onClick={props.setInitial(props.item.id)}>❌</pre>
  </span>
    </li>
};

export default Item;
