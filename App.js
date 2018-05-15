var dieOptions = require('./DieRoll.js');
console.log(dieOptions.dieRoll(6));
var http = require('http');

var fs = require('fs');
http.createServer(function (req, res) {
 // res.write('hello');
res.write(dieOptions.dieRoll(6).toString());
 res.end();
}).listen(8080);

