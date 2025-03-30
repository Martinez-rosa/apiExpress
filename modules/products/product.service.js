(function () {
    'use strict';

    module.exports = {
        createProduct: createProduct,
        fetchProductsByUserId: fetchProductsByUserId,
        fetchProductById: fetchProductById,
        updateProduct: updateProduct,
        deleteProduct: deleteProduct
    };

    var ProductModel = require('./product.module')().ProductModel;

    // Función para crear un producto
    function createProduct(product) {
        return ProductModel.create(product);
    }

    // Función para obtener todos los productos de un usuario
    function fetchProductsByUserId(userId) {
        return ProductModel.find({ userId: userId })
            .exec();
    }

    // Función para obtener un producto por su ID
    function fetchProductById(productId) {
        return ProductModel.findById(productId)
            .exec();
    }

    // Función para actualizar un producto
    function updateProduct(productId, product) {
        return ProductModel
            .findByIdAndUpdate(productId, product, { new: true })
            .exec();
    }

    // Función para eliminar un producto
    function deleteProduct(productId) {
        return ProductModel
            .findByIdAndRemove(productId)
            .exec();
    }
})();
