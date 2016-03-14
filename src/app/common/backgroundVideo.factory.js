angular.module('ikioi')

.factory('backgroundVideo', ($rootScope, $sce) => {
	$rootScope.backgroundVideo = {
		videoURLs: null,
		posterURL: null
	};

	function setBackgroundVideo(assetName) {
		$rootScope.backgroundVideo.videoURLs = [{
			src: $sce.trustAsResourceUrl('assets/video/' + assetName + '.webm'),
			type: "video/webm"
		}, {
			src: $sce.trustAsResourceUrl('assets/video/' + assetName + '.mp4'),
			type: "video/mp4"
		}];
		$rootScope.backgroundVideo.posterURL = 'assets/img/stills/' + assetName + '.jpg';
	}

	return {
		setBackgroundVideo
	};
});
