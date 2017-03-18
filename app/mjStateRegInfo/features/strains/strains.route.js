angular
	.module('mjStateRegInfo.strains')
	.config(strainsConfig);

function strainsConfig($stateProvider) {
	$stateProvider.state({
		name: 'strains',
		url:'/strains',
		templateUrl:'/mjStateRegInfo/features/strains/strains.html',
		//Where controller name is defined
		controller:'StrainsCtrl',
		// Defines name of the module used in the view
		controllerAs:'StrainsVM'
	})
}