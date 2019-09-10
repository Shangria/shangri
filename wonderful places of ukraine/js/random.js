// function isCharaterPresentInString(string, char) {
//     let index = string.indexOf(char);
//     if (index == -1) {
//         printInBody(char + ' not present in ' + string);
//         return false;
//     } else {
//         printInBody(char + ' present in ' + string);
//         return true;
//     }
// }

/*function printInBody(text) {
    let div = document.createElement('div');
    div.innerText = text;
    document.body.append(div);
}

function generateRandomCharacter() {
    let randomLetters = "gkvfdsgyuknbcaazsdfgn";
    let randomIndex = Math.floor(Math.random() * randomLetters.length);
    let randomCharacter = randomLetters.charAt(randomIndex);
    printInBody('random character generated: ' + randomCharacter);
    return randomCharacter;
}


function generatePassword(passwordMaxLength) {
    printInBody('*** generate password with max length: ' + passwordMaxLength);
    let password = '';
    for (let i = 0; i < passwordMaxLength; i++) {
        let randomLetter = generateRandomCharacter();
        password = password + randomLetter;
    }
    printInBody('*** password with max length: ' + passwordMaxLength + ' generated: ' + password);
    return password;
}

let password = generatePassword(11);
printInBody('результат: ' + password);

let password2 = generatePassword(4);
printInBody('результат2: ' + password2);

let password3 = generatePassword(6);
printInBody('результат3: ' + password3)*/

var animals = ["Кот", "Рыба", "Лемур", "Комодский варан"];
for (let i = 0; i < animals.length; i++) {
    console.log(animals[i] + '- прекрасное животное');
}


let alphabet = "абвгдеёжзийклмнопрстуфхцчшщъыьэюя";
let randomString = "";


while (randomString.length < 10) {
    // получаем случайный индекс, который не превышает длину строки "alphabet"
    let randomIndex = Math.floor(Math.random() * alphabet.length);
    console.log('random index: ' + randomIndex);

    // почитать что такое charAt() !!!!
    // использовать только charAt() !!!
    // берём случайный символ из строки "alphabet" по интесу, используя встроенную в стрОки функцию charAt(index)
    let randomCharacter = alphabet.charAt(randomIndex);
    console.log('random character: ' + randomCharacter);

    // добавляем к нашей результирующей строке полученный случайный символ и результат записываем в нашу результирующую строку
    randomString = randomString + randomCharacter;
    console.log('random string: ' + randomString);

    console.log('--- random string length: ' + randomString.length);
}

// выводим результат
console.warn('result: ' + randomString);

