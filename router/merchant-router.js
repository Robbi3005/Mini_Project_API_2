const express = require('express');
const router = express.Router();

//---------------------------------------------------------------------------------------------------------------------

const Merchant = require('../controller/merchant-control');
// const Login = require('../controller/login-control');

//---------------------------------------------------------------------------------------------------------------------

const jwt = require('jsonwebtoken');
const middleware = require('../middleware/auth');

//---------------------------------------------------------------------------------------------------------------------

// SAYA TETEP BUAT CODE UNTUK GET DAN UPDATE, TAPI YANG AKTIF HANYA CREATE DAN DELETE

// router.get('/', Merchant.getMerchants);
// router.get('/jwt', middleware.validate, Merchant.getMerchants);
// router.get('/jwt2', middleware.validate2, Merchant.getMerchants);

// router.get('/:id', Merchant.getMerchant);
// router.get('/jwt/:id', middleware.validate, Merchant.getMerchant);

// router.post('/', Merchant.addMerchant);
router.post('/jwt', middleware.validate, Merchant.addMerchant);
// router.post('/jwt2', middleware.validate2, Merchant.addMerchant);

// router.put('/:id', Merchant.updateMerchant);
// router.put('/jwt/:id', middleware.validate, Merchant.updateMerchant);

// router.delete('/:id', Merchant.deleteMerchant);
router.delete('/jwt/:id', middleware.validate, Merchant.deleteMerchant);

//---------------------------------------------------------------------------------------------------------------------

// router.post('/', Login.login);

// router.get('/', middleware.validate, (req, res) => {
//     res.status(200).json({ message: 'welcome' })
// });

module.exports = router;