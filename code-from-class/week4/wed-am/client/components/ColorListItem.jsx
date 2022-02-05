import React from 'react'
import { Link } from 'react-router-dom'

function ColorListItem (props) {
  const name = props.color
  const style = {color:  name } 
  return (
    <li style={style}>
      <Link style={style} to={`/color/${name}`}>{name}</Link>
    </li>
  )
}

export default ColorListItem