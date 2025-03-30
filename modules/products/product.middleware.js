(function () {
    'use strict';

    module.exports = {
        addProduct: addProduct,
        getProductsByUserId: getProductsByUserId,
        getProductById: getProductById,
        modifyProduct: modifyProduct,
        removeProduct: removeProduct
    };

    var ProductService = require('./product.module')().ProductService;

    // Función para agregar un producto
    function addProduct(req, res, next) {
        ProductService.createProduct(req.body)
            .then(success)
            .catch(failure);

        function success(data) {
            req.response = data;
            next();
        }

        function failure(error) {
            next(error);
        }
    }

    // Función para obtener todos los productos de un usuario
    function getProductsByUserId(req, res, next) {
        ProductService.fetchProductsByUserId(req.params.userId)
            .then(success)
            .catch(failure);

        function success(data) {
            req.response = data;
            next();
        }

        function failure(err) {
            next(err);
        }
    }

    // Función para obtener un producto por su ID
    function getProductById(req, res, next) {
        ProductService.fetchProductById(req.params.productId)
            .then(success)
            .catch(failure);

        function success(data) {
            req.response = data;
            next();
        }

        function failure(err) {
            next(err);
        }
    }

    // Función para modificar un producto
    function modifyProduct(req, res, next) {
        ProductService.updateProduct(req.params.productId, req.body)
            .then(success)
            .catch(error);

        function success(data) {
            req.response = data;
            next();
        }

        function error(err) {
            next(err);
        }
    }

    // Función para eliminar un producto
    function removeProduct(req, res, next) {
        ProductService.deleteProduct(req.params.productId)
            .then(success)
            .catch(error);

        function success(data) {
            req.response = data;
            next();
        }

        function error(err) {
            next(err);
        }
    }
})();
