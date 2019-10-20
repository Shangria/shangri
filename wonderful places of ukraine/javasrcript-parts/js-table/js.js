function renderTableTable(row, columns) {
    let table = createTable(row, columns);
    $('#mainContainer').append(table);
}

function createTable(row, columns) {
    let table = $("<table>");
    for (let i = 0; i < row; i++) {
        let tr = $("<tr></tr>");
        $(table).append(tr);
        for (let m = 0; m < columns; m++) {

            let length;
            if (i % 2 == 0) {
                length = 2;
            } else {
                length = 5;
            }

            let text = generateRandomText(length);
            let td = $("<td></td>");
            td.text(text);
            $(tr).append(td);

        }
    }
    return table;
}


function generateRandomText(length) {
    let string = "ghhjgjgjgjfffffjyjyyyyyyyyhfddrgthygj";
    let randomString = '';
    while (randomString.length < length) {
        let random = Math.floor(Math.random() * string.length);
        let randomChart = string.charAt(random);
        randomString += randomChart;
    }
    return randomString;
}