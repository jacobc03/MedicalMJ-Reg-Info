angular
	.module('mjStateRegInfo.strains')
	.controller('StrainsCtrl', StrainsCtrl)

	function StrainsCtrl() {
		var vm = this;
		//mkae http request to get api from node

		// //set a variable to store the date from db
		// vm.strainInfo= {
		// 	//name :data.data.name
		// 	//url
		// 	//image
		// 	//seedCompany
		// 	//seedCompany.name
		// 	//seedCompany.link
		// 	//genetics.names
		// 	//genetics.link
		// 	//lineage
		// 	//children
		// 	//children.count
		// 	//children.link
		// 	//reviews
		// 	//reviews.count
		// 	//reviews.link

		// };

		// // vm.state = {

		// // };

		// // function selectState(stateName) {
		// // 	stateinfo.queryfunction()

		// // 	vm.state.name = data.state;
			
		// // }

		// //use the stateInfo service to get all state info from the db
		// strainsAPI.getStrains(vm.strainInfo);
		// console.log(vm.strainInfo);
	}