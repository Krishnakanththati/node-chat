const express = require('express');
const socketIO = require('socket.io');

const app = express();

const PORT = process.env.PORT || 3000;

// App setup
const server = app.listen(PORT, () => {
    console.log('App listening on Port -> http://localhost:' + PORT);
});

// Socket setup
const io = socketIO(server);

io.on('connection', (socket) => {
    console.log('connection success...');
    io.sockets.emit('auth', 'connection is success');
    socket.on('chat', function (data) {
        data['timestamp'] = new Date();
        io.sockets.emit('chat', data);
    });
});