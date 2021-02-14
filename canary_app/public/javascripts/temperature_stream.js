const socket = io.connect();

socket.on('temperature:inside', function(data) {
    console.log('temperature-inside=', data);
    document.getElementById("temperature-inside").innerHTML = data;
});

socket.on('temperature:outside', function(data) {
    console.log('temperature-outside=', data);
    document.getElementById("temperature-outside").innerHTML = data;
});