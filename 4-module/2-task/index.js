/**
 * @param {HTMLTableElement} table
 * @return {void}
 */
function makeDiagonalRed(table) {
  let rows = table.rows;
  for (let row of rows) {
    for (let cell of row.cells) {
      if (cell.cellIndex === row.rowIndex) {
        cell.style.background = 'red';
      }
    }
  }
  return table;
}
