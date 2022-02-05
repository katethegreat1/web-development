import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { addNewLanguage } from '../api'

function Form () {
  const [input, setInput] = useState('')
  const navigate = useNavigate()

  function handleChange (event) {
    setInput(event.target.value)
  }

  function handleSubmit (event) {
    event.preventDefault()

    addNewLanguage(input)
      .then(() => {
        navigate('/')
        return null
      })
      .catch(err => {
        console.error(err)
      })
  }

  return (
    <form>
      <input type='text' value={input} onChange={handleChange} />
      <button onClick={handleSubmit}>Add</button>
    </form>)
}

export default Form
