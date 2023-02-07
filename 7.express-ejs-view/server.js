var path = require('path');

var express = require('express');
var db = require('./service/database');

var app = express();

// __dirname 
app.set('views', path.join(__dirname, 'views'));
// set the view engine to ejs
app.set('view engine', 'ejs');

// use res.render to load up an ejs view file
//app.use(expressLayouts);


 

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