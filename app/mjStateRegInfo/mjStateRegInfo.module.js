//Declared the main module (app)
angular
	.module('mjStateRegInfo', [
		//Global Dependencies,
		'ui.router',
		//Features
		'mjStateRegInfo.home',
		'mjStateRegInfo.strains',
		'mjStateRegInfo.politicians',
		'mjStateRegInfo.state'	
	])
	.config(appConfig);

function appConfig($urlRouterProvider) {
	// If the URL does not exist as a route, redirect to /
	$urlRouterProvider.otherwise('/');
}