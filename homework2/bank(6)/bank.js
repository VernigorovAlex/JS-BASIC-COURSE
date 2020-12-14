"use strict";

/**
 * Функция возвращает слово "рубль" в правильном падеже обратно в alert.
 * @param {number} num кол-во рублей, которое ввел пользователь.
 * @returns {string} "рубль" | "рублей" | "рубля".
 */
function getRoubles(num) {
    let beforeLastNum = getBeforeLastNum(num);
    if (beforeLastNum == 1) {
        return "рублей";
    }
    num = String(num); // перевод в строку
    let lastNum = Number(num.charAt(num.length - 1)); //забираем последнюю цифру из num
    switch (lastNum) {
        case 0:
        case 5:
        case 6:
        case 7:
        case 8:
        case 9:
            return "рублей";
        case 1:
            return "рубль";
        case 2:
        case 3:
        case 4:
            return "рубля";
        default:
            throw new Error('Пожалуйста, введите сумму цифрами, а не буквами.');
    }
}

/**
 * Функция возвращает предпоследнюю цифру числа num или null, если длины строки num не хватает.
 * @param {number} num приходит сумма, которую ввел пользователь.
 * @returns {number | null} возвращает либо предпоследнюю цифру в функцию getRoubles, либо null, если не хватило длины параметра num.
 */
function getBeforeLastNum(num) {
    num = String(num); // перевод в строку
    let numeral = num.charAt(num.length - 2); //забираем предпоследнюю цифру из num
    if (numeral !== "") {
        return Number(numeral);
    }
    return null;
}

let cash = parseInt(prompt('Введите сумму, которую вы хотите положить на счет.'));
alert(`Ваша сумма в ${cash} ${getRoubles(cash)} успешно зачислена.`);