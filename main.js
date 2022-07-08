
var xValues = ["Gaut", "KZN", "WC", "Limp", "NW", "FS", "EC", "NC",];
var yValues = [35, 14, 21, 3, 8, 2, 4, 1,];
var barColors = ["red", "green","blue","orange","brown","red", "green","blue","orange",];

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
      data: [0,1,0,0,0,0,1,6,4,1,4,7,11,2,2,3,3,6,4,0,2,24,7],
      borderColor: "orange",
      fill: false
    }]
  },
  options: {
    legend: {display: false}
  }
});


var xValues = ["Ages 10-19","Ages 20-29", "Ages 30-39", "Ages 40+", "Unknown",];
var yValues = [4, 47, 27, 4, 6,];
var barColors = [
  "#b91d47",
  "#00aba9",
  "#2b5797",
  "#e8c3b9",
 
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