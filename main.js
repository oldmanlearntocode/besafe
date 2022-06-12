
var xValues = ["Gaut", "KZN", "WC", "Limp", "NW", "FS", "EC", "NC"];
var yValues = [55, 49, 44, 24, 15, 5, 7, 8];
var barColors = ["red", "green","blue","orange","brown","red", "green","blue","orange","brown"];

new Chart("myChart", {
  type: "bar",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: barColors,
      data: yValues
    }]
  },
  options: {
    legend: {display: false},
    title: {
      display: true,
      
    }
  }
});


var xValues = [2000,2001,2002,2003,2004,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022];

new Chart("myChart2", {
  type: "line",
  data: {
    labels: xValues,
    datasets: [{ 
      data: [0,0,0,0,0,0,04,03,01,2,3,1,0,0,0,0,1,0,0,1,1,22,5],
      borderColor: "orange",
      fill: false
    }]
  },
  options: {
    legend: {display: false}
  }
});


var xValues = ["Ages 10-19","Ages 20-29", "Ages 30-39", "Ages 40-49",];
var yValues = [2, 15, 20, 3];
var barColors = [
  "#b91d47",
  "#00aba9",
  "#2b5797",
  "#e8c3b9",
  "#1e7145"
];

new Chart("myChart3", {
  type: "doughnut",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: barColors,
      data: yValues
    }]
  },
  options: {
    title: {
      display: true,
      
    }
  }
});