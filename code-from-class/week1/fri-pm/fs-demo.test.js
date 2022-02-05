const path = require('path')

const fsFuncs = require('./fs-demo')

test('getTheGoods reads contents of file passed to it', (done) => {
  // Arrange
  const filepath = path.join(__dirname, 'testdata.txt')
  // Act
  fsFuncs.getTheGoods(filepath, (err, contents) => {
    // Assert
    expect(err).toBeNull()
    expect(contents).toMatch('kisses')
    done()
  })
})

test('getTheGoods calls callback with generic error on error', (done) => {
  // Arrange
  const filepath = path.join(__dirname, 'fakefile.txt')
  // Act
  fsFuncs.getTheGoods(filepath, (err, contents) => {
    // Assert
    expect(err).not.toBeNull()
    expect(err.message).toMatch('Oops')
    done()
  })
})
