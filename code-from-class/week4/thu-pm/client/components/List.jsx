import React from 'react'
import { Link } from 'react-router-dom'

function List ({ products }) {
  const total = products
    .map(product => product.price)
    .reduce((total, val) => total + val, 0)

  return (
    <div className='table'>
      <div className='col'>PRODUCT</div>
      <div className='col'>PRICE</div>
      {products.map(({ product, price, id }) =>
        <>
          <div className='col'><Link to={`/details/${id}`}>{product}</Link></div>
          <div className='col'>{'$'}{price}</div>
        </>
      )}
      <div className='col'>TOTAL</div>
      <div className='col'>{'$'}{total}</div>
    </div>
  )
}

export default List
