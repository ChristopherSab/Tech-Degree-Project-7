

//Notifications//

const notificationBell = document.getElementsByClassName('bell-icon')[0];

const notificationList = document.getElementsByClassName('notifications')[0];


notificationBell.addEventListener ('click', () => {

    // Removes the green Notification Alert dot when bell is clicked //
    const notificationGreenDot = document.querySelector('.dot');
    notificationGreenDot.style.display = "none";

    notificationList.innerHTML =
`
<ul>
    <li class="notification-item">You Have 1 Unread Message   <span class="cancel">X</span> </li>
    <li class="notification-item">You Have 7 New Followers   <span class="cancel">X</span> </li>
    <li class="notification-item">Your Trial Expires In 2 Days   <span class="cancel">X</span> </li>
</ul>
`;

    const removeNotification = document.querySelectorAll('.cancel');
    removeNotification.forEach(notification => {
        notification.addEventListener('click', e => {
            const element = e.target;
            if (element.classList.contains('cancel')) {
                let parentNotification = element.parentNode;
                console.log(parentNotification);
                let ul = document.querySelector('.notifications ul');
                console.log(ul);
                ul.removeChild(parentNotification);

                if (ul.childElementCount === 0) {
                    ul.style.display = "none";
                  }
            } 

        });

    });
});


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

        responsive: true,
        maintainAspectRatio: false,
         
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

// Hourly  Data Update
const hourlyData = document.getElementsByClassName('traffic-nav-link')[0];
const hourlyDataValues = [10,30,00,40,10,50,10,20,30,40,40,40];

hourlyData.addEventListener('click', () => {
  
	cityTrafficData.data.datasets[0].data = hourlyDataValues;
	cityTrafficData.update();
});

// Daily  Data Update
const dailyData = document.getElementsByClassName('traffic-nav-link')[1];
const dailyDataValues = [105,307,503,408,103,504,107,201,309,402,401,405];

dailyData.addEventListener('click', () => {
    
	cityTrafficData.data.datasets[0].data = dailyDataValues;
	cityTrafficData.update();
});

// Weekly Data Update
const weeklyData = document.getElementsByClassName('traffic-nav-link')[2];
const weeklyDataValues = [530,450,919,1200,480,2000,501,667,992,1400,1433,2009];

weeklyData.addEventListener('click', () => {
    
	cityTrafficData.data.datasets[0].data = weeklyDataValues;
	cityTrafficData.update();
});

// Monthly Data Update
const monthlyData = document.getElementsByClassName('traffic-nav-link')[3];
const monthlyDataValues = [4500,6000,4000,7000,5500,3003,1000,7500,2000,3500,6500];

monthlyData.addEventListener('click', () => {

	cityTrafficData.data.datasets[0].data = monthlyDataValues;
	cityTrafficData.update();
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

        responsive: true,
        maintainAspectRatio: false,
         
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

        responsive: true,
        maintainAspectRatio: false,
         
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


/* Messaging Section */

const user = document.getElementById("userField");
const message = document.getElementById("messageField");
const send = document.getElementById("send");

send.addEventListener('click', () => {
    if (user.value === "" && message.value === "") {
    alert("Please fill out user and message fields before sending");
    } else if (user.value === "" ) {
    alert("Please fill out user field before sending");
    } else if (message.value === "" ) {
    alert("Please fill out message field before sending");
    } else {
    alert(`Message successfully sent to: ${user.value}`);
    }
});

// Autocomplete Plugin

var userNames = ['Victoria Chambers' , 'Dale Byrd' , 'Dawn Wood' , 'Dan Oliver'];

$(function () { 
    $("#userField").autocomplete({
      source: [userNames]
    }); 
  });