/**
 * ucFirst
 * @param {string} str
 * @returns {string}
 */
function ucFirst(str) {
  if (str != null) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
  return str;
}
