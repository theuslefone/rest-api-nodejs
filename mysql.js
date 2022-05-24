const mysql = require('mysql');

var poll = mysql.createPoll({
    "user": process.env.USER || "root",
    "password": process.env.PASSWORD || "",
    "database": process.env.DATABASE || "ecommerce",
    "host": process.env.HOST || "localhost",
    "host": process.env.PORTDB || "3306"
});

exports.poll = poll;