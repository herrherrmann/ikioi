angular.module('ikioi')

.controller('IkioiCtrl', ($scope, $rootScope, $sce) => {

	$rootScope.$on('$stateChangeSuccess', (event, toState, toParams, fromState, fromParams) => {
		$scope.currentPageName = extractAssetName(toState.name);

		// Set HTML Title
		$scope.pageTitle = '勢い | ' + $scope.currentPageName;

		// Update Video URLs
		$scope.videoURLs = [{
			src: $sce.trustAsResourceUrl('assets/video/' + $scope.currentPageName + '.mp4'),
			type: "video/mp4"
		}, {
			src: $sce.trustAsResourceUrl('assets/video/' + $scope.currentPageName + '.webm'),
			type: "video/webm"
		}];

	});

	function extractAssetName(stateName) {
		return stateName.substr(5); // remove 'site.'
	}

});
