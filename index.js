var http = require('http');

//create a server object:
http.createServer(function (req, res) {
  res.write('hello all today is wonderful day'); //write a response to the client
  res.end(); //end the response
}).listen(80); //the server object listens on port 80 , mention your port specific

