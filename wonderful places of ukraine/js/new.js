/*let alphabet = "абвгдеёжзийклмнопрстуфхцчшщъыьэюя";
let randomLetter = '';
while (randomLetter.length < 10) {
    let randomIndex = Math.floor(Math.random() * alphabet.length);
    let  randomChoice=alphabet.charAt(randomIndex);
    randomLetter+=randomChoice;

}*/
/*console.log(randomLetter);*/


/*var input = "javascript is awesome";
var output = "";
for (var i = 0; i < input.length; i++){

    var outputSign = input[i];

    if (outputSign == "a"){
        output += 4;
    } else if (outputSign == "e"){
        output += 3;
    } else if (outputSign == "i"){
        output += 1;
    } else if (outputSign == "o"){
        output += 0;
    } else {
        output += outputSign;
    };
};
console.log(output*//*);*/
/*
var likesCats = confirm("Тебе нравятся кошки?");
if (likesCats) {
    console.log("Ты классная кошка!");
} else {
    console.log("Что ж, не проблема. Все равно ты молодец!");
}*/
//создаем массив из слов
/*
let words = [
    "Оладушек",
    "Дно",
    "Улыбка",
    "Каторга"
];
words.push('Ноутбук', 'Сссылка');
//создаем переменную. где методом случайного выбора будт определться слово
let randomWord = words[Math.floor(Math.random() * words.length)];
console.log('randomWord ' + randomWord);

//создаем пустой массив, куда будут добавлять количесво букв с загадоного слова
let answerArray = [];
//создаем цикл, который будет добвлять количество подчеркиваний в зависимотви от того. какое случайное слово нам выпадет
for (let i = 0; randomWord.length > i; i++) {
    answerArray[i] = '_';
}
//содаем переменную, которая будет равняться длинне выбраного слова
let leftToGuessLetters = randomWord.length;
console.log('leftToGuessLetters ' + leftToGuessLetters);

let maxFails = 2;

while (leftToGuessLetters > 0) {
//показать играку текущее состояние игры
    alert(answerArray.join(""));
    //запрашиваем у игрока ответ, и определаем его в переменную
    let guess = prompt("Угадайте букву или нажмите Отмена для выхода из игры.");
    //далее возможны варианты ответов:если игрок нажмет отмена цыкл примет значение нул  и выйдет из цыкла


    {   // проверяем на ранее введённую букву
        while (answerArray.indexOf(guess) != -1) {
            guess = prompt("Буква " + guess + ", уже была угаданаб введите другую");
        }
    }

    {   // проверяем, чтоб не было пустой строки
        let attempt = 0;
        while (guess == null) {
            guess = prompt("Нет, введи! " + attempt);
            attempt++;
            if (attempt == 3) {
                break;
            }
        }
    }

    if (guess == null) {
        break;
    }


    if (guess.length == 0) {
        // if empty string
        alert("Ничего не введено");
    } else if (guess.length > 1) {
        // if string contains more that one character
        alert("Пожалуйста, введите только одну букву.");
    } else {

        let success = false;

        for (let j = 0; randomWord.length > j; j++) {
            let letter = randomWord[j];
            let comparisonResult = letter.toLowerCase() == guess.toLowerCase();

            console.log('Ввели букву: %s, сравниваем с: %s, результат: %s', guess, letter, comparisonResult);

            //проверяем каждую букву этой переменной, сравниваяя ее с выбором игрока
            if (comparisonResult) {
                //если выбор игрока совпал с правилым ответом, добавляем букуву в правильный ответ
                answerArray[j] = guess;
                //уменшаем слово с каждым правильным выбором игрока
                leftToGuessLetters--;

                success = true;
            }
        }

        if (success) {
            console.log("Буква угадана");
        } else {
            maxFails--;
            if (maxFails == -1) {
                alert("Дядя Петя, ты дурак?");
                break;
            } else {
                console.log("Буква не угадана, осталось промахов %s", maxFails);
            }
        }
    }

}

if (leftToGuessLetters == 0) {
    alert("Отлично! Было загадано слово " + randomWord);
} else {
    alert("Слабак, осталось отгадать " + leftToGuessLetters + " букв");
}-72

*/

/*
let randomName=["Ты", "Я", "Они", "Мы"];
let  randomAction = ["Ползет", "Плывет", "Идет", "Стоит"];
let randomPlace=["в болото", "в ад", "в пропасть", "по радужке"];

let pickRandomWord = function (words) {
    return words[Math.floor(Math.random() * words.length)];
};
let randomString=pickRandomWord(randomName)+" "+pickRandomWord(randomAction)+" "+ pickRandomWord(randomPlace);
console.log(randomString);
*/

/*var fifthLetter = function (name) {
if (name.length < 5) {
    }
    return "Пятая буква вашего имени: " + name[4] + ".";
};
console.log(fi*//*fthLetter("jhj"));*/

let add = function (oneNumber, twoNumber) {
    return oneNumber + twoNumber;
};
let summ=add(777, 0);
console.log(summ);


let multiply = function (oneNumber, twoNumber) {
    return oneNumber * twoNumber;
};
let summ2=multiply(36325,9824);
    console.log(summ2);
    summaAll= summ*summ2;
 console.log(summaAll);