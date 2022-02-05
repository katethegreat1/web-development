import React, { useState } from 'react'

export default function Counter () {
//   let runningTotal = 0
//   function updateRunningTotal () {
//     runningTotal += 1
//     console.log(runningTotal)
//   }

  const [steps, setSteps] = useState(0)

  function handleClick () {
    setSteps(steps + 1)
  }

  function handleChange (event) {
    const newSteps = Number(event.target.value)
    // if (isNaN(newSteps)) return
    // setSteps(newSteps)
    if (!isNaN(newSteps)) {
      setSteps(newSteps)
    }
  }

  return (
    <>
      <p>This is how many steps Ange and Jinny took: {steps}</p>
      <button onClick={handleClick}>Click here to increase the steps!</button>
      Enter a number here to increase their steps: <input name="steps" value={steps} onChange={handleChange} />
    </>
  )
}
