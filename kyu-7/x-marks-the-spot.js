const xMarksTheSpot = (input) => {

  let coord = []

  for (let i = 0; i < input.length; i++) {
    for (let j = 0; j < input[i].length; j++) {
      if (input[i][j] === 'x') {
        coord.push([i,j])
      }
    }
  }

  if ((coord.length > 1) || (coord.length === 0)) {
    return []
  }

  return coord[0]
}
