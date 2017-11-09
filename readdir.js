var fs = require('fs'),
	dirPath = './',
	filePath = './readdir.txt';

fs.readdir(dirPath, 'utf-8', function(err, files) {
	if (err) throw err;
	console.log('Zawartość katalogu:');

	
	fs.unlink(filePath, function(err) {
		if (err) throw err;
	});

	files.forEach( function(file){
		console.log(file);
		
		fs.appendFile(filePath, file +'\r\n', function(err) {
			if (err) {
			    console.log('Błąd: ' + err);
			}; 
		});
	});
});