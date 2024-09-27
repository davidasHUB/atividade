let http = require('http');
let fs= require('fs');
http.createServer(function (req, res) {
  

  
  switch (req.method){
    

    case "GET":
      fs.readFile('index.html', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data);
      return res.end();
      });
      break;

    default:
      fs.readFile('404.html', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data);
      return res.end();
      });
      break;

  }
  


}).listen(8080); 