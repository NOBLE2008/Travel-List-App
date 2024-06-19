import React from 'react'

const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: false },
];

const Item = (props) => {
  return (
    <h1>{props.description}</h1>
  )
}

export default Item
