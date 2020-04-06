
//Alert Button//
const alertBanner = document.getElementById("alert");

alertBanner.innerHTML =
`
<div class="alert-banner">
<p><strong>Alert:</strong> You have <strong>6</strong> overdue tasks to complete</p>
<p class="alert-banner-close">X</p>
</div>
`;

alertBanner.addEventListener('click', e => {
    const element = e.target;
    if (element.classList.contains("alert-banner-close")) {
    alertBanner.style.display = "none"
    }
});

//Traffic Data//
let trafficChart = document.getElementById("traffic-chart").getContext('2d');


let trafficOptions = {
    aspectRatio: 2.5,
    lineTension: 0,
    animation: {
    duration: 0
    },
    scales: {
    yAxes: [{
    ticks: {
    beginAtZero:true
    }
    }]
    },
    legend : {
    display: false
    }
    };

//Global Default Options
//cityTrafficData.defaults.global.defaultFontFamily = 'Lato',


let cityTrafficData = new Chart(trafficChart, {
    type: 'line', //types of chart could be: bar, horizontal bar, doughnut, pie, radar ...

    data: {
        labels: ['Leeds', 'Sheffield', 'Manchester', 'Birmingham', 'London', 'Swansea', 'Newcastle',
        'Liverpool', 'Bradford', 'Wolverhampton', 'Nottingham'],

        datasets: [{
            data: [
                4551,
                6853,
                3955,
                7843,
                9556,
                3003,
                1923,
                8641,
                2993,
                2527,
                7299
            ],
            
            lineTension: 0,
            pointBackgroundColor: 'white',
            pointBorderColor: '#7580BF',
            pointBorderWidth: 3,
            pointRadius: 5,

            
        }]
    },

    options: {
         
        legend: {
            display: false
        }

    }
    

});

