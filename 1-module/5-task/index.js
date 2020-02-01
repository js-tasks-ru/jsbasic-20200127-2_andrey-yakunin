/**
 * truncate
 * @param {string} str
 * @param {number} maxlength
 * @returns {string}
 */
function truncate(str, maxlength) {
  let myStr = str;
  if (str.length > maxlength) {
    myStr = str.slice(0, maxlength - 1) + "…";
  }
  return myStr;
}
