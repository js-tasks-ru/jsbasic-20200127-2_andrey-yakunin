/**
 * @param {number[]} arr
 * @param {number} a
 * @param {number} b
 * @returns {number[]}
 */
function filterRange(arr, a, b) {
  let newArr = [];
  arr.forEach((elem) => {
    if (elem >= a && elem <= b) {
      newArr.push(elem);
    }
  });
  return newArr;
}
