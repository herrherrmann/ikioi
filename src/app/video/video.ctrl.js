angular.module('ikioi')

.controller('VideoCtrl', ($scope, $sce, $state, $timeout) => {
	$scope.backgroundVideo = {
		videoURLs: null,
		posterURL: null
	};
	const animationTime = 0.8; // in s

	$scope.$on('changeBackgroundVideo', (event, assetName) => {
		setBackgroundVideo(assetName, true);
	});

	setBackgroundVideo(extractAssetName($state.current.name));

	function extractAssetName(stateName) {
		return stateName.substr(5); // remove 'site.'
	}

	function setBackgroundVideo(assetName, animate) {
		// special cases.
		switch(assetName) {
			case 'impressum':
				assetName = 'start';
		}
		if(animate) {
			let videoElement = document.querySelector('videogular.animation-frame');
			videoElement.classList.add('ng-leave');
			$timeout(() => {
				videoElement.classList.remove('ng-leave');
				videoElement.classList.add('ng-enter');
				$scope.backgroundVideo.videoURLs = [{
					src: $sce.trustAsResourceUrl('assets/video/' + assetName + '.webm'),
					type: "video/webm"
				}, {
					src: $sce.trustAsResourceUrl('assets/video/' + assetName + '.mp4'),
					type: "video/mp4"
				}];
				$scope.backgroundVideo.posterURL = 'assets/img/stills/' + assetName + '.jpg';
			}, animationTime * 1000);
			$timeout(() => {
				videoElement.classList.remove('ng-enter');
			}, animationTime * 2000);
		} else {
			$scope.backgroundVideo.videoURLs = [{
				src: $sce.trustAsResourceUrl('assets/video/' + assetName + '.webm'),
				type: "video/webm"
			}, {
				src: $sce.trustAsResourceUrl('assets/video/' + assetName + '.mp4'),
				type: "video/mp4"
			}];
			$scope.backgroundVideo.posterURL = 'assets/img/stills/' + assetName + '.jpg';
		}
	}
});
