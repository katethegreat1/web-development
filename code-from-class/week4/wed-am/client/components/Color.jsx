import React from 'react'
import { useParams } from 'react-router-dom'

function Color () {
  const { name } = useParams()
  // OR const { name } = props.match.params
  const style = { color: name }

  return (
    <p style={style}>{name}</p>
  )
}

export default Color
