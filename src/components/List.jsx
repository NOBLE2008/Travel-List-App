import React from 'react'

const List = ({item, del, update}) => {
  return (
  <li>
    <span>
      <input type="checkbox" onChange={update(item.id)}/>
      <p>{item.description} {item.quantity}</p>
      <pre onClick={del(item.id)} className={`del ${item.packed ? 'line': ''}`}>❌</pre>
    </span>
  </li>
  )
}

export default List
