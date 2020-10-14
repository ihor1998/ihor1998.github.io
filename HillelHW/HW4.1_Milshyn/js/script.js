'use strict';

let beerQuestion = confirm('Хотите выпить пива?');

if (beerQuestion) {
    beerQuestion = 'Отлично';
} else {
    beerQuestion = 'Ваш выбор';
}

let ageValid = +prompt('Укажите свой возраст:', '18');

if (ageValid < 18) {
    ageValid = 'Вам нет 18-ти!';
} else if (ageValid < 30) {
    ageValid = 'Привет молодой!';
} else {
    ageValid = 'Здравствуйте!';
}

let hotDrinks = confirm('Чай или кофе?');

const isTea = confirm('Чай?');

const isSugar = confirm('С сахаром?');

if (isTea && isSugar) {
    hotDrinks = 'Вот Ваш чай с сахаром!';
} else if (isTea){
    hotDrinks = 'Вот Ваш чай без сахара!';
} else if (isSugar) {
    hotDrinks = 'Вот Ваш кофе с сахаром!';
}
else {
    hotDrinks = 'Вот Ваш кофе без сахара!';
    }


console.log(beerQuestion)

console.log(ageValid)

console.log(hotDrinks)

