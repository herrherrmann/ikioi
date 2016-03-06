angular.module('ikioi', [
	'ui.router',
	'ui.bootstrap',
	'angular-toArrayFilter',
	'ngAnimate',
	'ngSanitize',
	'ngTouch',
	'bootstrapLightbox',
	'com.2fdevs.videogular',
	'templates-app'
])

.config(($locationProvider, $urlRouterProvider, LightboxProvider) => {
	$locationProvider.html5Mode(true);
	$urlRouterProvider.otherwise('/');
	LightboxProvider.templateUrl = 'common/lightbox.tpl.html';
})

.run(($rootScope, $state) => {
	$rootScope.state = $state;
})

;
