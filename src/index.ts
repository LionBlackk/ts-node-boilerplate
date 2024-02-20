import express from 'express';
import http from 'http';

const port = 3000;
const app = express();
const server = http.createServer(app);

server.listen(port, () => {
  console.log(`Server is listening at port ${port}`);
});
