angular.module('ikioi')

.controller('VideoCtrl', ($scope, $sce, $timeout, $state) => {
	$scope.backgroundVideo = {
		videoURLs: null,
		posterURL: null
	};

	setBackgroundVideo(extractAssetName($state.current.name));

	function extractAssetName(stateName) {
		return stateName.substr(5); // remove 'site.'
	}

	function setBackgroundVideo(assetName) {
		// special cases.
		switch(assetName) {
			case 'impressum':
				assetName = 'start';
		}
		$scope.backgroundVideo.videoURLs = [{
			src: $sce.trustAsResourceUrl('assets/video/' + assetName + '.webm'),
			type: "video/webm"
		}, {
			src: $sce.trustAsResourceUrl('assets/video/' + assetName + '.mp4'),
			type: "video/mp4"
		}];
		$scope.backgroundVideo.posterURL = 'assets/img/stills/' + assetName + '.jpg';
	}
});
