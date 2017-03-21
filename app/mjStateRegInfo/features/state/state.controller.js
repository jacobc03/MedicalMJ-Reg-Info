angular
	.module('mjStateRegInfo.state')
	.controller('StateCtrl', StateCtrl)

	function StateCtrl(stateInfo) {
		var vm = this;
		
		//set a variable to store the date from db
		vm.stateRegInfo= [];

		// vm.state = {

		// };

		// function selectState(stateName) {
		// 	stateinfo.queryfunction()

		// 	vm.state.name = data.state;
			
		// }

		//use the stateInfo service to get all state info from the db
		stateInfo.getStateInfo(vm.stateRegInfo);
		console.log(vm.stateRegInfo);
	}