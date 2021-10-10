const express = require('express');

const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).send({
        menssage: "Usando o GET dentro da rota de DEMANDS",
    });
});

router.post('/', (req, res, next) => {
    res.status(201).send({
        menssage: "Usando o POST dentro da rota de DEMANDS"
    });
});
router.patch('/', (req, res, next) => {
    res.status(201).send({
        menssage: "Usando o PATCH dentro da rota de DEMANDS",
    });
});
router.delete('/', (req, res, next) => {
    res.status(201).send({
        menssage: "Usando o DELETE dentro da rota de DEMANDS",
    });
});

router.get('/:id_demands', (req, res, next) => {
    const id = req.params.id_product;
    if (id === 'especial') {
        res.status(200).send({
            menssage: "Id Especial",
            id: id
        });
    } else {
        res.status(200).send({
            menssage: "Usando o GET de uma demanda exclusivo",
            id: id
        });
    }



});
module.exports = router;