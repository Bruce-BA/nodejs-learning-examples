var path = require('path');

var express = require('express');
var expressLayouts=require('express-ejs-layouts');
var db = require('./service/database');

var app = express();


// use res.render to load up an ejs view file
app.use(expressLayouts);
app.set('layout','./layouts/full-width')

// __dirname value is related path '/8.express-ejs-layout-view/server.js/'
// set up application view (html) folder
app.set('views', path.join(__dirname, 'views'));
// set the view engine to ejs
app.set('view engine', 'ejs');




 

// index page
app.get('/', function (req, res) {

  //data transfer to index page
  db.queryall().then(result => {
    //res.send(result);
    console.log('result display promise:');
    console.log(result);
    console.log('render index:');
    
    res.render('index',{data:result});
  });
  
});

// about page
app.get('/about', function (req, res) {
  res.render('pages/about');
});

app.listen(8000);
console.log('Server is listening on port 8000');