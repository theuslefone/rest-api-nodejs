const express = require('express');
const router = express.Router();
const mysql = require('../mysql').pool;


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
        preco: req.body.preco
    }

    mysql.getConnection((error, conn) => {
        conn.query(
            'INSERT INTO produtos (nome, descricao, preco) VALUES (?, ?, ?)', [req.body.nome, req.body.descricao, req.body.preco],
            (error, resultado, field) => {
                conn.release();

                if (error) {
                    return res.status(500).send({
                        error: error,
                        response: null
                    })
                }

                res.status(201).send({
                    mensagem: 'Produto inserido com sucesso',
                    id_produto: resultado.insertId
                })
            }
        )
    })

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