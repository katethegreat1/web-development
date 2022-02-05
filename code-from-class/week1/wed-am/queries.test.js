const queries = require('./queries')

test('should return the height of the pilot',() => {
  // arrange 
 const fakePilot = {
   name: 'Vader',
   height: 90
 } 
  //act
  const actual = queries.getHeight(fakePilot)

  const expected = 90
  // assert
  expect(actual).toBe(expected)
})

test('should return the names of the ships', () => {
const fakePilot = {
  starships: [
    { name: 'test1'},
    { name: 'test2'},
  ]
}
const actual = queries.getShipNames(fakePilot)

expect(actual).toHaveLength(2)
expect(actual).toContain('test1')
expect(actual).toContain('test2')

})