// assumes that it's being used in layout where socketio has already been brought in

const socket = io.connect('localhost:3000');
socket.on('image', (data) => {
    console.log('data', data);
})