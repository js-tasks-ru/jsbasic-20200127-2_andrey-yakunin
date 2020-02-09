/**
 * showSalary
 * @param {Array} data - данные о пользователях
 * @param {number} age - максимальный возраст
 * @returns {string}
 */
function showSalary(data, age) {
  let res = data
    .filter(user => user.age <= age)
    .map(user => `${user.name}, ${user.balance}`);
  answer = res[0];
  if (res.length > 1) {
    for (item of res.slice(1)) {
      answer += ('\n' + item);
    }
  }
  return answer;
}
