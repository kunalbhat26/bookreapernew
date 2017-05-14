var express = require('express');
var router = express.Router();
var Product = require('../models/product');

router.get('/', function (req, res, next) {
    var successMsg = req.flash('success')[0];
    Product.find(function (err, docs) {
        var productChunks = [];
        var chunkSize = 3;
        for (var i = 0; i < docs.length; i += chunkSize) {
            productChunks.push(docs.slice(i, i + chunkSize));
        }
        res.render('shop/index', {title: 'Book Reaper', products: productChunks, successMsg: successMsg, noMessages: !successMsg});
    });
});


module.exports = router;