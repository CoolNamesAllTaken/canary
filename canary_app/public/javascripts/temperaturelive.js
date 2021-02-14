const socket = io.connect();

socket.on('temperature:inside', function(data) {
    now = new Date()
    addData(chart, [now.getHours(), now.getMinutes(), now.getSeconds()].join(":"), +data, 1);
});

socket.on('temperature:outside', function(data) {
    now = new Date()
    addData(chart, [now.getHours(), now.getMinutes(), now.getSeconds()].join(":"), +data, 0);
});

var ctx = document.getElementById('tempchart').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
        labels: [],
        datasets: [{
            label: 'Outdoor temperature',
            backgroundColor: '#5d9b4a',
            borderColor: '#5d9b4a',
            data: [],
            fill: false,
        }, {
            label: 'In-birdhouse temperature',
            backgroundColor: '#FFDB00',
            borderColor: '#FFDB00',
            data: [],
            fill: false,
        }]
    },

    // Configuration options go here
    options: {}
});

function addData(chart, label, data, type) {
    chart.data.labels.push(label);
    chart.data.datasets[type].data.push(data);
    chart.update();
}

function removeData(chart) {
    chart.data.labels.pop();
    chart.data.datasets.forEach((dataset) => {
        dataset.data.pop();
    });
    chart.update();
}

// var ctx = document.getElementById('myChart2').getContext('2d');
// var myBarChart = new Chart(ctx, {
//     type: 'bar',
//     data: data,
//     options: options
// });