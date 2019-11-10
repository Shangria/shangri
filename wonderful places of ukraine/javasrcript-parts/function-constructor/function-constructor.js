$(function () {

    debugger;

    // let apple10 = createApple('white', '80g');
    // let apple1 = new Apple('red', '30g');
    let apple2 = new Apple('green', '32g');
    log(apple2);
    log('-- set color red --');
    apple2.setColor('red');
    log(apple2);


    // let apple3 = new Apple('yellow', '12g');
    let apple4 = new RedAppleAppleWithTail();
    log(apple4);

    // log(apple10);
    // log(apple1);

    // log(apple3);


});


function createApple(color, weight) {
    return {
        color: color,
        weight: weight
    }
}


function Apple(color, weight, hasTail) {
    this.color = color;
    this.weight = weight;
    this.hasTail = hasTail == null ? false : hasTail;


    this.setColor = function (color) {
        this.color = color;
    };

    this.toString = function () {
        return 'Hello, I\'m apple! color: ' + this.color + ', weight: ' + this.weight + ', has tail: ' + this.hasTail;
    }
}


function RedAppleAppleWithTail() {
    this.color = 'red';
    this.weight = '5g';
    this.hasTail = true;
}

RedAppleAppleWithTail.prototype = new Apple();


function log(object) {
    $('body').append('<div>' + object + '</div>')
}