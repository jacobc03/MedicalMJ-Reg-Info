angular
	.module('mjStateRegInfo.politicians')
	.config(politiciansConfig);

function politiciansConfig($stateProvider) {
	$stateProvider.state({
		name: 'politicians',
		url:'/politicians',
		templateUrl:'/mjStateRegInfo/features/politicians/politicians.html',
		//Where controller name is defined
		controller:'PoliticiansCtrl',
		// Defines name of the module used in the view
		controllerAs:'PoliticiansVM'
	})
}