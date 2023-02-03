var appRoot = require('app-root-path');
const path = require('path');

var express=require('express');
var app = express();
var fs = require("fs");


var db = require('./service/database');



var user = {
   "user4" : {
      "name" : "adil",
      "password" : "123456",
      "profession" : "teacher",
      "id": 4
   }
}

// public permisssion
app.use('/public', express.static('public'));
//app.use('/resource', express.static('resource'));

app.get('/',(req,res)=>{ 
   // res.end( 'server on working!');
   res.sendFile(__dirname + "/views/" + "index.html");
 });


app.post('/addUser', function (req, res) {
   // First read existing users.
   fs.readFile( __dirname + "/" + "resource/data/users.json", 'utf8', function (err, data) {
    console.log('-----------------');
      console.log(data);
      temp = JSON.parse( data );

      temp["user4"] = user["user4"];
      console.log('/////////////////');
      console.log( temp );
      res.end( JSON.stringify(temp));
   });
})

app.get('/students',(req,res)=>{
   db.queryall().then( result =>{
   res.send(result);
   console.log(result);
   })
});



app.listen(8000);