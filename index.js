// npm i -g nodemon : u/ install nodemon

require ('dotenv').config();

const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

const fs = require('fs');

const bodyParser = require('body-parser');
app.use(bodyParser.json());

const activeDB = require('./config/setup');

//---------------------------------------------------------------------------------------------------------------------

// note : buat 2 router : merchant / product, 1 router login

const productRouter = require('./router/product-router');
app.use('/product', productRouter);

const merchantRouter = require('./router/merchant-router');
app.use('/merchant', merchantRouter);

const router = require('./router/login-router');
app.use('/login', router);

//---------------------------------------------------------------------------------------------------------------------

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});