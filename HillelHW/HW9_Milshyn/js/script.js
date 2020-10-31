"use strict";

const getRandomNumber = () => {
    return Math.floor(Math.random() * 100 + 1);
}

function showMessage(getRandomNumber,
    getNewGame,
    num = +prompt('Угадайте число от 1 до 100:'),
) {
    
    while(num !== getRandomNumber){
        
        switch (true) { 
            case isNaN(num):
            case num === 0:
            case num > 101:
                alert('Вы нарушили условия игры! Попробуйте еще раз)');
                num = +prompt('Введите число:');
                break;
           
            case num > getRandomNumber:
                alert('Много');
                num = +prompt('Попытайтесь ещё:');
                break;
            
            case num < getRandomNumber:
                alert('Мало');
                num = +prompt('Попытайтесь ещё:');
                break;
        }
    }  
     

    return getNewGame(showMessage);
} 

function getNewGame(showMessage, newGame) {
    
    alert('Поздравляю вы выиграли!');

    newGame = confirm('Сыграем ещё?');

    if (!newGame) {
        alert('Спасибо за игру! Если одумались обновите страницу!');
    } else {
        showMessage(getRandomNumber(), getNewGame);
    }

    return;
}

showMessage(getRandomNumber(), getNewGame);
