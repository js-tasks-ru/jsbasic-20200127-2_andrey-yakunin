/**
 * Компонент, который реализует сортируемую таблицу
 * @param {Array} items - данные, которые нужно отобразить
 *
 * Пример одного элемента, описывающего строку таблицы
 *
 *      {
 *          name: 'Ilia',
 *          age: 25,
 *          salary: '1000',
 *          city: 'Petrozavodsk'
 *      },
 *
 * @constructor
 */
function SortableTable(items) {
  /**
   * @property {Element} - обязательное свойство, которое ссылается на элемент <table>
   */
  this.el = document.createElement('table');
  this.el.appendChild(document.createElement('thead'));
  this.el.tHead.innerHTML = (`<tr><td>Name</td><td>Age</td><td>Salary</td><td>City</td></tr>`);
  this.el.appendChild(document.createElement('tbody'));
  for (let row of items) {
    let tableRow = document.createElement('tr');
    tableRow.innerHTML = (`<tr><td>${row.name}</td><td>${row.age}</td><td>${row.salary}</td><td>${row.city}</td></tr>`);
    this.el.tBodies[0].append(tableRow);
  }

  /**
   * Метод выполняет сортировку таблицы
   * @param {number} column - номер колонки, по которой
   * нужно выполнить сортировку (отсчет начинается от 0)
   * @param {boolean} desc - признак того, что сортировка должна идти в обратном порядке
   */
  this.sort = (column, desc = false) => {
    if (column === 0 || column === 4) {
      sortedRows = Array.from(this.el.rows).slice(1)
        .sort((rowA, rowB) => rowA.cells[column].innerHTML.toLowerCase() > rowB.cells[column].innerHTML.toLowerCase() ? 1 : -1);
    } else {
      sortedRows = Array.from(this.el.rows).slice(1)
        .sort((rowA, rowB) => +rowA.cells[column].innerHTML > +rowB.cells[column].innerHTML ? 1 : -1);
    }
    if (!desc) {
      this.el.tBodies[0].append(...sortedRows);
    } else {
      this.el.tBodies[0].append(...sortedRows.reverse());
    }
  };
}
