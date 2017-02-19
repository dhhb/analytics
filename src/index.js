import http from 'http';
import express from 'express';
import socketio from 'socket.io';
import { host, port, env, mongodb } from 'c0nfig';

const app = express();
const server = http.createServer(app);
const io = socketio(server);

const admin = io.of('/admin');

admin.on('connection', client => {
  client.on('connect-admin-user', data => {
    console.log(data);
    client.broadcast.emit('connected-admin-user', data);
  });
});

export function start () {
  server.listen(port, () => {
    console.log(`analytics server is listening on http://${host}:${port} env=${env} db=${mongodb.connection}`);
  });
}
