'use strict';

const beerQuestion = confirm('Хотите выпить пива?');

if (beerQuestion) {
    alert('Отлично!')
} else {
    alert('Ваш выбор)')
}

const ageValid = +prompt('Укажите свой возраст:', '18');

if (ageValid < 18) {
    alert('Вам нет 18-ти!')
} else if (ageValid < 30) {
    alert('Привет молодой!')
} else {
    alert('Здравствуйте!')
}

const hotDrinks = confirm('Чай или кофе?');

const tea = confirm('Чай?');

const sugar = confirm('С сахаром?');

if (tea && sugar ) {
        alert('Вот Ваш чай с сахаром!')
} else if (tea){
    alert('Вот Ваш чай без сахара!')
} else if (sugar) {
        alert('Вот Ваш кофе с сахаром!')
}
else {
        alert('Вот Ваш кофе без сахара!')
    }




