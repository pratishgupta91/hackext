function DrawBarChart(items, chartElem) {
	// items map
	var itemLabels = new Array();
	var itemCounts = new Array();

	for(var i = 0; i < items.length && i < 7; i++) {
		itemLabels.push(items[i][0]);
		itemCounts.push(items[i][1]);
	}

	var myChart = new Chart(chartElem, {
	    type: 'bar',
	    data: {
	        labels: itemLabels,
	        datasets: [{
            label: 'Count',
            data: itemCounts,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(255, 99, 132, 0.2)'
            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)' ,
                'rgba(255, 99, 132, 0.2)'
            ],
            borderWidth: 1
        }]
	    },
	    options: {
	        scales: {
	            yAxes: [{
	                ticks: {
	                    beginAtZero:true
	                }
	            }]
	        }
	    }
	});
}