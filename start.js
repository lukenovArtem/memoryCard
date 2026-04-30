const http = require('http');
const fs = require('fs');
const path = require('path');

const hostname = '192.168.10.204';
const port = 3003;

const server = http.createServer((req, res) => {
  console.log('Запрос:', req.url);
  
  if (req.url === '/' || req.url === '/card.html') {
    // Обслуживание HTML файла
    fs.readFile('card.html', (err, data) => {
      if (err) {
        console.error('Ошибка чтения card.html:', err);
        res.statusCode = 500;
        res.setHeader('Content-Type', 'text/plain');
        res.end('Error loading card.html');
        return;
      }
      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/html');
      res.end(data);
    });
  } 
  } else {
    // Обработка других запросов
    res.statusCode = 404;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Not found');
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
