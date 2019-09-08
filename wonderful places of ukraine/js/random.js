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

function printInBody(text) {
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
printInBody('результат3: ' + password3);