

let http = require('http'); // Import Nodlete.js core module
var fs = require('fs');

var counter = 0;

var server = http.createServer(
    function (request, response) {   //create web server 
        // opened web server
        //console.log("test");
        fs.readFile('index.html', function (err, data) { 

            if (err) throw err;
           
            counter++;
            console.log("request count: "+ counter);
            console.log("request url  : "+ request.url);
            console.log("status       : request success!");
            // response.end("<h1>NodeJS create server success!</h1>");

            response.statusCode = 200;
            response.setHeader('Content-Type', 'text/html');
            response.write(data);
            return response.end();

        });


        //end web server   
    }
);

server.listen(8000); //6 - listen for any incoming requests

console.log('Node.JS web server at port 8000 is running......')

