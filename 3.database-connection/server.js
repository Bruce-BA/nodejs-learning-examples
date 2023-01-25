var http = require('http');
const url = require('url');
var db = require('./service/database');





//create a server object:
http.createServer(function (req, res) {


  if (req.url === '/favicon.ico') {
    req.writeHead(200, { 'Content-Type': 'image/x-icon' });
    req.end();
    console.log('favicon requested');
    return;
  }
  // routing 



  const querystring = require('querystring');

  let routeUrl = req.url;
  //  let routeUrl = 'https://holycoders.com/products/some-product-id?color=red';

  let parsedRouteUrl = url.parse(routeUrl);
  let requiredQueryString = querystring.parse(parsedRouteUrl.query);

  console.log('routeUrl :' + routeUrl);
  console.log('parsedRouteUrl :' + parsedRouteUrl);
  console.log('requiredQueryString :');
  console.log(requiredQueryString);

  //example spilt string
  var str = "/de/about";
  var path = str.split("/");
  console.log(path); // path = [ '', 'de', 'about' ]
  // path[1] = 'de', path[2] = 'about'


  var pathnames = parsedRouteUrl.pathname.split('/');
  var parametres = pathnames.filter(n => n != '');
  console.log('pathnames :' + pathnames);
  console.log('parametres :' + parametres);




  if (parametres[0] == 'student') {
    db.query(parametres[1]).then(result => {
      console.log(result);
      res.setHeader('Content-Type', 'application/json');
      res.write(JSON.stringify(result));
      res.end();

    });


  } else if (parametres[0] == 'department') {


  } else {
    res.setHeader('Content-Type', 'text/html');
    res.write('<h1>request url parameter has been incorrect ! </h1>');
    res.end();
  }

















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