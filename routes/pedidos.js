const express = require('express');
const router = express.Router();


// Retorna todos os pedido da loja
router.get('/', (req, res, next) => {
    res.status(200).send({
        mensagem: 'Retorna os pedidos'
    });
});

// Retorna pedido específico da loja
router.get('/:id_pedido', (req, res, next) => {
    const id = req.params.id_pedido;

    res.status(200).send({
        mensagem: 'Detalhes do pedido',
        id: id
    })
})

// Insere um pedido
router.post('/', (req, res, next) => {

    const pedido = {
        id_produto: req.body.id_produto,
        quantidade: req.body.quantidade
    }

    res.status(201).send({
        mensagem: 'Adiciona um pedido',
        pedido: pedido
    });
});

// Apaga um pedido da loja
router.delete('/:id_pedido', (req, res, next) => {
    res.status(201).send({
        mensagem: 'Pedido excluido'
    });
});


module.exports = router;