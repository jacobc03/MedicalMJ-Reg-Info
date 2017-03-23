angular
	.module('mjStateRegInfo.politicians')
	.controller('PoliticiansCtrl', PoliticiansCtrl)

	function PoliticiansCtrl() {
		var vm = this;
		var doughnutChart = $("#doughnutChart")
		var myDoughnutChart = new Chart(doughnutChart, {
		    type: 'doughnut',
		    data: {
			    labels: [
			        "Red",
			        "Blue",
			        "Yellow"
			    ],
			    datasets: [
			        {
			            data: [300, 50, 100],
			            backgroundColor: [
			                "green",
			                "#36A2EB",
			                "#FFCE56"
			            ],
			            hoverBackgroundColor: [
			                "#FF6384",
			                "#36A2EB",
			                "#FFCE56"
			            ]
			        }
			    ]
			},
		    options: {
		        animation:{
		            animateScale:true
		        }
		    }
		})
		// vm.politicianInfo= [];

		// // vm.state = {

		// // };

		// // function selectState(stateName) {
		// // 	stateinfo.queryfunction()

		// // 	vm.state.name = data.state;
			
		// // }

		// //use the stateInfo service to get all state info from the db
		// politiciansAPI.getPoliticians(vm.politicianInfo);
		// console.log(vm.politicianInfo);
	
	}