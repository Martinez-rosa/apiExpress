(function () {
    'use strict';

    var mongoose = require('mongoose');

    var Schema = mongoose.Schema;

    // Esquema para los productos
    var ProductSchema = new Schema({
        name: {
            type: String,
            required: true
        },
        quantity: {
            type: Number,
            required: true
        },
        price: {
            type: Number,
            required: true
        },
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'users',
            required: true
        },
        createdAt: {
            type: Date,
            default: Date.now
        }
    });

    // Modelo para los productos
    module.exports = mongoose.model('products', ProductSchema);
})();
