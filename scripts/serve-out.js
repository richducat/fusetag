const http = require('http');
const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..', 'out');
const port = process.env.PORT || 3000;

function contentType(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  const map = {
    '.html': 'text/html; charset=UTF-8',
    '.css': 'text/css; charset=UTF-8',
    '.js': 'application/javascript; charset=UTF-8',
    '.json': 'application/json; charset=UTF-8',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.jpeg': 'image/jpeg',
    '.svg': 'image/svg+xml',
    '.txt': 'text/plain; charset=UTF-8',
    '.ico': 'image/x-icon',
  };
  return map[ext] || 'application/octet-stream';
}

const server = http.createServer((req, res) => {
  const urlPath = req.url.split('?')[0];
  const safePath = urlPath.endsWith('/') ? `${urlPath}index.html` : urlPath;
  const filePath = path.join(root, decodeURIComponent(safePath));

  fs.readFile(filePath, (err, data) => {
    if (err) {
      const notFoundPath = path.join(root, '404.html');
      fs.readFile(notFoundPath, (nfErr, nfData) => {
        if (nfErr) {
          res.writeHead(404);
          res.end('404');
          return;
        }
        res.writeHead(404, { 'Content-Type': 'text/html; charset=UTF-8' });
        res.end(nfData);
      });
      return;
    }

    res.writeHead(200, { 'Content-Type': contentType(filePath) });
    res.end(data);
  });
});

server.listen(port, '0.0.0.0', () => {
  console.log(`Serving ./out at http://0.0.0.0:${port}`);
});
