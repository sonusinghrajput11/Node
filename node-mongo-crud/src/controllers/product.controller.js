const Product = require('../models/product.model');
const product_validator = require('../validators/product.validator');

exports.product_create = function (req, res) {
    const result = product_validator.valiadte(req.body);
    if (result.error) return res.status(400).send(result.error);

    let product = new Product({
        name: req.body.name,
        price: req.body.price
    });

    product.save((err) => {
        if (err) return next(err);
        res.send(product);
    });
}

exports.product_details = function (req, res) {
    Product.findById(req.params.id, (err, product) => {
        if (err) return next(err);
        res.send(product);
    });
}


exports.product_update = function (req, res) {
    const result = product_validator.valiadte(req.body);
    if (result.error) return res.status(400).send(result.error);

    const product = Product.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true }, (err, product) => {
        if (err) return next(err);
        res.send(product);
    });
}

exports.product_delete = function (req, res) {
    const product = Product.findByIdAndRemove(req.params.id, (err, product) => {
        if (err) return next(err);
        res.set('Content-Type', 'text/plain');
        res.send('Product Deleted succesfully!!');
    });
}

exports.product_list = function (req, res) {
    Product.find((err, products) => {
        if (err) return next(err);
        res.send(products);
    });
}