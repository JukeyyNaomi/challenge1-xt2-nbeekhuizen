

// LIJNGRAFIEK


var ctx = document.getElementById('myChart').getContext('2d');
var chart = new Chart(ctx, {
  // The type of chart we want to create-->
     type: 'line',

  // The data for our dataset-->
      data: {
          labels: ['1', '2', '3', '4', '5'],
          datasets: [{
               label: 'Speed in km/h',
               
                backgroundColor: 'rgba(0, 100, 250, 0.75)',
                borderColor: 'rgb(0, 0, 150)',
                pointBackgroundColor: '#fff',
                pointBorderColor: '#fff',
                data: [100, 450, 719, 1240, 2500]
                    }]
              },

 // Configuration options go here
//     options: {
//         legend: {
//             display: true,
//             labels: {
//                 fontColor: 'white'
//              }
//          }
//      },
//  

//  options: {
//     scales: {
//         yAxes: [{
//           gridLines: {
//            color: 'white' // makes grid lines from y axis red
//              }
//          }]
// 
//      }
// 
//   }
// }); 
 
 options: {
        legend: {
            display: true,
            labels: {
                fontColor: 'white'
            }
        },
        scaleFontColor: 'red',
        responsive: true,
        tooltips: {
            mode: 'single',
        },
        
        scales: {
            xAxes: [{ 
            
                gridLines: {
                    color: '#fff',
                },
                ticks: {
                  fontColor: '#fff', // this here
                },
            }],
            yAxes: [{
                gridLines: {
                    color: '#fff',
                },
                ticks: {
                    fontColor: '#fff',
                },
            }],
        }
    }  
});
 
 
 
 
 
 
 
 
//  // STAAFGRAFIEK
 
 
 
 
 
 
 var ctx = document.getElementById('myChart2').getContext('2d');
 var myBarChart = new Chart(ctx, {
    type: 'horizontalBar',
    data: {
        labels: ['Oxigen', 'Carbon', 'Water','Cookies', 'Fuel'],
        datasets: [{
               label: 'Conditions',
               barPercentage: 0.5,
                backgroundColor:  [
                        'rgba(0,100,250, 0.75)',
                        'rgba(0,100,250, 0.75)',
                        'rgba(0,100,250, 0.75)',
                        'rgba(0,100,250, 0.75)',
                        'rgba(0,100,250, 0.75)'
                        ],
                borderColor: 'rgba(0,0,150,1)',
                borderWidth: 2,
                data: [339, 130, 219, 240, 313]
          }]
                
      },
      options: {
        legend: {
            display: true,
            labels: {
                fontColor: 'white'
            }
        },
        responsive: true,
        tooltips: {
            mode: 'single',
        },
        scales: {
            xAxes: [{ 
                
                gridLines: {
                    color: '#fff',
                },
                ticks: {
                  fontColor: '#fff', // this here
                },
            }],
            yAxes: [{
                gridLines: {
                    color: '#fff',
                },
                ticks: {
                    fontColor: '#fff',
                },
            }],
        }
    }
  });


//  var ctx = document.getElementById('myChart2').getContext('2d');
//  var myBarChart = new Chart(ctx, {
//     type: 'horizontalBar',
//     data: {
//         labels: ['2013', '2014', '2015', '2016', '2017'],
//         datasets: [{
//                label: 'Tesla stock data',
//                barPercentage: 0.5,
//                barThickness: 6,
//                maxBarThickness: 8,
//                minBarLength: 2,
//                 backgroundColor: 'rgba(255, 99, 132, 0.5)',
//                 hoverBackgroundColor: 'rgba(120, 48, 222, 0.5)',
//                 borderColor: 'rgb(255, 99, 132)',
//                 data: [39, 150, 219, 240, 213]
//           }]
//                 
//       },
//   });






// GEKKE VETTE GRAFIEK



var ctx = document.getElementById('myChart3').getContext('2d');
var myRadarChart = new Chart(ctx, {
    type: 'radar',
    data: {
        labels: ['Food', 'Water', 'Medical', 'Oxygen', 'CPR'],
        datasets: [{
               label: 'Supplies in portions pp',
                backgroundColor: 'rgba(0, 100, 250, 0.5)',
                borderColor: 'rgb(0, 0, 150)',
                pointBackgroundColor: 'white',
//              barPercentage: 2,
                data: [350, 400, 225, 364, 150]
                
          }]
        },
 
        
        
   options: {
        
        legend: {
            labels: {
                fontColor: 'white',
            }
        },
   
        scale: {
          angleLines: {
            display: true,
            lineWidth: 1,
            color: 'rgba(250, 250, 250, 0.25)'
          },
          
          gridLines: {
            color: ['rgba(250, 250, 250, 0.25',
            'rgba(250, 250, 250, 0.25',
            'rgba(250, 250, 250, 0.25',
            'rgba(250, 250, 250, 0.25',
            'rgba(250, 250, 250, 0.2',
            'rgba(250, 250, 250, 0.1',
            'rgba(250, 250, 250, 0.1',
            'rgba(250, 250, 250, 0.05'
            ]
          },
          
          pointLabels: {
//             fontSize: 14,
//             fontStyle: '300',
            fontColor: 'rgba(250, 250, 250, 1)',
//             fontFamily: "'Lato', sans-serif"
          },
          ticks: {
            beginAtZero: true,
//             maxTicksLimit: 5,
//             min: 0,
//             max: 5,
            display: false,
          }
        }
      }
        
        
        
        
//     options: {
//         legend: {
//             labels: {
//                 fontColor: 'white',
//             }
//         },
//     
//     scale: {
//       gridLines: {
//         color: ['white', 'white', 'white']
//       }
//     }
//   }
        
        
      

});
