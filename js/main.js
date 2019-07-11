
var ctx = document.getElementById('myChart').getContext('2d');

fetch('https://financialmodelingprep.com/api/v3/historical-price-full/FB').then((res) => {
  return res.json();
}).then((json) => {

  console.log(json);

  var labels = [];
  var data = [];

  for (var i = 0; i < 30; i++) {
    //console.log(json.historical[i]);
    labels.push(json.historical[i].label);
    data.push(json.historical[i].close);
  }


  var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: labels,
        datasets: [{
            data: data,
        }]
    },
  });

});