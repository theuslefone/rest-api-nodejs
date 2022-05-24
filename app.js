const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');

const rotaProduto = require('./routes/produtos');
const rotaPedido = require('./routes/pedidos');

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header(
        'Access-Control-Allow-Header',
        'Origin, X-Requrested-With, Content-Type, Accept, Authorization'
    );

    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
        return res.status(200).send({});
    }
    next();
});

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