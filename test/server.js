var express = require('express');
var app = express();


console.log('testtesttesttesttest!');


app.get('/', (req, res) => {
    res.send('<h1>connected!</h1>');
});

app.listen(8000);