const express = require('express');
const router = express.Router();


router.get('/', (req, res, next) => {
    res.status(200).send({
        mensagem: 'Retorna os produtos da loja'
    });
});

router.get('/:id_produto', (req, res, next) => {

    const id = req.params.id_produto;

    res.status(200).send({
        mensagem: 'Retorna produto específico da loja',
        id: id
    })
})

router.post('/', (req, res, next) => {
    const produto = {
        nome: req.body.nome,
        descricao: req.body.descricao,
        preco: req.body.preco,
        foto: req.body.foto
    }
    res.status(201).send({
        mensagem: 'Você adicionou um produto',
        produto: produto
    });
});

router.patch('/:id_produto', (req, res, next) => {
    res.status(201).send({
        mensagem: 'Você alterou um produto'
    });
});

router.delete('/:id_produto', (req, res, next) => {
    res.status(201).send({
        mensagem: 'Produto excluído com sucesso'
    });
});

module.exports = router;