import request from 'superagent'

export function fetchLanguages () {
  return request.get('/api/v1/languages')
    .then(res => {
      return res.body
    })
}

export function addNewLanguage (input) {
  return request.post('/api/v1/languages')
    .send({ name: input })
    .then(() => {
      return null
    })
}
