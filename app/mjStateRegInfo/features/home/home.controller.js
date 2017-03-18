angular
	.module('mjStateRegInfo.home')
	.controller('HomeCtrl', HomeCtrl)

	function HomeCtrl(stateInfo) {
		var vm = this;
		
		//set a variable to store the date from db
		vm.stateRegInfo= [];

		//use the stateInfo service to get all state info from the db
		stateInfo.getStateInfo(vm.stateRegInfo);
		console.log(vm.stateRegInfo);
	}