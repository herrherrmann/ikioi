angular.module('ikioi')

.controller('IkioiCtrl', ($scope, $rootScope, $sce, $uibModalStack, backgroundVideo) => {

	$rootScope.$on('$stateChangeSuccess', (event, toState, toParams, fromState, fromParams) => {
		// Close all modals.
		$uibModalStack.dismissAll();

		$scope.currentPageName = extractAssetName(toState.name);

		// Set HTML Title.
		$scope.pageTitle = '勢い | ' + $scope.currentPageName;

		// Update Video URLs.
		backgroundVideo.setBackgroundVideo($scope.currentPageName);

	});

	function extractAssetName(stateName) {
		return stateName.substr(5); // remove 'site.'
	}

});
