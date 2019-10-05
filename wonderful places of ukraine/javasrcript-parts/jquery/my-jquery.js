function getRandomNumberInRange(min, max) { b
    function generate() {
        return Math.floor(Math.random() * max);
    }

    let result = generate();
    while (result < min) {
        console.warn('random number from range %s-%s: %s is less that minimum value, try to generate again', min, max, result);
        result = generate();
    }

    console.log('random number from range %s-%s: %s', min, max, result);
    return result;
}

function getRandomNumberFromZeroTo(value) {
    return getRandomNumberInRange(0, value);
}

function gerRandomElementFromArray(array) {
    let index = getRandomNumberFromZeroTo(array.length);
    let result = array[index];
    console.log('random element from array %s: %s', array.join(', '), result.toString());
    return result;
}

function getRandomColor() {
    let colors = [
        'red',
        'blue',
        '#fd86ac',
        'yellow',
        'green'
    ];
    return gerRandomElementFromArray(colors);
}

function getRandomAnimal() {
    let colors = [
        'Cat',
        'Dog',
        'Goat',
        'Chicken',
        'Rat'
    ];
    return gerRandomElementFromArray(colors);
}

function getRandomString() {
    let characters = 'qwertyuiopasdfghjklzxcvbnm';
    let result = '';
    while (result.length < 50) {
        let index = getRandomNumberFromZeroTo(characters.length);
        result += characters.charAt(index);
    }
    return result;
}


function makeRandomStyles() {
    $('div').each(function (index, element) {
        let text = getRandomAnimal();
        let randomColor = getRandomColor();
        let width = getRandomNumberInRange(30, 90);

        let configuration = {
            text: getRandomString(),
            style: {
                'background-color': randomColor,
                'width': width + '%',
            }
        };

        applyDivConfiguration(element, configuration);
    });
}

function addRandomCountOfDivsToBody(count) {
    let maxDivs = getRandomNumberInRange(1, count);

    let divsAdded = 0;
    while (divsAdded != maxDivs) {
        let configuration = {
            text: getRandomString()
        };
        let div = createDiv(configuration);
        $('body').append(div);
        divsAdded++;
    }
}

function createDiv(divConfiguration) {
    let div = $('<div>');
    if (divConfiguration != null) {
        applyDivConfiguration(div, divConfiguration);
    }
    return div;
}

function applyDivConfiguration(div, divConfiguration) {
    if (divConfiguration.text != null) {
        $(div).text(divConfiguration.text);
    }
    if (divConfiguration.style != null) {
        $(div).css(divConfiguration.style);
    }
}


$(document).ready(function () {
    let times = 0;
    let intervalId = setInterval(function () {
        makeRandomStyles();
        addRandomCountOfDivsToBody(4);
        times++;

        if (times > 5) {
            clearInterval(intervalId);
        }

    }, 3000);
});


