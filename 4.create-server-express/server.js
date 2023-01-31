

var express = require('express');
var app = express();
var cookieParser = require('cookie-parser');

var db = require('./service/database');

app.use(cookieParser())




console.log('__dirname :' + __dirname);

app.get('/', function (req, res) {
    console.log('name :' + req.query.name);
    console.log('department :' + req.query.department);
    console.log("Cookies: ", req.cookies);
    // Cookies that have been signed
    console.log('Signed Cookies: ', req.signedCookies)
 

    if (req.query.name != undefined && req.query.department != undefined) {
        db.insert(req.query.name, req.query.department);
        res.cookie(req.query.name, req.query.department);
        res.sendFile(__dirname + "/view/" + "success.html");
    }
    else {
        res.sendFile(__dirname + "/view/" + "index.html");
    }


})




app.get('/student', function (req, res) {
    res.send('Hello student');
})

var server = app.listen(8000, function () {
    var host = server.address().address
    var port = server.address().port

    console.log("Example app listening at http://%s:%s", host, port)
})