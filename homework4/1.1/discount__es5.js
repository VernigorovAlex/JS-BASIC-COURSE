"use strict";

function Product(name, price) {
    this.name = name;
    this.price = price;
}

Product.prototype.make25PercentDiscount = function (discount) {
    this.price -= (this.price / 100 * discount);
}

const products = [
    new Product('товар1', 1000),
    new Product('товар2', 2300),
    new Product('товар3', 10000),
];

for (let product of products) {
    product.make25PercentDiscount(25);
}

console.log(products);