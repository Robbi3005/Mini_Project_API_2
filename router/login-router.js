const express = require('express');
const router = express.Router();

//---------------------------------------------------------------------------------------------------------------------

const Login = require('../controller/login-control');
const Product = require('../controller/product-control');

//---------------------------------------------------------------------------------------------------------------------

const jwt = require('jsonwebtoken');
const middleware = require('../middleware/auth');

//---------------------------------------------------------------------------------------------------------------------

// router.post('/', Login.login);

// router.post('/', Login.loginId1);

router.get('/', middleware.validate, (req, res) => {
    res.status(200).json({ message: `welcome` })
});

//---------------------------------------------------------------------------------------------------------------------

// router.post('/2', Login.loginId2);

// router.get('/2', middleware.validate2, (req, res) => {
//     res.status(200).json({ message: `welcome` })
// });

//---------------------------------------------------------------------------------------------------------------------

// CARA MAS ROMI

// misal untuk dapat product sesuai id user yang login

// router.get('/product-user', middleware.validate, Product.getProducts1);

module.exports = router;