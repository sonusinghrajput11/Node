const express = require('express');
const router = express.Router();

const product_controller = require('../controllers/product.controller');

router.post('/create', (req, res) => {
    product_controller.product_create(req, res)
});

router.get('/:id', (req, res) => {
    product_controller.product_details(req, res)
});

router.put('/:id', (req, res) => {
    product_controller.product_update(req, res)
});

router.delete('/:id', (req, res) => {
    product_controller.product_delete(req, res)
});

router.get('/', (req, res) => {
    product_controller.product_list(req, res)
});

module.exports = router;