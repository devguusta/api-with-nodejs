const express = require('express');

const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).send({
        menssage: "Usando o GET dentro da rota de produtos",
    });
});

router.post('/', (req, res, next) => {
    res.status(201).send({
        menssage: "Usando o POST dentro da rota de produtos"
    });
});
router.patch('/', (req, res, next) => {
    res.status(201).send({
        menssage: "Usando o PATCH dentro da rota de produtos",
    });
});
router.delete('/', (req, res, next) => {
    res.status(201).send({
        menssage: "Usando o DELETE dentro da rota de produtos",
    });
});

router.get('/:id_product', (req, res, next) => {
    const id = req.params.id_product;
    if (id === 'especial') {
        res.status(200).send({
            menssage: "Id Especial",
            id: id
        });
    } else {
        res.status(200).send({
            menssage: "Usando o GET de um produto exclusivo",
            id: id
        });
    }



});
module.exports = router;