let alphabet = "абвгдеёжзийклмнопрстуфхцчшщъыьэюя";
let randomLetter = '';
while (randomLetter.length < 10) {
    let randomIndex = Math.floor(Math.random() * alphabet.length);
    let  randomChoice=alphabet.charAt(randomIndex);
    randomLetter+=randomChoice;

}
console.log(randomLetter);
