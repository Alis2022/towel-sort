
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let res = [];
  for (index in matrix)
    index % 2 == 0 ? res = res.concat(matrix[index]) : res = res.concat(matrix[index].reverse());
  return res;
}