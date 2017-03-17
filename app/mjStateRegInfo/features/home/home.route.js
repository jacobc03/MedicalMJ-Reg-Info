
angular
	.module('mjStateRegInfo.home')
	.config(homeConfig);

function homeConfig($stateProvider) {
	$stateProvider.state({
		name: 'home',
		url:'/',
		templateUrl:'/mjStateRegInfo/features/home/home.html',
		//Where controller name is defined
		controller:'HomeCtrl',
		// Defines name of the module used in the view
		controllerAs:'HomeVM'
	})
}