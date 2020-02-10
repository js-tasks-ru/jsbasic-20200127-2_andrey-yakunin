/**
 * Найти min/max в произвольной строке
 * @param   {string} str -  входные данные
 * @returns {{min:number, max:number}}  объект
 */
function getMinMax(str) {
  nums = [];
  for (let elem of str.split(/[, ]+/g)) {
    if (isFinite(elem)) {
      nums.push(elem);
    }
  }
  nums = nums.sort(function (a, b) {return a - b});
  return {
    'min': +nums[0],
    'max': +nums[nums.length - 1]
  };
}
