'use strict';



function padString(text, textSize, a = '', aSide = true) {

    if (typeof text === 'undefined') return console.log('Не введен текст!');
    if (typeof textSize === 'undefined') return console.log('Не указан длина текта!');
    // if (typeof a === 'undefined') return console.log('Не введен символ!'); Эти проверки не нужны т.к. по условию должен стоять четвертый аргумент по-умолчанию, а символ не выводится если длина строки задана меньше самой строки.
    // if (typeof aSide === 'undefined') return console.log('Не указана сторона расположения символа!'); 

    text = text.substr(0, textSize);
    a = a.repeat(textSize - text.length);

    if (aSide === true) {
        return text + a;
    } else {
        return a + text;
    }
}

const message = padString('Maksik', 8, '@', true);
console.log(message);