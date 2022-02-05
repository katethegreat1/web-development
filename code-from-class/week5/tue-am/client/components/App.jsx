import React, { useState, useEffect } from 'react'
import { getNewJokeAPI } from '../api'

function App () {
 const [joke, setJoke] = useState('')
 const [loadingIcon, setLoadingIcon] = useState(false)

 useEffect(() => {
   console.log('in the useEffect')
   getNewJoke()
 }, [])

 function getNewJoke () {
   setLoadingIcon(true)
   getNewJokeAPI()
  .then((resJoke) => {
    console.log('this is resJoke', resJoke)
    setJoke(resJoke)
    setLoadingIcon(false)
  }).catch(err => {
    console.error(err.message)
  })
 }

 function handleClick () {
   console.log('fired')
   getNewJoke()
 }

 return (
  <>
    <h1>Ready to have a good time</h1>
    <p>{joke}</p>
    <button onClick={handleClick}>Click me</button>
    { loadingIcon && <img src='/busy.gif' alt='loading icon' /> }   
  </> 
 )
}

export default App