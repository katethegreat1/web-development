import React from 'react'
import { Link, Outlet } from 'react-router-dom'

import ColorListItem from './ColorListItem'

function Colors (props) {

  return (
    <>
      <h2>Colours</h2>
      <ul>
        {props.data.map(color => (
          <ColorListItem key={color} color={color} />
        ))}
      </ul>
      <Link to='/colors/details'>Show Details</Link>
      <Outlet />
    </>
  )
}

export default Colors
