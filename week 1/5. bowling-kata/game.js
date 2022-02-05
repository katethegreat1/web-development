// Score 64 (simple game):
// const frames = [
//   [2, 0], [4, 2], [6, 0], [2, 4], [1, 5], [7, 0], [5, 2], [7, 0], [2, 6], [8, 1]
// ]
// Score 71 (with spares):
// const frames = [
//   [6, 1], [4, 0], [6, 4], [2, 7], [3, 5], [5, 0], [5, 5], [0, 0], [1, 6], [7, 2]
// ]
// Score 104 (with spares and strikes):
// const frames = [
//   [6, 4], [8, 0], [10, 0], [2, 7], [5, 5], [4, 0], [10, 0], [2, 1], [2, 6], [4, 4]
// ]
//
// Score 119 (with spares, strikes and a double strike):
// const frames = [
//   [1, 2], [6, 4], [5, 4], [10, 0], [7, 2], [10, 0], [10, 0], [5, 2], [7, 0], [4, 4]
// ]
//
// Score 141 (includes a strike on the last frame):
// const frames = [
//   [1, 2], [6, 4], [5, 4], [10, 0], [7, 2], [10, 0], [10, 0], [5, 2], [7, 0], [10, 10, 10]
// ]
//
// Score 300 (perfect game):
const frames = [
  [10, 0], [10, 0], [10, 0], [10, 0], [10, 0], [10, 0], [10, 0], [10, 0], [10, 0], [10, 10, 10]
]

// 
function reduceFunc(arr) {
  return arr.reduce((score1, score2) => score1 + score2)
}

function score(frames) {
  const totalScore = frames.map(reduceFunc)

  // for spare and strike
  for (let i = 0; i < frames.length; i++) {

    if (i < 9 && totalScore[i] === 10 && frames[i][0] !== 10 && frames[i + 1][0] !== 10) {
      totalScore.push(frames[i + 1][0])
    }
    else if (i < 9 && frames[i][0] === 10 && frames[i + 1][0] !== 10) {
      totalScore.push(frames[i + 1][0])
      totalScore.push(frames[i + 1][1])
    }
    else if (i < 8 && frames[i][0] === 10 && frames[i + 1][0] === 10) {
      totalScore.push(frames[i + 1][0])
      totalScore.push(frames[i + 2][0])
    }
    // for frame 10
    else if (i === 9 && frames[i][0] === 10 && frames[i - 1][0] === 10) {
      totalScore.push(frames[i][0])
      totalScore.push(frames[i][1])
    }
    // console.log(totalScore)
  }

  const finalTotal = totalScore.reduce((score1, score2) => score1 + score2)

  console.log(finalTotal)
}
score(frames)

