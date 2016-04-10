angular.module('ikioi')

.config(($stateProvider) => {

	$stateProvider
		.state('site', {
			views: {
				header: {
					templateUrl: 'header/header.tpl.html'
				},
				video: {
					templateUrl: 'video/video.tpl.html'
				}
			}
		})

	.state('site.start', {
		url: '/',
		views: {
			'main@': {
				templateUrl: 'start/start.tpl.html',
				controller: 'StartCtrl'
			}
		}
	})

	.state('site.info', {
		url: '/info',
		views: {
			'main@': {
				templateUrl: 'info/info.tpl.html',
				controller: 'InfoCtrl'
			}
		}
	})

	.state('site.live', {
		url: '/live',
		views: {
			'main@': {
				templateUrl: 'live/live.tpl.html',
				controller: 'LiveCtrl'
			}
		}
	})

	.state('site.physical', {
		url: '/physical',
		views: {
			'main@': {
				templateUrl: 'physical/physical.tpl.html',
				controller: 'PhysicalCtrl'
			}
		}
	})

	.state('site.impressum', {
		url: '/impressum',
		views: {
			'main@': {
				templateUrl: 'impressum/impressum.tpl.html'
			}
		}
	});

});
