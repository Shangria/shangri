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
            let text = generateRandomText();
            let td = $("<td></td>");
            td.text(text);
            $(tr).append(td);

        }
    }
    return table;
}


function generateRandomText() {
    let string = "ghhjgjgjgjfffffjyjyyyyyyyyhfddrgthygj";
    let randomString = '';
    while (randomString.length<2){
        let random = Math.floor(Math.random() * string.length);
        let randomChart = string.charAt(random);
        randomString+=randomChart;
    }
    return randomString;
}