var appRoot = require('app-root-path');
const path = require('path');

var express=require('express');
var app=express();
var fs = require("fs");


var db=require('./service/database');



var user = {
   "user4" : {
      "name" : "mohit",
      "password" : "123456",
      "profession" : "teacher",
      "id": 4
   }
}

// public permisssion
app.use('/public', express.static('public'));

app.get('/',(req,res)=>{ 
   // res.end( 'server on working!');
   res.sendFile(__dirname + "/views/" + "index.html");
 });


app.post('/addUser', function (req, res) {
   // First read existing users.
   fs.readFile( __dirname + "/" + "resource/data/users.json", 'utf8', function (err, data) {
    console.log('-----------------');
      console.log(data);
      data = JSON.parse( data );
      data["user4"] = user["user4"];
      console.log('/////////////////');
      console.log( data );
      res.end( JSON.stringify(data));
   });
})

app.get('/students',(req,res)=>{
   db.queryall().then( result =>{
   res.send(result);
   console.log(result);
   })
});



app.listen(8000);