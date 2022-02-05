function scoreFrame (frame, nextFrame) {
    let score = frame[0] + frame[1]
    if (score === 10) {
        return score + nextFrame[0]
    }
    return score
}

module.exports = {
    scoreFrame
}