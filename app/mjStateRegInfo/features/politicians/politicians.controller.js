angular
	.module('mjStateRegInfo.politicians')
	.controller('PoliticiansCtrl', PoliticiansCtrl)

	function PoliticiansCtrl($http) {
		var vm = this;

		//holds what state the user picks
		vm.politicianInfo= {
			state:''
		};

		

		vm.searchPoliticians= function(){
		
		$http.post('/searchPoliticians', { state: vm.politicianInfo.state })
		.then(function(data){
			console.log(data)
			vm.polInfo = data.data.results
		})
}
		
		// politiciansAPI.getPoliticians(vm.politicianInfo);
		// console.log(vm.politicianInfo);
		var doughnutChart = $("#doughnutChart");
		var doughnutChart2 = $("#doughnutChart2");
		var doughnutChart3 = $("#doughnutChart3");
		var myDoughnutChart = new Chart(doughnutChart, {
		    type: 'doughnut',
		    data: {
			    labels: [
			        "For",
			        "Against",
			        "Undecided"
			    ],
			    datasets: [
			        {
			            data: [73, 21, 6],
			            backgroundColor: [
			                "#008000",
			                "#170982",
			                "#6c0996"
			            ],
			            hoverBackgroundColor: [
			                "#05CF08",
			                "#250de0",
			                "#a30de2"
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
		var myDoughnutChart2 = new Chart(doughnutChart2, {
		    type: 'doughnut',
		    data: {
			    labels: [
			       "For",
			        "Against",
			        "Undecided"
			    ],
			    datasets: [
			        {
			            data: [81, 18, 1],
			            backgroundColor: [
			               "#008000",
			                "#170982",
			                "#6c0996"
			            ],
			            hoverBackgroundColor: [
			                "#05CF08",
			                "#250de0",
			                "#a30de2"
			            ]
			        }
			    ]
			}
		})
		var myDoughnutChart3 = new Chart(doughnutChart3, {
		    type: 'doughnut',
		    data: {
			    labels: [
			        "For",
			        "Against",
			        "Undecided"
			    ],
			    datasets: [
			        {
			            data: [93, 6, 1],
			            backgroundColor: [
			               "#008000",
			                "#170982",
			                "#6c0996"
			            ],
			            hoverBackgroundColor: [
			                "#05CF08",
			                "#250de0",
			                "#a30de2"
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
		
	
	}