var express = require('express');
var app = express();


console.log('__dirname :'+__dirname);
app.get('/index.html', function (req, res) {
    res.sendFile( __dirname + "/view/" + "index.html" );
})

 


app.get('/student', function (req, res) {
    res.send('Hello student');
 })

var server = app.listen(8000, function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log("Example app listening at http://%s:%s", host, port)
})