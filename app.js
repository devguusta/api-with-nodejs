const express = require('express');
const app = express();
const morgan = require('morgan');
const routerProducts = require('./routes/products');
const routerDemands = require('./routes/demands');

app.use(morgan('dev'));
app.use('/products', routerProducts);
app.use('/demands', routerDemands);
app.use((req, res, next) => {
    const erro = new Error('Não encontrado');
    erro.status = 404;
    next(erro);
});

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    return res.send({
        erro: {
            mensagge: error.message
        }
    })
});



module.exports = app;