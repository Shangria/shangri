/*
var phrases = [
    "Звучит неплохо",
    "Да, это определенно надо сделать",
    "Не думаю, что это хорошая идея",
    "Может, не сегодня?",
    "Компьютер говорит нет"
];

var phrases2 = [
    "lalala",
    "fdsfsd",
    "gfgdfgfdgdfg",
    "gfdgdf",
    "ytrytry",
    "6u776u76",
    "hahahaha"
];

var phrases3 = [
    "867",
    "456",
    "987"
];
var phrases4 = [
    "pppppp"
];

// var arrays = [
//     phrases,
//     phrases2,
//     phrases3,
//     phrases4
// ];

// var arrays = [];
// arrays[0] = phrases;
// arrays[1] = phrases2;
// arrays[2] = phrases3;
// arrays[3] = phrases4;


var arrays = [];
arrays.push(phrases);
arrays.push(phrases2);
arrays.push(phrases3);
arrays.push(phrases4);
arrays.push(phrases);
arrays.push(phrases2);
arrays.push(phrases3);
arrays.push(phrases4);
arrays.push(phrases);
arrays.push(phrases2);
arrays.push(phrases3);
arrays.push(phrases4);
arrays.push(phrases);
arrays.push(phrases2);
arrays.push(phrases3);
arrays.push(phrases4);
arrays.push(phrases);
arrays.push(phrases2);
arrays.push(phrases3);
arrays.push(phrases4);
arrays.push(phrases);
arrays.push(phrases2);
arrays.push(phrases3);
arrays.push(phrases4);
arrays.push(phrases);
arrays.push(phrases2);
arrays.push(phrases3);
arrays.push(phrases4);
arrays.push(phrases);
arrays.push(phrases2);
arrays.push(phrases3);
arrays.push(phrases4);

logRandomStringForEachArray();


function logRandomStringForEachArray() {
    for (let i = 0; i < arrays.length; i++) { // выведет 0, затем 1, затем 2
        console.log('------------------------------> i=' + i);
        let array = arrays[i];
        logRandomString(array);
    }
}


function generateIndex(array) {
    var arraySize = array.length;
    console.log('arraySize=' + arraySize);
    let random = Math.random();
    console.log('random=' + random);
    let maxRandom = random * arraySize;
    console.log('maxRandom=' + maxRandom);
    let index = Math.floor(maxRandom);
    console.log('index=' + index);
    return index;
}

function logRandomString(array) {
    var generatedIndex = generateIndex(array);
    console.log('generatedIndex=' + generatedIndex);
    let string = array[generatedIndex];
    console.log('--------> tring=' + string);
}



*/

/*let namesOfPeopleTeaser = ["Миша", "Алёна", "Арбузная голова"];
let actionName = ["приятного апетита", "приятно побабить", "eхать на пупике"];
let namesOfPeoplesTeaser = namesOfPeopleTeaser[Math.floor(Math.random() * 3)];
let actionNames = actionName[Math.floor(Math.random() * 3)];
let watermelonAffairs = namesOfPeoplesTeaser + " " + actionNames + "!!!";
let watermelonAffairsInAction = "У " + watermelonAffairs + "будет хороший день" + " "+actionNames+".Всего хороего!!!";
    console.log(watermelonAffairsInAction);*/

function randomChar() {
    let randomLetters = "gkvfdsgyuknbcaazsdfgn";
    for (let myPassword = 0; myPassword.length < 10; myPassword++) {
        myPassword = randomLetters[Math.floor(Math.random() * randomLetters.length)];
        console.log('Мой пароль: ' + myPassword);
    }
}


function generatePassword() {
    let password = '';
    let randomLetters = "gkvfdsgyuknbcaazsdfgn";
    for (let i = 0; i < 10; i++) {
        password = password + randomLetters[Math.floor(Math.random() * randomLetters.length)];
        console.log('промежуточный результат: ' + password);
    }
    return password;
}

let password = generatePassword();
console.log('результат: ' + password);
