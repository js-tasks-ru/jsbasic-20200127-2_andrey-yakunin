/**
 * @param {string} str
 * @returns {string}
 */
function camelize(str) {
  let words = []; answer = '';
  for (elem of str.split('-')) {words.push(elem);}
  if (words[0] !== '') {answer += words[0];}
  words.shift(0);
  words.forEach((item) => answer += (item[0].toUpperCase() + item.slice(1)));
  return answer;
}
