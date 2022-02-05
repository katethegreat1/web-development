import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Form ({ setList }) {
  const navigate = useNavigate()

  const [form, setForm] = useState({
    id: '',
    product: '',
    price: 0
  })

  function handleFormChange (event) {
    setForm({
      ...form,
      [event.target.name]: event.target.value
    })
  }

  function handleClick (event) {
    event.preventDefault()

    const updatedForm = {
      ...form,
      id: parseInt(form.id),
      price: Number(form.price)
    }
    setList(currentList => [...currentList, updatedForm])
    // setList(currentList => {
    //   return [...currentList, form]
    // })
    navigate('/')
  }

  return (
    <form>
      <input type="text" name="id" value={form.id} onChange={handleFormChange} />
      <input type="text" name="product" value={form.name} onChange={handleFormChange} />
      <input type="number" name="price" value={form.price} onChange={handleFormChange} />
      <button onClick={handleClick}>Add</button>
    </form>
  )
}

export default Form
