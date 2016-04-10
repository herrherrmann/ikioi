angular.module('ikioi')

.controller('IkioiCtrl', ($rootScope, $sce, $uibModalStack) => {

	$rootScope.$on('$stateChangeSuccess', (event, toState, toParams, fromState, fromParams) => {
		// Close all modals.
		$uibModalStack.dismissAll();
		const pageName = extractAssetName(toState.name);
		setPageTitle(pageName);
	});

	function extractAssetName(stateName) {
		return stateName.substr(5); // remove 'site.'
	}

	function setPageTitle(title) {
		// Set HTML Title.
		$rootScope.pageTitle = '勢い';
		if(title !== 'start') {
			$rootScope.pageTitle += ' | ' + title;
		}
	}

});
