angular.module('ikioi')

.controller('IkioiCtrl', ($rootScope, $sce, $uibModalStack, backgroundVideo) => {

	$rootScope.$on('$stateChangeSuccess', (event, toState, toParams, fromState, fromParams) => {
		// Close all modals.
		$uibModalStack.dismissAll();
		const currentPageName = extractAssetName(toState.name);
		setPageTitle(currentPageName);
		backgroundVideo.setBackgroundVideo(currentPageName);

	});

	function extractAssetName(stateName) {
		const assetName = stateName.substr(5); // remove 'site.'
		switch(assetName) {
			case 'impressum':
				return 'start';
			default:
				return assetName;
		}
	}

	function setPageTitle(title) {
		// Set HTML Title.
		$rootScope.pageTitle = '勢い';
		if(title !== 'start') {
			$rootScope.pageTitle += ' | ' + title;
		}
	}

});
