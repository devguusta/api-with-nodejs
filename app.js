const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');

const routerProducts = require('./routes/products');
const routerDemands = require('./routes/demands');

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false })); // apenas dados simples
app.use(bodyParser.json()); // json de entrada no body
app.use((req, res, next) => {
    res.header('Access-Controll-Allow-Origin', '*');
    res.header('Access-Controll-Allow-Header',
        'Origin,X-Requested-With, Content-Type,Accept,Authorization'
    );
    if (req.method === 'OPTIONS') {
        res.header('Access-Controll-Allow-Methods', 'PUT,POST,PATCH,DELETE,GET');
        return res.status(200).send({});
    }
    next();
})
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