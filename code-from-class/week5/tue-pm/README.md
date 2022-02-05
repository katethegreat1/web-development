# Consuming Web APIs!

Lecture slides here! https://www.figma.com/proto/xn4q9soBwoLCTd6ytrEXm9/External-APIs-and-useEffect?node-id=2%3A2&scaling=contain&page-id=0%3A1

```
import React, { useState, useEffect } from 'react'
import { getNewJokeAPI as getAPI } from '../api'

function App () {
  const [joke, setJoke] = useState('')
  const [loadingIcon, setLoadingIcon] = useState(false)

  useEffect(() => {
    console.log('inside useEffect')
    getNewJoke()
  }, [])

  function getNewJoke () {
    setLoadingIcon(true)
    getAPI()
    .then((resJoke) => {
      setJoke(resJoke)
      setLoadingIcon(false)
    })
  }

  function handleClick () {
    getNewJoke()
  }

  return (
    <>
      <h1>Get ready to groan ...</h1>
      <p>{joke}</p>
      <button onClick={handleClick}>Click me!</button>
      { loadingIcon && <img style={{display: 'block'}} src="/busy.gif" alt="loading icon" /> }
    </>
  )
}
```

```
  export function getNewJokeAPI () {
    return request
    .get('https://icanhazdadjoke.com/')
    .set('Accept', 'application/json')
    .then(res => {
      return res.body.joke
    })
    .catch(err => {
      console.error('ERROR:', err.message)
    })
  }
```