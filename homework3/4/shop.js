"use strict";
/*
Перед вами находится массив с продуктами в интернет - магазине.Вам нужно:
1. Получить все товары, у которых есть фотографии, можете использовать метод filter https://mzl.la/2qROQkT
2. Отсортируйте товары по цене(от низкой цены к высокой), можете использовать метод sort
https://mzl.la/2Y79hbZ , как устроен sort можно посмотреть например здесь https://youtu.be/O2pusOp0gC0
*/

const products = [
    {
        id: 3,
        price: 127,
        photos: [
            "1.jpg",
            "2.jpg",
        ]
    },
    {
        id: 5,
        price: 499,
        photos: []
    },
    {
        id: 10,
        price: 26,
        photos: [
            "3.jpg"
        ]
    },
    {
        id: 8,
        price: 78,
    },
];

// 1. Товары с фото. 

const productsWithPhotos = products.filter(product => "photos" in product && product.photos.length > 0);
console.log(productsWithPhotos);

// 2. Отсортированные товары по цене. 

const sortedPrice = products.sort(function (product1, product2) {
    if (product1.price > product2.price) {
        return 1;
    }
    if (product1.price < product2.price) {
        return -1;
    }
    return 0;
});
console.log(sortedPrice);

