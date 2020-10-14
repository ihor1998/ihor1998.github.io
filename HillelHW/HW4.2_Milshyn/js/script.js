'use strict';

let beerQuestion = confirm('Хотите выпить пива?') ?  'Отлично!' : 'Ваш выбор)';

let ageValid = +prompt('Укажите свой возраст:', '18');

const greeting = (ageValid < 18) ? 'Вам нет 18-ти!' :
        (ageValid < 30) ? 'Привет молодой!' :
            'Здравствуйте!';


const hotDrinks = confirm('Чай или кофе?');

const isTea = confirm('Чай?');

const isSugar = confirm('С сахаром?');

const hotDrinksQuestion = (isTea && isSugar) ? 'Вот Ваш чай с сахаром!' :
    (isTea) ? 'Вот Ваш чай без сахара!' :
        (isSugar) ? 'Вот Ваш кофе с сахаром!' :
            'Вот Ваш кофе без сахара!';


 

console.log(beerQuestion)

console.log(greeting)

console.log(hotDrinksQuestion)       