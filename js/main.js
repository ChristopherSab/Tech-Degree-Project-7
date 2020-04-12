
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


let cityTrafficData = new Chart(trafficChart, {
    type: 'line', //types of chart could be: bar, horizontal bar, doughnut, pie, radar ...

    data: {
        labels: ['Leeds', 'Sheffield', 'Manchester', 'Birmingham', 'London', 'Swansea', 'Newcastle',
        'Liverpool', 'Bradford', 'Wolverhampton', 'Nottingham'],

        datasets: [{
            data: [
                4500,
                6000,
                4000,
                7000,
                5500,
                3003,
                1000,
                7500,
                2000,
                3500,
                6500
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
        },

        scales: {
            yAxes: [{
                stacked: true
            }]
        }
    }

});

// Daily Traffic Bar Chart

let dailyTrafficData = document.getElementById("daily-chart").getContext('2d');


let dailyChart = new Chart(dailyTrafficData, {
    type: 'bar', //types of chart could be: bar, horizontal bar, doughnut, pie, radar ...

    data: {
        labels: ['M ', 'T', 'W', 'T', 'F', 'S', 'S'],

        datasets: [{
            data: [
                455,
                555,
                350,
                600,
                755,
                460,
                192
            ],
            
            backgroundColor: '#7580BF',
            borderRadius: 5,
           // pointBorderColor: '#7580BF',
           // pointBorderWidth: 3,


            
        }]
    },

    options: {
         
        legend: {
            display: false
        },
    }

});

// Mobile Users

let mobileData = document.getElementById("doughnut-chart").getContext('2d');


let mobileDataChart = new Chart(mobileData, {
    type: 'doughnut', //types of chart could be: bar, horizontal bar, doughnut, pie, radar ...

    data: {
        labels: ['Phones', 'Tablets', 'Desktop'],

        datasets: [{
            data: [
                10,
                15,
                75,
            ],
            
            backgroundColor: ['#75B8BF', '#7EBF88', '#7580BF'],
            borderRadius: 5,

            
        }]
    },

    options: {
         
        legend: {
            display: true,
            position: 'right',
            labels: {
                boxWidth: 25,
                fontStyle: 'bold'
                } 
        },    

    }

});

