angular.module('jw-ng-template')
	.config(($stateProvider) => {

		$stateProvider
			.state('page-1', {
				url: '/',
				templateUrl: 'page-1/page-1.tpl.html',
				controller: 'Page1Ctrl'
			});
	});
