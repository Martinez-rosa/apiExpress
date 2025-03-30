(function () {
    'use strict';

    var express = require('express');
    var router = express.Router();

    var ProductMiddleware = require('./product.module')().ProductMiddleware;

    // Ruta para agregar un producto
    router.post('/',
        ProductMiddleware.addProduct,
        function (req, res) {
            res.status(201).json(req.response);  // Devuelve el producto creado
        });

    // Ruta para obtener todos los productos de un usuario
    router.get('/:userId',
        ProductMiddleware.getProductsByUserId,
        function (req, res) {
            res.status(200).json(req.response);  // Devuelve los productos del usuario
        });

    // Ruta para obtener un producto específico
    router.get('/product/:productId',
        ProductMiddleware.getProductById,
        function (req, res) {
            res.status(200).json(req.response);  // Devuelve un producto específico
        });

    // Ruta para modificar un producto
    router.put('/product/:productId',
        ProductMiddleware.modifyProduct,
        function (req, res) {
            res.status(200).json(req.response);  // Devuelve el producto modificado
        });

    // Ruta para eliminar un producto
    router.delete('/product/:productId',
        ProductMiddleware.removeProduct,
        function (req, res) {
            res.status(200).json(req.response);  // Devuelve un mensaje de éxito
        });

    module.exports = router;

})();
