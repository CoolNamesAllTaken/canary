const io = require('socket.io')();

// Add your socket.io logic here!
io.on('connection', function(socket) {
    console.log('A user connected');
});
// end of socket.io logic

module.exports = io;