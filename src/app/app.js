angular.module('ikioi', [
	'ui.router',
	'ui.bootstrap',
	'ngAnimate',
	'templates-app',
	'angular-toArrayFilter'
])

.config(($locationProvider, $urlRouterProvider) => {
	$locationProvider.html5Mode(true);
	$urlRouterProvider.otherwise('/');
})

.run(($rootScope, $state) => {
	$rootScope.state = $state;
})

;
