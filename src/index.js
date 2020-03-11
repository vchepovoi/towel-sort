
// You should implement your task here.

module.exports = function towelSort (matrix) {
  var newMatrix = [];
  if (typeof matrix === "undefined") {
    return newMatrix;
  }
  if (matrix.length < 1) {
    return newMatrix;
  } else {
    for (let i = 0 ; i < matrix.length ; i++) {
      if (i % 2) matrix[i].reverse()
      for (let j = 0; j < matrix[i].length ; j++) {
        newMatrix.push(matrix[i][j]);
      }
    }
    return newMatrix;
  }
}
