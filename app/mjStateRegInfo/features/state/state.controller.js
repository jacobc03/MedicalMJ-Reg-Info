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
	}