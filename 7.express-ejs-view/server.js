var path = require('path');

var express = require('express');
var db = require('./service/database');

var app = express();

// __dirname value is related path '/8.express-ejs-layout-view/server.js/'
app.set('views', path.join(__dirname, 'views'));
// set the view engine to ejs
app.set('view engine', 'ejs');



 

// index page
app.get('/', function (req, res) {

  var obj= {name:'rrr',age:20}
  //data transfer to index page
  db.queryall().then(result => { 
    var x= {title:'backend datatransfer ',data : result};
    res.render('index',x); 
  });
  
});

 




// about page
app.get('/about', function (req, res) {
  res.render('pages/about');
});

app.listen(8000);
console.log('Server is listening on port 8000');