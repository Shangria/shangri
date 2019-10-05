// добавляет таблицу с количесивом рядков раное rows и количесвом колонок раное columns в div#mainContainer
function renderTableTable(rows, columns) {
debugger;
    let table = createTable(rows, columns);
    $('#mainContainer').append(table);
}

// создаёт элемент таблицы с количесивом рядков раное rows и количесвом колонок раное columns
function createTable(rows, columns) {
    let table = $('<table>');

    for (let trCount = 0; trCount < rows; trCount++) {
        let tr = $('<tr>');

        for (let tdCount = 0; tdCount < columns; tdCount++) {
            let td = $('<td>');
            let text = (trCount + 1) + '/' + (tdCount + 1);
            td.text(text);
            $(tr).append(td);
        }

        $(table).append(tr);
    }

    return table;
}


