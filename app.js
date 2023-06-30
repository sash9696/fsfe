const http = require('http');
http.createServer(function(req, res){
 res.write("I am Shalaka Chopra Jo lega Panga podh dungi uska tobhda");
 res.end();
}).listen(3000);

console.log(`Server started on port 3000`);
