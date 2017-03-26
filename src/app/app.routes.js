angular.module('ikioi').config(($stateProvider) => {

	$stateProvider
		.state('site', {
			views: {
				'header@': {
					templateUrl: 'header/header.tpl.html'
				}
			}
		})

		.state('site.start', {
			url: '/',
			views: {
				'main@': {
					templateUrl: 'start/start.tpl.html',
					controller: 'StartCtrl'
				},
				'video@': {
					templateUrl: 'video/video.tpl.html',
					controller: 'VideoCtrl'
				}
			}
		})

		.state('site.info', {
			url: '/info',
			views: {
				'main@': {
					templateUrl: 'info/info.tpl.html',
					controller: 'InfoCtrl'
				},
				'video@': {
					templateUrl: 'video/video.tpl.html',
					controller: 'VideoCtrl'
				}
			}
		})

		.state('site.live', {
			url: '/live',
			views: {
				'main@': {
					templateUrl: 'live/live.tpl.html',
					controller: 'LiveCtrl'
				},
				'video@': {
					templateUrl: 'video/video.tpl.html',
					controller: 'VideoCtrl'
				}
			}
		})

		.state('site.physical', {
			url: '/physical',
			views: {
				'main@': {
					templateUrl: 'physical/physical.tpl.html',
					controller: 'PhysicalCtrl'
				},
				'video@': {
					templateUrl: 'video/video.tpl.html',
					controller: 'VideoCtrl'
				}
			}
		})

		.state('site.impressum', {
			url: '/impressum',
			views: {
				'main@': {
					templateUrl: 'impressum/impressum.tpl.html'
				},
				'video@': {
					templateUrl: 'video/video.tpl.html',
					controller: 'VideoCtrl'
				}
			}
		});

});
