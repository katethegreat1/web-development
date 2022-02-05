import React, { useEffect, useState } from 'react'
import { fetchLanguages } from '../api'

function List () {
  console.log('list is rendered')

  const [langs, setLangs] = useState([])

  useEffect(() => {
    fetchLanguages()
      .then(apiResponse => {
        setLangs(apiResponse)
        return null
      })
      .catch(err => {
        console.error(err)
      })
  }, [])

  return (<section>
    <ul>
      {langs.map(lang =>
        <li key={lang.id}>{lang.name}</li>
      )}
    </ul>
  </section>)
}

export default List
