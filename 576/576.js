
/**
 * @param {number} m
 * @param {number} n
 * @param {number} maxMove
 * @param {number} startRow
 * @param {number} startColumn
 * @return {number}
 */
 const findPaths = function(m, n, move, row, col, memo = new Map()) {
  const key = `${row},${col},${move}`;
  if (memo.has(key)) return memo.get(key);
  if (row < 0 || col < 0 || row === m || col === n) return 1;
  if (move === 0) return 0;
  const path1 = findPaths(m, n, move - 1, row - 1, col, memo);
  const path2 = findPaths(m, n, move - 1, row + 1, col, memo);
  const path3 = findPaths(m, n, move - 1, row, col - 1, memo);
  const path4 = findPaths(m, n, move - 1, row, col + 1, memo);
  memo.set(key, (path1 + path2 + path3 + path4) % (1e9 + 7));
  return memo.get(key);
};

console.log(findPaths(36,5,50,15,3));
