import React, { useState } from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import Details from './Details'
import Form from './Form'
import List from './List'

const data = [
  { id: 1, product: 'Banana', price: 3.59, notes: 'You can eat it or use it as a placeholder in your code' },
  { id: 2, product: 'Turmeric', price: 4.68, notes: 'Super healthy, get it from Bin Inn' },
  { id: 3, product: 'Beans', price: 1.5, notes: 'Buy in bulk if you have time to cook it, or canned from PakNSave' }
]

function App () {
  console.log('App rendered')
  const [list, setList] = useState(data)
  return (
    <main className='app'>
      <header className='title'>
        <Link to={'/'}><h1>My Todos App</h1></Link>
      </header>
      <Link to='/create'>➕ Add</Link>
      <section className='page'>
        <Routes>
          <Route path='/' element={<List products={list} />} />
          <Route path='/create' element={<Form setList={setList} />} />
          <Route path='/details/:id' element={<Details products={list} />} />
        </Routes>
      </section>
    </main>
  )
}

export default App
