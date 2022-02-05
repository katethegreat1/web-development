import request from 'superagent'

// export function getNewJokeAPI () {
//   return request
//   .get('https://icanhazdadjoke.com')
//   .set('Accept', 'application/json')
//   .then(res => {
//     console.log(res)
//     return res.body.joke
//   }).catch(err => {
//     console.error(err.message)
//   })
// }

export function getNewJokeAPI () {
  return request 
  .get('/api/jokes')
  .then(res => {
    return res.body.randomDadJoke
  })
  .catch(err => {
        console.error(err.message)
      })
}
