var http = require('http');
const url = require('url');
var db = require('./service/database');





//create a server object:
http.createServer(function (req, res) {

    // routing 

 

    const querystring = require('querystring');

    let routeUrl =req.url;
  //  let routeUrl = 'https://holycoders.com/products/some-product-id?color=red';

    let parsedRouteUrl = url.parse(routeUrl);
    let requiredQueryString = querystring.parse(parsedRouteUrl.query);

    console.log(routeUrl);
    console.log(parsedRouteUrl);
    console.log(requiredQueryString);

    //example
    var str = "/de/about";
    var path = str.split("/");
    console.log(path); // path = [ '', 'de', 'about' ]
    // path[1] = 'de', path[2] = 'about'


    var pathnames = parsedRouteUrl.pathname.split('/');
    var parametres=pathnames.filter(n=>n !='');
    console.log(pathnames);
    console.log(parametres);


    

    if(parametres[0]== 'student')
    {
         db.query(parametres[1]).then(result=>{
            console.log(result);
            res.setHeader('Content-Type', 'application/json');
            res.write(JSON.stringify(result) );
            res.end();

        });

        
    } else  if(parametres[0]== 'department')
    {}















    // if (recurl == "/" || recurl == "/index") {
    //     fs.readFile('index.html', function (err, data) {
    //         if (err) throw err;
    //         res.write(data);
    //         return res.end();
    //     });
    // }
    // else if (recurl == "/insert") {
    //     // reciev json data from client
    //     let body = [];
    //     req.on('error', (err) => {
    //         console.error(err);
    //     }).on('data', (chunk) => {
    //         body.push(chunk);
    //     }).on('end', () => {
    //         body = Buffer.concat(body).toString();
    //         console.log(body);

    //         // insert 
    //         const request = pool.request()
    //         request.input('myval', sql.VarChar, 'value')
    //         request.query('insert into testtable (somecolumn) values (@myval)', (err, result) => {
    //             console.dir(result)
    //         })


    //     });
    // }



}).listen(8000); //the server object listens on port 8080

console.log('Node.js web server at port 8000 is running......');