var http = require('http'),
	fs = require('fs'),
	imgPath = '13.8-404.jpg',
	filePath = './13.8.html';

var server = http.createServer(function (request, response) {
response.setHeader("Content-Type", "text/html; charset=utf-8");

    if (request.method === 'GET' && request.url === '/') {
		fs.readFile(filePath, 'utf-8', function(err, data) {
			if (err) throw err;
		    response.write(data);        
            response.end();
        });
    } else {
		fs.readFile(imgPath, function(err, img) {
			if (err) throw err;
		  	response.writeHead(404,{'Content-type':'image/jpg'});
            response.end(img);
		  });
    }
});

server.listen(9000);