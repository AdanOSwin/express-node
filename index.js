const express = require('express');

const routesV1 = require('./routes/v1');

const app = express();

routesV1(app);

app.listen(4000,() => {
    console.log("Listening on 4000");
});









//const routes = require('./routes');

//routes(app);

//var querystring = require('querystring');


//server.listen(4000);

//console.log("Running on 4000");


// var {
//     countries
// } = require('countries-list');
//= require('url');


// var server = http.createServer(function (req, res) {

//     var parsed = url.parse(req.url);
//     console.log("parsed: ", parsed);

//     var pathname = parsed.pathname;
//     // res.writeHead(200, {
//     //     'Content-Type': 'application/json'
//     // });
//     // res.write(JSON.stringify(countries.MX));

//     var query = querystring.parse(parsed.query);
//     console.log("query: ", query);

//     if (pathname=== '/') {
//         res.writeHead(200, {
//             'Content-Type': 'text/html'
//         });
//         res.write('<html><body>Home Page</body></html>');
//         res.end();
//     } else if (pathname=== '/exit') {
//         res.writeHead(200, {
//             'Content-Type': 'text/html'
//         });
//         res.write('<html><body>Bye</body></html>');
//         res.end();
//     } else if (pathname=== '/info') {
//         var result = info(pathname);
//         res.writeHead(200, {
//             'Content-Type': 'text/html'
//         });
//         res.write(result);
//         res.end();
//     } else if (pathname=== '/country') {
//         res.writeHead(200, {
//             'Content-Type': 'application/json'
//         });
//         res.write(JSON.stringify(countries[query.code]));
//         //res.write(result);
//         res.end();
//     } else if (pathname=== '/error') {
//         var result = error(pathname);
//         res.writeHead(200, {
//             'Content-Type': 'text/html'
//         });
//         res.write(result);
//         res.end();
//     } else {
//         res.writeHead(404, {
//             'Content-Type': 'text/html'
//         });
//         res.write('<html><body>Not Found</body></html>');
//         res.end();
//     }
// });



/*function suma(num1, num2){
    return num1 + num2
}

console.log("La suma es:", suma(2,4));*/