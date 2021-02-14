var ctx = document.getElementById('timechart').getContext('2d');

var timeline = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ["2/01","2/02","2/03","2/04","2/05","2/06","2/07","2/08","2/09","2/10","2/11","2/12","2/13","2/14"],
    datasets: [{
        label: 'Enter/exit birdhouse',
        backgroundColor: '#333',
        borderColor: '#333',
        data: [7,4,6,3,5,5,6,5,2,11,7,6,8,5]
    }, {
        label: 'Chick hatched',
        backgroundColor: '#5d9b4a',
        borderColor: '#5d9b4a',
        data: [0,0,0,0,0,1,0,1,0,0,0,0,0,0]
    }, {
      label: 'Chick fed',
      backgroundColor: '#FFDB00',
      borderColor: '#FFDB00',
      data: [0,0,0,0,0,1,2,4,3,3,2,3,3,2]
  }, {
    label: 'Egg laid',
    backgroundColor: 'rgb(255, 99, 132)',
    borderColor: 'rgb(255, 99, 132)',
    data: [2,0,0,0,0,0,0,0,0,0,0,0,0,0]
}]
},
});