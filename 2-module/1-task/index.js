/**
 * Складываем зарплаты
 * @param {Object} salaries - объект зарплат
 * @returns {Number}
 */
// function sumSalary(salaries) {
//   let answer = 0;
//   for (let key in salaries) {
//     if (typeof salaries[key] == 'number') {
//       answer += salaries[key];
//     }
//   }
//   return answer;
// }

function sumSalary(salaries) {
  let answer = 0;
  for (let key in salaries) {
    if (salaries.hasOwnProperty(key)) {
      if (typeof salaries[key] == 'number') {
        answer += salaries[key];
      }
    }
  }
  return answer;
}
