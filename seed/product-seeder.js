var Product = require('../models/product');

var mongoose = require('mongoose');

mongoose.connect('localhost:27017/book');

var products = [
    new Product({
        imagePath: 'http://ecx.images-amazon.com/images/I/41jWdXkLySL._SX324_BO1,204,203,200_.jpg',
        title: 'Thinking Fast and Slow',
        description: 'Major New York Times bestseller \n Winner of the National Academy of Sciences Best Book Award in 2012 \n Selected by the New York Times Book Review as one of the ten best books of 2011 \n A Globe and Mail Best Books of the Year 2011 Title \n One of The Economists 2011 Books of the Year',
        price: 10
    }),
    new Product({
        imagePath: 'https://images-na.ssl-images-amazon.com/images/I/51kyOGIHeIL._SX306_BO1,204,203,200_.jpg',
        title: 'Astrophysics for People in a Hurry',
        description: 'The #1 New York Times Bestseller: The essential universe, from our most celebrated and beloved astrophysicist.',
        price: 20
    }),
    new Product({
        imagePath: 'https://images-na.ssl-images-amazon.com/images/I/419U-OYsFjL._SX327_BO1,204,203,200_.jpg',
        title: 'The Other Side of Impossible',
        description: 'You’re faced with a difficult health condition. You have exhausted medicine’s answers. What do you do? Susannah Meadows tells the real-life stories of seven families who persisted when traditional medicine alone wasn’t enough.',
        price: 40
    })
];

var done = 0;
for (var i = 0; i < products.length; i++) {
    products[i].save(function(err, result) {
        done++;
        if (done === products.length) {
            exit();
        }
    });
}

function exit() {
    mongoose.disconnect();
}