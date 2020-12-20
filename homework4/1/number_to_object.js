"use strict";


/**
 * Функция генерирует случайное число
 * @returns {number} возвращает число и выступает аргументом для функции getDigitsToObject(num)
 */
function getRandomNumber() {
    return Math.floor(Math.random() * 999);
}

/**
 * Функция проверяет условие, в зависимости от исхода возвращает либо пустой объект, либо объект поделенный на единицы, десятки, сотни.
 * @param {number} num  параметром выступает число, которое генерируется в функции getRandomNumber
 * @return {object} units, tens, hundreds; 
 */
function getDigitsToObject(num) {
    if (!Number.isInteger(num) || num < 0 || num > 999) {
        console.log('Значение должно быть целым, больше нуля и меньше 999.');
        return {};
    }
    return {
        units: num % 10,
        tens: Math.floor(num / 10) % 10,
        hundreds: Math.floor(num / 100),
    }
}



console.log(getDigitsToObject(getRandomNumber()));
console.log(getDigitsToObject(1000));