import React from 'react'

const List = ({item, del, update}) => {
  return (
  <li>
    <span>
      <input type="checkbox" onChange={update(item.id)}/>
      {item.description} {item.quantity}
      <pre onClick={del(item.id)} className={`del ${item.packed===true ? 'line': ''}`}>❌</pre>
    </span>
  </li>
  )
}

export default List
