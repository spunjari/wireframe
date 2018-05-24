var http = require('http');
http.createServer(function(request, response){
    response.write(200, {'content-type': 'text/html'});
    response.end('myfirst hello world');
})
.listen(8888);

