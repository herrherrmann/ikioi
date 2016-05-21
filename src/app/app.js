angular.module('ikioi', [
	'ui.router',
	'ui.bootstrap',
	'ngAnimate',
	'ngSanitize',
	'ngTouch',
	'bootstrapLightbox',
	'com.2fdevs.videogular',
	'templates-app'
])

.config(($compileProvider, $locationProvider, $urlRouterProvider, LightboxProvider) => {
	$compileProvider.debugInfoEnabled(false);
	$locationProvider.html5Mode(true);
	$urlRouterProvider.otherwise('/');
	LightboxProvider.templateUrl = 'common/lightbox.tpl.html';
})

.run(($rootScope, $state) => {
	$rootScope.state = $state;
})

;
