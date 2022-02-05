const { scoreFrame } = require('./game')

test('scoreFrame can score a regular frame', () => {
    // arrange
    const frame = [2,5]
    const expected = 7

    // act
    const actual = scoreFrame(frame)

    // assert
    expect(actual).toBe(expected)

    // expect(scoreFrame([2,5]).toBe(7))
})

test('scoreFrame can score a spare', () => {
    // arrange
    const frame = [4,6]
    const nextFrame = [2,1]
    const expected = 12

    // act
    const actual = scoreFrame(frame, nextFrame)

    // assert
    expect(actual).toBe(expected)
})