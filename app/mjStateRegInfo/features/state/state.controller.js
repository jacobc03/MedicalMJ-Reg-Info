angular
	.module('mjStateRegInfo.state')
	.controller('StateCtrl', StateCtrl)

	function StateCtrl(stateInfo) {
		var vm = this;
		vm.stateRegInfo= [];

		vm.state = {
			
		}

		vm.selectState = function(){
		
			console.log(vm.state);
			
			// $http.get('', something)
			// .then(function(res){
			// 	console.log('Successful: '+ res
			// })

		}
		

		// //use the stateInfo service to get all state info from the db
		stateInfo.getStateInfo(vm.stateRegInfo);
		console.log(vm.stateRegInfo);

		//Creted new map
  		var legalized = new Datamap({
  			scope: 'usa',
  			//Target element with id of marijuanaMap
  			element: document.getElementById('marijuanaMap'),
  			geographyConfig: {
    			highlightBorderColor: '#00fc00',
   				popupTemplate: function(geography, data) {
      				return '<div class="hoverinfo">' + geography.properties.name + ' Status: ' +  data.status + ' '
    			},
    			highlightBorderWidth: 3
  			},
  			//Created fill keys and colors
			fills: {
				'Recreational': '#008000',
				'Medical': '#05CF08',
				'Illegal': '#d4d8d4',
				defaultFill: 'red'
			},
			//Created data with fill key and status key
			data:{
			  "AZ": {
			      "fillKey": "Medical",
			      "status": 'Medical use only'
			  },
			  "CO": {
			      "fillKey": "Recreational",
			      "status": 'Legalized for Recreational & Medical use'
			  },
			  "DE": {
			      "fillKey": "Medical",
			      "status": 'Medical use only'
			  },
			  "FL": {
			      "fillKey": "Medical",
			      "status": 'Medical use only'
			  },
			  "GA": {
			      "fillKey": "Illegal",
			      "status": 'Illegal'
			  },
			  "HI": {
			      "fillKey": "Medical",
			      "status": 'Medical use only'
			  },
			  "ID": {
			      "fillKey": "Illegal",
			      "status": 'Illegal'
			  },
			  "IL": {
			      "fillKey": "Medical",
			      "status": 'Medical use only'
			  },
			  "IN": {
			      "fillKey": "Illegal",
			      "status": 'Illegal'
			  },
			  "IA": {
			      "fillKey": "Illegal",
			      "status": 'Illegal'
			  },
			  "KS": {
			      "fillKey": "Illegal",
			      "status": 'Illegal'
			  },
			  "KY": {
			      "fillKey": "Illegal",
			      "status": 'Illegal'
			  },
			  "LA": {
			      "fillKey": "Illegal",
			      "status": 'Illegal'
			  },
			  "MD": {
			      "fillKey": "Recreational",
			      "status": 'Legalized for Recreational & Medical use'
			  },
			  "ME": {
			      "fillKey": "Recreational",
			      "status": 'Legalized for Recreational & Medical use'
			  },
			  "MA": {
			      "fillKey": "Recreational",
			      "status": 'Legalized for Recreational & Medical use'
			  },
			  "MN": {
			      "fillKey": "Medical",
			      "status": 'Medical use only'
			  },
			  "MI": {
			      "fillKey": "Medical",
			      "status": 'Medical use only'
			  },
			  "MS": {
			      "fillKey": "Illegal",
			      "status": 'Illegal'
			  },
			  "MO": {
			      "fillKey": "Illegal",
			      "status": 'Illegal'
			  },
			  "MT": {
			      "fillKey": "Medical",
			      "status": 'Medical use only'
			  },
			  "NC": {
			      "fillKey": "Illegal",
			      "status": 'Illegal'
			  },
			  "NE": {
			      "fillKey": "Illegal",
			      "status": 'Illegal'
			  },
			  "NV": {
			      "fillKey": "Recreational",
			      "status": 'Legalized for Recreational & Medical use'
			  },
			  "NH": {
			      "fillKey": "Medical",
			      "status": 'Medical use only'
			  },
			  "NJ": {
			      "fillKey": "Medical",
			      "status": 'Medical use only'
			  },
			  "NY": {
			      "fillKey": "Medical",
			      "status": 'Medical use only'
			  },
			  "ND": {
			      "fillKey": "Medical",
			      "status": 'Medical use only'
			  },
			  "NM": {
			      "fillKey": "Medical",
			      "status": 'Medical use only'
			  },
			  "OH": {
			      "fillKey": "Medical",
			      "status": 'Medical use only'
			  },
			  "OK": {
			      "fillKey": "Illegal",
			      "status": 'Illegal'
			  },
			  "OR": {
			      "fillKey": "Recreational",
			      "status": 'Legalized for Recreational & Medical use'
			  },
			  "PA": {
			      "fillKey": "Medical",
			      "status": 'Medical use only'
			  },
			  "RI": {
			      "fillKey": "Medical",
			      "status": 'Medical use only'
			  },
			  "SC": {
			      "fillKey": "Illegal",
			      "status": 'Illegal'
			  },
			  "SD": {
			      "fillKey": "Illegal",
			      "status": 'Illegal'
			  },
			  "TN": {
			      "fillKey": "Illegal",
			      "status": 'Illegal'
			  },
			  "TX": {
			      "fillKey": "Illegal",
			      "status": 'Illegal'
			  },
			  "UT": {
			      "fillKey": "Illegal",
			      "status": 'Illegal'
			  },
			  "WI": {
			      "fillKey": "Illegal",
			      "status": 'Illegal'
			  },
			  "VA": {
			      "fillKey": "Illegal",
			      "status": 'Illegal'
			  },
			  "VT": {
			      "fillKey": "Medical",
			      "status": 'Medical use only'
			  },
			  "WA": {
			      "fillKey": "Recreational",
			      "status": 'Legalized for Recreational & Medical use'
			  },
			  "WV": {
			      "fillKey": "Illegal",
			      "status": 'Illegal'
			  },
			  "WY": {
			      "fillKey": "Illegal",
			      "status": 'Illegal'
			  },
			  "CA": {
			      "fillKey": "Recreational",
			      "status": 'Legalized for Recreational & Medical use'
			  },
			  "CT": {
			      "fillKey": "Medical",
			      "status": 'Medical use only'
			  },
			  "AK": {
			      "fillKey": "Recreational",
			      "status": 'Legalized for Recreational & Medical use'
			  },
			  "AR": {
			      "fillKey": "Medical",
			      "status": 'Medical use only'
			  },
			  "AL": {
			      "fillKey": "Illegal",
			      "status": 'Illegal'
			  },
			  "DC": {
			      "fillKey": "Recreational",
			      "status": 'Legalized for Recreational & Medical use'
			  }
			}
		});
		legalized.labels();
	}
	