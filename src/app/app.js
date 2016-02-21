angular.module('jw-ng-template', [
	'ui.router',
	'ui.bootstrap',
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
