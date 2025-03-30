var express = require('express');
var router = express.Router();
var ProductMiddleware = require('../modules/products/product.module')().ProductMiddleware;

router.post('/', ProductMiddleware.addProduct, function (req, res) {
    res.status(201).json(req.response);
});

router.get('/:userId', ProductMiddleware.getProductsByUserId, function (req, res) {
    res.status(200).json(req.response);
});

router.get('/product/:productId', ProductMiddleware.getProductById, function (req, res) {
    res.status(200).json(req.response);
});

router.put('/product/:productId', ProductMiddleware.modifyProduct, function (req, res) {
    res.status(200).json(req.response);
});

router.delete('/product/:productId', ProductMiddleware.removeProduct, function (req, res) {
    res.status(200).json(req.response);
});

module.exports = router;
