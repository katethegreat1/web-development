import React from 'react'
import { useParams } from 'react-router-dom'

function Details ({ products }) {
  console.log('details rendered')
  const { id } = useParams()
  const product = products.find(product => product.id.toString() === id)
  return (<section>
    <p>{product === undefined ? 'N/A' : product.product }</p>
    <p>{product && product.price}</p>
    <p>{product?.notes}</p>
  </section>)
}

export default Details
