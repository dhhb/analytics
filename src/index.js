import http from 'http';
import express from 'express';
import io from 'socket.io';
import { host, port, env, mongodb } from 'c0nfig';

const app = express();
const server = http.createServer(app);
const socket = io(server);

socket.on('connection', client => {
  client.on('admin-user', data => {
    console.log(data);
  });
});

export function start () {
  server.listen(port, () => {
    console.log(`analytics server is listening on http://${host}:${port} env=${env} db=${mongodb.connection}`);
  });
}
