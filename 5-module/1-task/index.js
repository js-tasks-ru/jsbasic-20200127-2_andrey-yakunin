/**
 * Метод устанавливает необходимые по условию аттрибуты таблице
 * @param {Element} table
 */
function highlight(table) {
  let rows = table.tBodies[0].rows;
  for (let row of rows) {
    let statusCell = (row.cells)[3];
    let genderCell = (row.cells)[2];
    let ageCell = (row.cells)[1];
    if (statusCell.getAttribute('data-available')) {
      if (statusCell.getAttribute('data-available') === 'true') {
        row.classList.add('available');
      } else {
        row.classList.add('unavailable');
      }
    } else {
      row.setAttribute('hidden', true);
    }
    if (genderCell.innerHTML === 'm') {
      row.classList.add('male');
    } else {
      row.classList.add('female');
    }
    if (+ageCell.innerHTML < 18) {
      row.style.textDecoration = 'line-through';
    }
  }
}
