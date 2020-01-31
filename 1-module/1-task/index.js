/**
 * Factorial
 * @param {number} n
 * @returns {number}
 */
function factorial(n) {
  if (n == 0) {
    return 1;
  }
  let res = 1;
  while (n > 0) {
    res *= n;
    n--;
  }
  return res;
}
