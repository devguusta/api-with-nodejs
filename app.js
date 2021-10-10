const express = require('express');
const app = express();

const routerProducts = require('./routes/products');
const routerDemands = require('./routes/demands');

app.use('/products',routerProducts);
app.use('/demands',routerDemands);



module.exports = app;