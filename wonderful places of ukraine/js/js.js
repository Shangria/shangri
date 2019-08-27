let car = {
    currentSpeed: 250,
    previousSpeed: 0
};

function gamnoed(){
    car.previousSpeed = car.currentSpeed;
    car.currentSpeed = 300;
    console.log("Скорость стала: " + car.currentSpeed + " Скорость была: " + car.previousSpeed);
}

gamnoed();


//
// function toString(argument) {
//     let result;
//     if (typeof argument == 'string') {
//         result = argument;
//     } else if (typeof argument == 'number') {
//         result = argument + 'xx';
//     } else if (argument instanceof Array) {
//         result = '';
//         for (let i = 0; i < argument.length; i++) {
//             result = result + ' ' + argument[i];
//         }
//     } else if (typeof argument == 'boolean') {
//         if (argument) {
//             result = 'da';
//         } else {
//             result = 'net';
//         }
//     } else {
//         result = 'gamno'
//     }
//     return result;
// }
//

// function checkAge(age) {
//     return age > 18 ? true : confirm('Родители разрешили?');
// }

function min(a,b) {
    if (a < b) {
        return a;
    } else {
        return b;
    }
}



console.log(min(2, 5) == 2);
console.log(min(3, -1) == -1);
console.log(min(1, 1) == 1);


function pow(a,b) {
    return a^b;
}
