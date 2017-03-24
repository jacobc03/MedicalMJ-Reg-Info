angular
	.module('mjStateRegInfo.politicians')
	.controller('PoliticiansCtrl', PoliticiansCtrl)

	function PoliticiansCtrl($http) {
		var vm = this;


		vm.politicianInfo= {
			info:''
		};

		

		vm.searchPoliticians= function(){
		
		$http.post('/searchPoliticians', { strain: vm.politicianInfo.info })
		.then(function(data){
			console.log(data)
			vm.polInfo = data.data.results
			console.log(data.data.results.members.domain)
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
			            data: [300, 50, 100],
			            backgroundColor: [
			                "#008000",
			                "#DFD911",
			                "#0EC459"
			            ],
			            hoverBackgroundColor: [
			                "#05CF08",
			                "#F8F10F",
			                "#12E76A"
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
			            data: [300, 50, 100],
			            backgroundColor: [
			                "#008000",
			                "#DFD911",
			                "#0EC459"
			            ],
			            hoverBackgroundColor: [
			                 "#05CF08",
			                "#F8F10F",
			                "#12E76A"
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
			            data: [300, 50, 100],
			            backgroundColor: [
			                "#008000",
			                "#DFD911",
			                "#0EC459"
			            ],
			            hoverBackgroundColor: [
			                 "#05CF08",
			                "#F8F10F",
			                "#12E76A"
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