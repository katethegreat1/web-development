import React, { useState } from 'react'

import Counter from './Counter'

function App () {
  const [mode, setMode] = useState('normal')

  function handleClick () {
    setMode('crazy')
  }

  function handleClickTwo () {
    setMode('normal')
  }

  return (
    <main className={mode}>
      <button onClick={handleClick}>Click here for crazy mode</button>
      <button onClick={handleClickTwo}>Click here for normal mode</button>
      <h1>Time to learn about state 😈</h1>
      <Counter />
      {mode === 'crazy' &&
        <img src='https://media.istockphoto.com/vectors/funny-party-mouse-dabbing-vector-cartoon-vector-id1179464519?s=612x612' />
      }
    </main>
  )
}

export default App
