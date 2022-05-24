const express = require('express');
const app = express();
const morgan = require('morgan');

const rotaProduto = require('./routes/produtos');
const rotaPedido = require('./routes/pedidos');

app.use(morgan('dev'));

app.use('/produtos', rotaProduto);
app.use('/pedidos', rotaPedido);

app.use((req, res, next) => {
    const erro = new Error('Não encontrado!')
    erro.status = 404;
    next(erro);
})

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    return res.send({
        erro: {
            mensagem: error.mensagem
        }
    })
})

// app.use((error, req, res, next) => {
//     res.status(error.status || 500);
//     return res.send({
//         error: {
//             mensagem: error.message
//         }
//     })
// })


module.exports = app;