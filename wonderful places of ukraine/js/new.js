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
let words = [
    "Оладушек",
    "Дно",
    "Улыбка",
    "Каторга"
];
//создаем переменную. где методом случайного выбора будт определться слово
let randomWords = words[Math.floor(Math.random() * words.length)];
console.log(randomWords);

//создаем пустой массив, куда будут добавлять количесво букв с загадоного слова
let answerArr = [];
//создаем цикл, который будет добвлять количество подчеркиваний в зависимотви от того. какое случайное слово нам выпадет
for (let i = 0; randomWords.length > i; i++) {
    answerArr[i] = '_';
}
//содаем переменную, которая будет равняться длинне выбраного слова
let leftToGuessLetters = randomWords.length;

while (leftToGuessLetters > 0){
//показать играку текущее состояние игры
    alert(answerArr.join(""));
    //запрашиваем у игрока ответ, и определаем его в переменную
    let guess = prompt("Угадайте букву или нажмите Отмена для выхода из игры.");
    //далее возможны варианты ответов:если игрок нажмет отмена цыкл примет значение нул  и выйдет из цыкла
    if (guess === null) {
        //выход из цикла
        break;
    }
    //поверяем если игрок введет более 1буквы или ничего не введет, алерт выдаст окно
    else if (guess.length !== 1) {
        alert("Пожалуйста, введите только одну букву.");
    }
    //игрок ввел корректный ответ, то воспроиводим цыкл где переменная j будет менять значение от 0 длинны слова
    else {
        for (let j = 0; randomWords.length > j; j++) {
            //проверяем каждую букву этой переменной, сравниваяя ее с выбором игрока
            if (randomWords[j] === guess) {
                //если выбор игрока совпал с правилым ответом, добавляем букуву в правильный ответ
                answerArr[j] = guess;
               //уменшаем слово с каждым правильным выбором игрока
                leftToGuessLetters--;
            }
        }
    }
}


alert("Отлично! Было загадано слово " +  randomWords);