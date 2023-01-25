

let http = require('http'); // Import Nodlete.js core module
var fs = require('fs');
var sys = require('util');
var counter = 0;

var server = http.createServer(
    function (request, response) {   //create web server 
        // opened web server
        //console.log("test");
        fs.readFile('index.html', function (err, data) {

            if (request.url === '/favicon.ico') {
                response.writeHead(200, { 'Content-Type': 'image/x-icon' });
                response.end();
                console.log('favicon requested');
                return;
            }


            // var fs = require("fs");
            // var data = fs.readFileSync('input.txt');

            // console.log(data.toString());
            // console.log("Program Ended");


            response.writeHead(200, { 'Content-Type': 'text/html' });

            counter++;
            console.log(counter);
            console.log(request.url);
            //response.write(data);


            // routing
            var recurl = request.url;

            if (recurl == "/" || recurl == "/index" )
            {
                fs.readFile('index.html', function (err, data) {
                    if (err) throw err;
                    response.write(data);
                   return response.end();
                });
            }
            else if(recurl == "/contact")
            {
                fs.readFile('contact.html', function (err, data) {
                    if (err) throw err;
                    response.write(data);
                   return response.end();
                });
            }
            else 
            {
                fs.readFile('error.html', function (err, data) {
                    if (err) throw err;
                    response.write(data);
                   return response.end();
                });
            }

                

        

        });


        //end web server   
    }
);

server.listen(8000); //6 - listen for any incoming requests

console.log('Node.js web server at port 8000 is running......')

