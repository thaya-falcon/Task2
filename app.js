const date = document.getElementById('date');
const d =new Date()
date.innerHTML = d;

const ctx = document.getElementById("myline").getContext("2d");
const ct = document.getElementById("my").getContext("2d");
const line1 = document.getElementById("line1").getContext("2d");
const line2 = document.getElementById("line2").getContext("2d");
const line3 = document.getElementById("line3").getContext("2d");

let line = new Chart(ctx,{
    type:"line",
    data: {
        labels: [233,454,353,34],
        datasets: [{
        fill: false,
        lineTension: 0.78,
        backgroundColor: "rgba(0,0,255,1)",
        borderColor: "rgba(222,0,0,1)",
        data: [42,435,646,355]
        }]
    },
    options: {
        legend: {display:true},
        scales: {
        yAxes: [{ticks: {min: 40, max:60}}],
        }
    }
});

let li = new Chart(ct,{
    type:"line",
    data: {
        labels: [233,454,353,34],
        datasets: [{
        fill: false,
        lineTension: 0.78,
        backgroundColor: "rgba(0,0,255,1)",
        borderColor: "rgba(22,078,30,1)",
        data: [42,435,646,355]
        }]
    },
    options: {
        legend: {display:true},
        scales: {
        yAxes: [{ticks: {min: 40, max:60}}],
        }
    }
});
let lin1 = new Chart(line1,{
    type:"line",
    data: {
        labels: [100,200,300,400,500],
        datasets: [{
        fill:false,
        lineTension: 0.78,
        backgroundColor: "rgba(34, 167, 240, 1)",
        borderColor: "rgba(255,255,255,1)",
        data: [42,35,46,125,19]
        }]
    },
    options: {
        legend: {display:true},
        scales: {
        yAxes: [{ticks: {min: 40, max:60}}],
        }
    }
});
let lie2 = new Chart(line2,{
    type:"line",
    data: {
        labels: [233,454,353,34],
        datasets: [{
        fill: false,
        lineTension: 0.78,
        backgroundColor: "rgba(0,0,255,1)",
        borderColor: "rgba(34, 167, 240, 1)",
        data: [42,435,646,355]
        }]
    },
    options: {
        legend: {display:true},
        scales: {
        yAxes: [{ticks: {min: 40, max:60}}],
        },
        segmentShowStroke: false
    }
});


let li2 = new Chart(line3,{
    type:"line",
    data: {
        labels: [233,454,353,34],
        datasets: [{
        fill: false,
        lineTension: 0.78,
        backgroundColor: "rgba(0,0,255,1)",
        borderColor: "rgba(22,078,30,1)",
        data: [42,435,646,355]
        }]
    },
    options: {
        legend: {display:true},
        scales: {
        yAxes: [{ticks: {min: 40, max:60}}],
        }
    }
});

// const config = {
//     type: 'line',
//     data: data,
//   };
//   const labels = Utils.months({count: 7});
// const data = {
//   labels: labels,
//   datasets: [{
//     label: 'My First Dataset',
//     data: [65, 59, 80, 81, 56, 55, 40],
//     fill: false,
//     borderColor: 'rgb(75, 192, 192)',
//     tension: 0.1
//   }]
// };
$(function(){

    $('.circlechart').circlechart();

  });