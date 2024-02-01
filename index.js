const http = require('http');
const path = require('path');
const fs = require('fs');

const server = http.createServer((req, res) => {
	//Build file path
	let filePath = path.join(
		__dirname,
		req.url === '/' ? 'index.html' : req.url
	);

	//Extension of file
	let extension = path.extname(filePath);

	//Content type
	let contentType = extension === '.css' ? 'text/css' : 'text/html';

	fs.readFile(filePath, (err, content) => {
		if (err) {
			if (err.code === 'ENOENT') {
				//Page not found
				fs.readFile(
					path.join(__dirname, '404.html'),
					(err, content) => {
						if (err) {
							console.error(err);
						}
						res.writeHead(200, { 'Content-Type': 'text/html' });
						res.end(content, 'utf8');
					}
				);
			} else {
				//Some server error
				res.writeHead(500);
				res.end(`Server Error: ${err.code}`);
			}
		} else {
			res.writeHead(200, { 'Content-Type': `${contentType}` });
			res.end(content, 'utf8');
		}
	});
});

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log(`Server running on port: ${PORT}`));
