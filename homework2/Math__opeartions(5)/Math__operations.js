"use strict";

/**
 * Функция принимает параметры a и b, возвращает их сумму.
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */

function sum(a, b) {
    return a + b;
}



/**
* Функция принимает параметры a и b, возвращает их разность.
* @param {number} a
* @param {number} b
* @returns {number}
*/

function difference(a, b) {
    return a - b;
}



/**
* Функция принимает параметры a и b, возвращает их произведение.
* @param {number} a
* @param {number} b
* @returns {number}
*/

function composition(a, b) {
    return a * b;
}



/**
* Функция принимает параметры a и b, возвращает деление a на b.
* @param {number} a
* @param {number} b
* @returns {number}
*/

function division(a, b) {
    return a / b;
}


/**
 * Функция производит математическую операцию между двумя числами в зависимости от указанной операции.
 * @param {number} arg1 
 * @param {number} arg2 
 * @param {string} operation "+", "-", "*", "/"
 */
function mathOperation(arg1, arg2, operation) {
    switch (operation) {
        case "+":
            return sum(arg1, arg2);
        case "-":
            return difference(arg1, arg2);
        case "*":
            return composition(arg1, arg2);
        case "/":
            return division(arg1, arg2);
        default:
            throw new Error(`Математической операции ${operation} нет, укажите: "+", "-", "*", "/"`);
    }
}

console.log(mathOperation(3, 5, "+"));
console.log(mathOperation(4, 1, "-"));
console.log(mathOperation(-7, 2, "*"));
console.log(mathOperation(9, 3, "/"));
console.log(mathOperation(17, 17, "plus"));