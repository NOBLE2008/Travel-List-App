import React from 'react'

const List = ({item, del}) => {
  return (
  <li>
    <span>
      <input type="checkbox" />
      {item.description} {item.quantity}
      <pre onClick={del(item.id)} className="del">❌</pre>
    </span>
  </li>
  )
}

export default List
