const socket = io.connect();

socket.on('temperature:inside', function(data) {
    console.log('temperature-inside=', data);
    document.getElementById('temperature-inside').innerHTML = data;
});

socket.on('temperature:outside', function(data) {
    console.log('temperature-outside=', data);
    document.getElementById('temperature-outside').innerHTML = data;
});

socket.on('camera:inside', function(data) {
    console.log('camera-inside arrived!');
    const image = document.getElementById('camera-inside');
    image.src = `data:image/jpeg;base64,${data}`;
});