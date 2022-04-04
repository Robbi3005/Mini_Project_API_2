const express = require('express');
const router = express.Router();

//---------------------------------------------------------------------------------------------------------------------

const Product = require('../controller/product-control');

//---------------------------------------------------------------------------------------------------------------------

const jwt = require('jsonwebtoken');
const middleware = require('../middleware/auth');

//---------------------------------------------------------------------------------------------------------------------

router.get('/', Product.getProducts);
router.get('/jwt', middleware.validate, Product.getProducts);

router.get('/:id', Product.getProduct);
router.get('/jwt/:id', middleware.validate, Product.getProduct);

router.post('/', Product.addProduct);
router.post('/jwt', middleware.validate, Product.addProduct);
// router.post('/jwt2', middleware.validate2, Product.addProduct);

router.put('/:id',Product.updateProduct);
router.put('/jwt/:id', middleware.validate, Product.updateProduct);

router.delete('/:id', Product.deleteProduct);
router.delete('/jwt/:id', middleware.validate, Product.deleteProduct);

module.exports = router;