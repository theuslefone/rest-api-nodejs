const express = require('express');
const router = express.Router();


// Retorna todos os produtos da loja
router.get('/', (req, res, next) => {
    res.status(200).send({
        mensagem: 'Retorna os produtos da loja'
    });
});

// Retorna produto específico da loja
router.get('/:id_produto', (req, res, next) => {

    const id = req.params.id_produto;

    res.status(200).send({
        mensagem: 'Retorna produto específico da loja',
        id: id
    })
})

// Insere um produto
router.post('/', (req, res, next) => {
    res.status(201).send({
        mensagem: 'Você adicionou um produto'
    });
});

// Altera um produto da loja
router.patch('/:id_produto', (req, res, next) => {
    res.status(201).send({
        mensagem: 'Você alterou um produto'
    });
});

// Apaga um produto da loja
router.delete('/:id_produto', (req, res, next) => {
    res.status(201).send({
        mensagem: 'Produto excluído com sucesso'
    });
});


module.exports = router;