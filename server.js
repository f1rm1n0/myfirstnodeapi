var server_port = process.env.OPENSHIFT_NODEJS_PORT || 8080;
var server_ip_address = process.env.OPENSHIFT_NODEJS_IP || process.env.OPENSHIFT_INTERNAL_IP;
 var http = require('http');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello Node.JS!');
  console.log( "Listening on " + server_ip_address + ", port " + server_port );
}).listen(server_port, server_ip_address);

console.log( "Listening on " + server_ip_address + ", port " + server_port );
