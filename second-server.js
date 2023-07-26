var http = require('http');//require method to calling any modules
var imp=require('./second-module')
http.createServer(function(req,res){
    res.writeHead(200,{'Content-Type':'text/html'});
    res.write(imp.myMsg());
    res.end( );
}).listen(6500);