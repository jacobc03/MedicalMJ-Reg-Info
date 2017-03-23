angular
	.module('mjStateRegInfo.home')
	.controller('HomeCtrl', HomeCtrl)

	function HomeCtrl() {
		//Defined chart var
		
		var lineChart = $("#lineChart");
		//Defined new lineChart var
		var myLineChart = new Chart(lineChart, {
			type:'line',
			data: {
				labels: ["2010", "2011", "2012", "2013", "2014", "2015"],
				datasets: [
					//First line
					{
					label: "Opioid Drugs",
					fill: false,
					lineTension: 0.1,
					backgroundColor: "rgba(75,192,192,0.4)",
					borderColor: "#8B0000",
					borderCapStyle: 'butt',
					borderDash: [],
					borderDashOffset: 0.0,
					borderJoinStyle: 'miter',
					pointBorderColor: "#8B0000",
					pointBackgroundColor: "#fff",
					pointBorderWidth: 1,
					pointHoverRadius: 5,
					pointHoverBackgroundColor: "#8B0000",
					pointHoverBorderColor: "#8B0000",
					pointHoverBorderWidth: 2,
					pointRadius: 5,
					pointHitRadius: 10,
					data: [21000, 22800, 23500, 25000, 29000, 33000],
					spanGaps: false,
					},
					//Second line
					{
					label: "Prescription Opioid Pain Relievers",
					fill: false,
					lineTension: 0.1,
					backgroundColor: "rgba(75,192,192,0.4)",
					borderColor: "#FF4500",
					borderCapStyle: 'butt',
					borderDash: [],
					borderDashOffset: 0.0,
					borderJoinStyle: 'miter',
					pointBorderColor: "#FF4500",
					pointBackgroundColor: "#fff",
					pointBorderWidth: 1,
					pointHoverRadius: 5,
					pointHoverBackgroundColor: "#FF4500",
					pointHoverBorderColor: "#FF4500",
					pointHoverBorderWidth: 2,
					pointRadius: 5,
					pointHitRadius: 10,
					data: [16800, 17800, 16500, 16200, 17000, 17400],
					spanGaps: false,
					},
					//Third line
					{
					label: "Marijuana",
					fill: false,
					lineTension: 0.1,
					backgroundColor: "rgba(75,192,192,0.4)",
					borderWidth:4,
					borderColor: "green",
					borderCapStyle: 'butt',
					borderDash: [],
					borderDashOffset: 0.0,
					borderJoinStyle: 'miter',
					pointBorderColor: "green",
					pointBackgroundColor: "#fff",
					pointBorderWidth: 1,
					pointHoverRadius: 5,
					pointHoverBackgroundColor: "green",
					pointHoverBorderColor: "green",
					pointHoverBorderWidth: 2,
					pointRadius: 5,
					pointHitRadius: 10,
					data: [0, 0, 0, 0, 0, 0, 0],
					spanGaps: false,
					}
				]
			},
		});
	}
	