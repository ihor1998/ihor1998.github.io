"use strict";

const table = document.querySelector('.table')

const tBodies = table.querySelector('tbody');



function sortTable(columnIndex) {
    
    const sorted = Array.from(table.rows)
        .slice(1)
        .sort((rowA, rowB) => rowA.cells[columnIndex].innerHTML > rowB.cells[columnIndex].innerHTML ? 1 : -1);

    table.tBodies[0].append(...sorted);

}